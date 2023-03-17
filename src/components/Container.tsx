import React, { ReactChild } from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../utils/colors';
import {getFullWidth} from '../utils/get-width';

export enum ContainerSize {
  Small = 'small',
  Medium = 'medium',
}
interface ContainerProps {
  containerSize?: ContainerSize;
  children?: ReactChild;
}
const Container = ({containerSize, children}: ContainerProps) => {
  const styles = StyleSheet.create({
    container: {
      height: containerSize === ContainerSize.Medium ? 130 : 56,
      width: getFullWidth() - 32,
      backgroundColor: Colors.navy1,
      alignSelf: 'center',
    },
  });
  return <View style={styles.container} />;
};

export default Container;
