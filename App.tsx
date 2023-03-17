import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation';
import {
  requestUserPermission,
  NotificationListener,
  GetFCMToken,
} from './src/utils/pushnotification_helper';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    GetFCMToken();
    NotificationListener();
  }, []);
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
