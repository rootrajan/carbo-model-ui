/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

export interface IChannelSettingModel {
  firstLeft: {
    min?: number;
    max?: number;
    channels: IChannelSettingItemModel[];
    color: string;
  };
  secondLeft: {
    min?: number;
    max?: number;
    channels: IChannelSettingItemModel[];
    color: string;
  };
  firstRight: {
    min?: number;
    max?: number;
    channels: IChannelSettingItemModel[];
    opposite?: boolean;
    color: string;
  };
  secondRight: {
    min?: number;
    max?: number;
    channels: IChannelSettingItemModel[];
    opposite?: boolean;
    color: string;
  };
}

export interface IChannelSettingItemModel {
  channelName: string;
  name: string;
  channel: IChannelItem;
  cName: string;
  unit?: string;
  color?: string;
  min?: number;
  max?: number;
  opposite?: boolean;
  originalName: string;
}

export interface IChannelItem {
  cName: string;
  name: string;
  unit: string;
  color?: string;
  min?: number;
  max?: number;
  originalName: string;
}

export const isChannelSettingModel = (object: any): boolean => {
  return object && object.firstLeft && object.secondLeft && object.firstRight;
};
