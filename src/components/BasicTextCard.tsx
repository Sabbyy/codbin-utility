import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../utils/colors';
import {getFullWidth} from '../utils/get-width';

interface BasicTextCardProps {
  icon: any;
  text: string;
}
const BasicTextCard = ({icon, text}: BasicTextCardProps) => {
  return (
    <View
      style={{
        height: 44,
        width: getFullWidth() / 2.4,
        backgroundColor: Colors.containerColor,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
      }}>
      {icon && <FontAwesomeIcon icon={icon} color={Colors.white} />}
      <Text
        style={{
          color: Colors.white,
          fontSize: 16,
          lineHeight: 24,
          fontWeight: '400',
          alignSelf: 'center',
          marginLeft: 8,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default BasicTextCard;
