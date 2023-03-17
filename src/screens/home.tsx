import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>Home</Text>
      <Button
        title="Go back"
        onPress={() => {
          console.log('hello');
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Home;
