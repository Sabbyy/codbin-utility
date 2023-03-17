import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Colors} from '../utils/colors';
import Spacer from './Spacer';

interface SimpleTextCardProps {
  heading?: string;
  description?: string;
  textStyles?: ViewStyle;
}
const SimpleTextCard = ({
  heading = '',
  description = '',
  textStyles,
}: SimpleTextCardProps) => {
  return (
    <View style={styles.taskCardContainer}>
      <Text style={[styles.textStyles, textStyles]}>{heading}</Text>
      <Spacer height={8} />
      <Text style={[styles.textStyles, textStyles]}>{description}</Text>
    </View>
  );
};

export default SimpleTextCard;

const styles = StyleSheet.create({
  textStyles: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 16,
  },
  taskCardContainer: {
    backgroundColor: Colors.primaryColor,
    height: 88,
    justifyContent: 'center',
  },
});
