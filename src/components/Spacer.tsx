import React from 'react';
import {View} from 'react-native';

const Spacer = ({height = 8}: {height: number}) => {
  return <View style={{height: height}} />;
};

export default Spacer;
