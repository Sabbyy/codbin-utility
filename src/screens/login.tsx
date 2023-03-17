import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';
import {Button, CommonTextInput, Spacer} from '../components';
import {getScreenheight} from '../utils/get-width';
import {getDefaultHeaderHeight} from '../utils/globalHeight';
import {firebase} from '@react-native-firebase/database';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

const Login = () => {
  const navigation = useNavigation<any>();
  useEffect(() => {
    const usersCollection = firestore().collection('positions').get();
    console.log('users collections', usersCollection);
    const reference = firebase
      .app()
      .database('https://utilise-firestore-default-rtdb.firebaseio.com/')
      .ref('/Users');
    reference.on('value', snapshort => {
      console.log('User data', snapshort.val());
      // this.setState({
      //   name: snapshort.val(),
      // });
    });
    database()
      .ref('/Users')
      .set({
        Name: 'Sabby3',
        Location: {
          lat: 872367839882,
          long: 783687782648723,
        },
      })
      .then(() => console.log('Data set.'));

    // database()
    //   .ref('/users/123')
    //   .once('value')
    //   .then(snapshot => {
    //     console.log('User data: ', snapshot.val());
    //   });
    // const reference = database().ref('/Users');
    // console.log('here', database().ref());
  }, []);
  return (
    <ScrollView
      bounces={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      contentContainerStyle={styles.container}>
      <View style={styles.loginElements}>
        <Image
          source={require('../assets/images/logo/codebin-logo.png')}
          style={styles.logo}
        />
        <Spacer height={16} />
        <CommonTextInput placeholderText="Email" leftIcon={faEnvelope} />
        <Spacer height={24} />
        <CommonTextInput placeholderText="Password" password={true} />
        <Spacer height={24} />
        <Button
          buttonText="Login"
          onPress={() => {
            navigation.navigate('Dashboard', {});
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    minHeight: getScreenheight() - getDefaultHeaderHeight(false) - -10,
    backgroundColor: '#0B0D13',
  },
  loginElements: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  logo: {height: 112, width: 120},
});
export default Login;
