/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

export class ThreeDViewerUtils {
  private static readonly SYSTEM_BITMAPS = [
    ['ANHYDRITEP', 'ANHYDRITE', 'ANHY'],
    ['ANTHRACITE_COALP', 'ANTHRACITE_COAL', 'ANTH'],
    ['ASHY_SEDIMENTSP', 'ASHY_SEDIMENTS', 'ASHY'],
    ['BASALTP', 'BASALT', 'BASA'],
    ['BITUMINOUS_COALP', 'BITUMINOUS_COAL', 'BITU'],
    ['CHALKP', 'CHALK', 'CHAL'],
    ['CHERTP', 'CHERT', 'CHER'],
    ['CONGLOMERATEP', 'CONGLOMERATE', 'CONG'],
    ['DIATOMITEP1', 'DIATOMITE1', 'DIAT'],
    ['DIATOMITEP2', 'DIATOMITE2', 'DIAT'],
    ['DIATOMITEP3', 'DIATOMITE3', 'DIAT'],
    ['DOLOMITEP1', 'DOLOMITE1', 'DOLO'],
    ['DOLOMITEP2', 'DOLOMITE2', 'DOLO'],
    ['GASP', 'GAS', 'GAS'],
    ['GRANITEP', 'GRANITE', 'GRAN'],
    ['GYPSUMP', 'GYPSUM', 'GYPS'],
    ['HALITEP', 'HALITE', 'HALI|SALT'],
    ['LIMESTONEP1', 'LIMESTONE1', 'LIME'],
    ['LIMESTONEP2', 'LIMESTONE2', 'LIME'],
    ['MARBLEP', 'MARBLE', 'MARB'],
    ['OILP', 'OIL', 'OIL'],
    ['SANDSTONEP1', 'SANDSTONE1', 'SAND'],
    ['SANDSTONEP2', 'SANDSTONE2', 'SAND'],
    ['SANDSTONEP3', 'SANDSTONE3', 'SAND'],
    ['SANDSTONEP4', 'SANDSTONE4', 'SAND'],
    ['SANDY_LIMESTONEP', 'SANDY_LIMESTONE', 'SAND&LIME'],
    ['SANDY_SHALEP', 'SANDY_SHALE', 'MUDSTON|SAND&SHAL'],
    ['SHALEP1', 'SHALE1', 'SHAL'],
    ['SHALEP2', 'SHALE2', 'SHAL'],
    ['SHALEP3', 'SHALE3', 'SHAL'],
    // ['SHALEP4' , 'SHALE4' , 'SHAL'],
    ['SHALEY_SANDP', 'SHALEY_SAND', 'SILT|SHAL&SAND'],
    ['WATERP', 'WATER', 'WATE'],
  ];

  constructor() {}

  static decode(sSrc: string): string {
    const nSrcLen = sSrc.length;

    if (nSrcLen === 0) {
      return '';
    }
    if (sSrc.indexOf('_uu_') > -1) {
      sSrc = sSrc.replace('_uu_', '');
      const pOut = ThreeDViewerUtils.decode1(sSrc);
      return pOut;
    } else {
      return sSrc;
    }
  }

  private static decode1(sSrc: string) {
    let res = '';
    const nSrcLen = sSrc.length;
    const nNumQuads = nSrcLen / 4;

    for (let i = 0; i < nNumQuads; i++) {
      const A = ThreeDViewerUtils.findPos(sSrc[4 * i]);
      const B = ThreeDViewerUtils.findPos(sSrc[4 * i + 1]);
      const C = ThreeDViewerUtils.findPos(sSrc[4 * i + 2]);
      const D = ThreeDViewerUtils.findPos(sSrc[4 * i + 3]);
      if (A < 0 || B < 0 || C < -1 || D < -1) {
        return res;
      }

      // tslint:disable-next-line:no-bitwise
      res += String.fromCharCode((A << 2) | (B >> 4));
      if (C === -1) {
        break;
      }
      // tslint:disable-next-line:no-bitwise
      res += String.fromCharCode(((B & 0xf) << 4) | (C >> 2));
      if (D === -1) {
        break;
      }
      // tslint:disable-next-line:no-bitwise
      res += String.fromCharCode(((C & 0x3) << 6) | (D & 0x3f));
    }

    return res;
  }

  private static findPos(ch: string): number {
    const code = ch.charCodeAt(0);
    if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
      return code - 'A'.charCodeAt(0);
    }

    if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
      return code - 'a'.charCodeAt(0) + 26;
    }

    if (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) {
      return code - '0'.charCodeAt(0) + 52;
    }
    if (ch === '+') {
      return 62;
    }
    if (ch === '/') {
      return 63;
    }
    if (ch === '=') {
      return -1;
    }

    return -2;
  }

  public static determineBitmapFileName(
    rockName: string,
    rockId: number
  ): string {
    const uRockName = rockName.toUpperCase();
    for (let i = 1; i < ThreeDViewerUtils.SYSTEM_BITMAPS.length; i++) {
      if (uRockName.indexOf(ThreeDViewerUtils.SYSTEM_BITMAPS[i][2])) {
        return ThreeDViewerUtils.SYSTEM_BITMAPS[2][1].toLowerCase() + '.bmp';
      }
    }
    const index = rockId % 10;
    return `User${index}.bmp`;
  }

  static oneAndOnlyFromArray(value: any): string {
    if (value instanceof Array && value.length === 1) {
      return value[0];
    } else {
      return value;
    }
  }

  static stringToArrayOfNumber(value: any): number[] {
    if (value.length === 0) {
      return [];
    }

    let ret: number[][] = [];
    const splittedVals =
      ThreeDViewerUtils.oneAndOnlyFromArray(value).split(',');
    ret = splittedVals.map((each: string) => {
      if (each.indexOf('x') > 0) {
        const tokens = each.split('x');
        const arr = [];
        for (let i = 0; i < Number.parseInt(tokens[0]); i++) {
          arr.push(Number(tokens[1]));
        }
        return arr;
      } else {
        return [Number(each)];
      }
    });
    return ret.flat().sort((a, b) => a - b);
  }

  static roundTo(num: number, mult: number, nearest: number): number {
    let temp;

    if (nearest == 0) {
      temp = 0;
    } else if (num >= 0) {
      temp = (mult * num) / nearest + 1.0;
      temp = temp * nearest;
    } else {
      num = Math.abs(num);
      temp = (mult * num) / nearest + 1.0;
      temp = -temp * nearest;
    }
    return temp;
  }

  static safePow(x: number, y: number): number {
    let val;

    if (x < 0) {
      val = 0.0;
    } else {
      val = Math.pow(x, y);
    }
    return val;
  }

  static safeLog10(x: number): number {
    if (x <= 0.0) {
      return 0.0;
    } else {
      return Math.log10(x);
    }
  }
}
