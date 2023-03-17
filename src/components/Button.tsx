import React from 'react';
import {View, Text, StyleSheet, Pressable, ViewStyle} from 'react-native';
import {getFullWidth} from '../utils/get-width';

interface CustomButtonProps {
  buttonText?: string;
  onPress?: () => void;
  buttonStyles?: ViewStyle;
}
const CustomButtom = ({
  buttonText,
  onPress,
  buttonStyles,
}: CustomButtonProps) => {
  const styles = StyleSheet.create({
    container: {
      width: getFullWidth() - 32,
      borderRadius: 8,
      height: 56,
      backgroundColor: '#0B2A4F',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 24,
      color: 'white',
    },
  });
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, buttonStyles]}>
        <Text style={styles.text}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButtom;
