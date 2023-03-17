import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('screen');

export const IDEAL_LENGTH = 820;

export function isIphoneXorAbove() {
  const dimensions = Dimensions.get('window');
  return Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (dimensions.height >= 812 || dimensions.width >= 812);
}

export const getScreenheight = () => {
  return height;
};

export const getButtonWidth = () => {
  return width - 32;
};

export const getContainerWidth = () => {
  return width * 0.9;
};

export const getFullWidth = () => {
  return width;
};

export const getHeightRatio = (h: number) => {
  const ratio = h / IDEAL_LENGTH;
  return ratio;
};

/**
 * Example:
 * scale(300) = 320
 * moderateScale(300) = 310
 * moderateScale(300, 0.25) = 305
 */
const verticalScale = (size: number) => (height / IDEAL_LENGTH) * size;
const horizontalScale = (size: number) => (width / IDEAL_LENGTH) * size;
export const moderateVerticalScale = (size: number, factor = 0.5) => size + (verticalScale(size) - size) * factor;
export const moderateHorizontalScale = (size: number, factor = 0.5) => size + (horizontalScale(size) - size) * factor;
