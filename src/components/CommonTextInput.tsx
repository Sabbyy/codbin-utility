import {faEye} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {getFullWidth} from '../utils/get-width';

interface CustomTextInputProps {
  placeholderText?: string;
  leftIcon?: string | any;
  rightIcon?: string | any;
  password?: boolean;
}
const CustomTextInput = ({
  placeholderText = 'ButtonText',
  leftIcon,
  rightIcon,
  password,
}: CustomTextInputProps) => {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <View style={styles.leftIconContainer}>
          <FontAwesomeIcon icon={leftIcon} size={20} style={styles.color} />
        </View>
      )}
      <TextInput
        style={styles.color}
        placeholder={placeholderText}
        placeholderTextColor="white"
        secureTextEntry={password ? true : false}
      />
      {password && (
        <View style={styles.rightIconContainer}>
          <FontAwesomeIcon
            icon={password ? faEye : rightIcon ? rightIcon : null}
            size={20}
            style={styles.color}
          />
        </View>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131823',
    flexDirection: 'row',
    width: getFullWidth() - 32,
    height: 56,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  leftIconContainer: {marginRight: 8},
  color: {
    color: 'white',
  },
  rightIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
});
