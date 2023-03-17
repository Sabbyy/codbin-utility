import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../utils/colors';

interface PollCardProps {
  bgColor?: string;
  text?: string;
  votes?: string;
}
const PollCard = ({bgColor, text, votes}: PollCardProps) => {
  return (
    <View style={styles.pollContainer}>
      <Text style={styles.textColor}>Too expensive</Text>
      <Text style={styles.textColor}>04 Votes</Text>
    </View>
  );
};

export default PollCard;

const styles = StyleSheet.create({
  pollContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 8,
    height: 40,
    justifyContent: 'space-between',
    padding: 8,
  },
  pollsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.navy1,
    borderRadius: 8,
    height: 40,
    justifyContent: 'space-between',
    padding: 8,
  },
  textColor: {
    color: Colors.black,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
});
