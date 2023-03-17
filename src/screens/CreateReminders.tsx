import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container} from '../components';
import {ContainerSize} from '../components/Container';
import {Colors} from '../utils/colors';

const CreateReminders = () => {
  return (
    <View style={styles.container}>
      <Container containerSize={ContainerSize.Small} />
    </View>
  );
};

export default CreateReminders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
});
