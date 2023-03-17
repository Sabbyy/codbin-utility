import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Spacer} from '../components';
import CustomButtom from '../components/Button';
import {Colors} from '../utils/colors';
const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Spacer height={24} />
      <CustomButtom
        buttonText="Logout"
        buttonStyles={styles.button}
        onPress={() => {
          navigation.navigate('Login', {});
        }}
      />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  button: {
    alignSelf: 'center',
  },
});
