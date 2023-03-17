import {
  faUserCircle,
  faBell,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable} from 'react-native';
import {CreatePoll, CreateReminders, Login, Notification} from '../screens';
import Account from '../screens/account';
import Dashboard from '../screens/dashboard';
import Home from '../screens/home';
import {Colors} from '../utils/colors';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="Home"
        options={{headerShown: true}}
        component={Home}
      />
      <Stack.Screen
        name="Account"
        options={{
          headerShown: true,
          headerTitle: 'Account',
          headerTitleStyle: {color: Colors.white},
          headerTitleAlign: 'left',
          headerStyle: {backgroundColor: Colors.navy},
          headerLeft: () => (
            <Pressable
              style={{marginRight: 16}}
              onPress={() => {
                navigation.navigate('Dashboard', {});
              }}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                color={Colors.white}
                size={22}
              />
            </Pressable>
          ),
        }}
        component={Account}
      />
      <Stack.Screen
        name="Dashboard"
        options={{
          headerShown: true,
          headerTitle: 'Team utility',
          headerTitleStyle: {color: Colors.white},
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: Colors.navy},
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate('Account', {})}>
              <FontAwesomeIcon
                icon={faUserCircle}
                color={Colors.white}
                size={22}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => {
                navigation.navigate('Notification', {});
              }}>
              <FontAwesomeIcon icon={faBell} color={Colors.white} size={22} />
            </Pressable>
          ),
        }}
        component={Dashboard}
      />
      <Stack.Screen
        name="Notification"
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: Colors.navy},
          headerTitle: 'Notification',
          headerTitleStyle: {color: Colors.white},
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Pressable
              style={{marginRight: 16}}
              onPress={() => {
                navigation.navigate('Dashboard', {});
              }}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                color={Colors.white}
                size={22}
              />
            </Pressable>
          ),
        }}
        component={Notification}
      />
      <Stack.Screen
        name="CreatePoll"
        options={{
          headerShown: true,
          headerTitleStyle: {color: Colors.white},
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: Colors.navy},
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate('Account', {})}>
              <FontAwesomeIcon
                icon={faUserCircle}
                color={Colors.white}
                size={22}
              />
            </Pressable>
          ),
        }}
        component={CreatePoll}
      />
      <Stack.Screen
        name="CreateReminders"
        options={{
          headerShown: true,
          headerTitle: 'Create Reminder',
          headerTitleStyle: {color: Colors.white, fontSize: 16},
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: Colors.navy},
          headerLeft: () => (
            <Pressable
              style={{marginRight: 16}}
              onPress={() => {
                navigation.navigate('Dashboard', {});
              }}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                color={Colors.white}
                size={22}
              />
            </Pressable>
          ),
        }}
        component={CreateReminders}
      />
    </Stack.Navigator>
  );
};
export default MainNavigator;
