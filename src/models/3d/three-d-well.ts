import { Perf } from './perf';
import { Profile } from './profile';
import { ThreeDViewerUtils as Utils } from '../../utils/three-d-viewer';
import { RockType } from './rock-type';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

export class ThreeDWell {
  perfs: Perf[];
  profileSet: Record<string, Profile[]> = {};
  rockTypes: RockType[] = [];

  constructor(
    public fileName: string,
    public topNS: number,
    public topEW: number,
    public tvd: number[],
    public md: number[],
    public easting: number[],
    public northing: number[],
    public perfsModel: any[],
    public profiles: any[],
    public rockTypesModel: any,
    public propConcProfilesModel: any[],
    public fracCondProfilesModel: any[]
  ) {
    this.perfs = perfsModel.map((each) => {
      return new Perf(
        each.MdTop[0],
        each.MdBottom[0],
        each.TvdTop[0],
        each.TvdBottom[0]
      );
    });
    this.profileSet['propConc'] = this.getProfiles(propConcProfilesModel);
    this.profileSet['fracCond'] = this.getProfiles(fracCondProfilesModel);
    if (
      rockTypesModel &&
      rockTypesModel.Rock_Names &&
      rockTypesModel.Rock_Names.length > 0
    ) {
      const rockNames = rockTypesModel.Rock_Names[0].split('†');
      this.rockTypes = rockTypesModel.LayersDepth.map((each: any) => {
        console.log(each);
        return new RockType(
          each.Tvd[0],
          each.Value[0],
          rockNames[each.Value[0]]
        );
      });
    }
  }

  private getProfiles(dataModel: Array<any>) {
    return dataModel.map((each) => {
      // console.log(each);
      const cpEllipsesInfo = each.CpEllipsesInfo[0];
      const profilePoints =
        cpEllipsesInfo.ProfilePoints.length > 0
          ? cpEllipsesInfo.ProfilePoints[0]
          : [];
      const lenProfilePoints =
        cpEllipsesInfo.LenProfilePoints &&
        cpEllipsesInfo.LenProfilePoints.length > 0
          ? cpEllipsesInfo.LenProfilePoints[0]
          : [];
      return new Profile(
        Number(cpEllipsesInfo.CpIfpRing[0].UpperDiameter[0]),
        Number(cpEllipsesInfo.CpIfpRing[0].LowerDiameer[0]),
        Number(cpEllipsesInfo.CpIfpRing[0].HorzLength[0]),
        Number(cpEllipsesInfo.CpIfpRing[0].VertCenter[0]),
        Number(cpEllipsesInfo.UpperHeight[0]),
        Number(cpEllipsesInfo.LowerHeight[0]),
        Number(cpEllipsesInfo.CenterDepth[0]),
        Number(cpEllipsesInfo.CenterDepthMD[0]),
        Number(cpEllipsesInfo.EllLength[0]),
        Number(cpEllipsesInfo.PadLength[0]),
        Number(cpEllipsesInfo.PadUpperHeight[0]),
        Number(cpEllipsesInfo.PadLowerHeight[0]),
        Number(cpEllipsesInfo.PadCenterDepth[0]),
        Number(each.XOrigin[0]),
        Number(each.YOrigin[0]),
        Number(each.XScale[0]),
        Number(each.YScale[0]),
        Number(cpEllipsesInfo.CpIfpRing[0].Shift[0]),
        [0, ...Utils.stringToArrayOfNumber(profilePoints), 0],
        Utils.stringToArrayOfNumber(lenProfilePoints),
        each.ModelRow.map((row: any) => {
          return Utils.stringToArrayOfNumber(row.ModelRow[0]);
        }),
        Number(cpEllipsesInfo.FracAzimuth[0])
      );
    });
  }
}
