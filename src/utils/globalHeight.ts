import { Platform } from 'react-native';
const getDefaultHeaderHeight = function (isLandscape) {
  if (Platform.OS === 'ios') {
    if (isLandscape && !Platform.isPad) {
      return 32;
    } else {
      return 44;
    }
  } else if (Platform.OS === 'android') {
    return 56;
  }
  return 64;
};
export { getDefaultHeaderHeight };
