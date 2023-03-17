import {faPlus, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BasicTextCard, Spacer} from '../components';
import {Colors} from '../utils/colors';

interface FabLayoutProps {
  items: any;
  onPress: (action: any) => void;
}
const FabLayout = ({items, onPress}: FabLayoutProps) => {
  const [show, setShow] = useState(false);
  return (
    <View>
      {show && (
        <View
          style={{
            bottom: 80,
            right: 10,
            alignItems: 'flex-end',
            position: 'absolute',
            paddingHorizontal: 16,
          }}>
          {items?.map((item: any) => (
            <Pressable
              onPress={() => {
                console.log('12344action:!!!!', item.action);
                onPress(item.action);
              }}>
              <BasicTextCard icon={item.icon} text={item.text} />
              <Spacer height={8} />
            </Pressable>
          ))}
        </View>
      )}
      <View>
        <TouchableOpacity
          style={styles.fabContainer}
          onPress={() => {
            setShow(!show);
          }}>
          <FontAwesomeIcon
            icon={show ? faXmark : faPlus}
            size={32}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FabLayout;

const styles = StyleSheet.create({
  fabContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: Colors.containerColor,
    borderRadius: 100,
  },
});
