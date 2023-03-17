import {
  faEllipsisVertical,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../utils/colors';
import {getFullWidth} from '../utils/get-width';

interface UserInfoCardProps {
  icon?: any;
  title: string;
  description: string;
  onPressCard?: () => void;
  onPress?: () => void;
}
const UserInfoCard = ({
  icon,
  title,
  description,
  onPressCard,
  onPress,
}: UserInfoCardProps) => {
  return (
    <View
      style={{
        padding: 16,
        width: getFullWidth() - 32,
        alignSelf: 'center',
        backgroundColor: Colors.containerColor,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: getFullWidth() - 32,
          alignSelf: 'center',
          paddingHorizontal: 8,
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faUserCircle} size={24} color={Colors.white} />
          <Text
            style={{
              color: Colors.white,
              fontSize: 16,
              lineHeight: 24,
              fontWeight: '500',
              marginLeft: 16,
            }}>
            {title}
          </Text>
        </View>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size={24}
          color={Colors.white}
        />
      </View>
      <Text
        style={{
          color: Colors.white,
          fontSize: 14,
          lineHeight: 21,
          marginLeft: 32,
          marginRight: 24,
        }}>
        {description}
      </Text>
    </View>
  );
};

export default UserInfoCard;
