import {
  faCalendarCheck,
  faDice,
  faSquarePollHorizontal,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Spacer, UtilityCard} from '../components';
import {Fab} from '../layouts';
import {CardCategory} from '../types';
import {Colors} from '../utils/colors';

const Dashboard = () => {
  const navigation = useNavigation();
  const data = [
    {icon: faSquarePollHorizontal, text: 'Create Poll', action: 'CreatePoll'},
    {icon: faCalendarCheck, text: 'Create Reminder', action: 'CreateReminders'},
    {icon: faDice, text: 'Create Roulette', action: null},
  ];
  const onPress = (action: string | null | undefined | any) => {
    console.log('action::::', action);
    switch (typeof action) {
      case 'string':
        navigation.navigate(action, {});
        break;
      case 'function':
        action();
        break;
      default:
        //
        break;
    }
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <Spacer height={24} />
        <UtilityCard cardType={CardCategory.VotesCard} />
        <Spacer height={24} />
        <UtilityCard
          cardType={CardCategory.TaskCard}
          taskCardItems={[
            {id: 1, heading: 'heading', description: 'description'},
            {id: 2, heading: 'heading2', description: 'description2'},
          ]}
        />
        <Spacer height={24} />
        <UtilityCard cardType={CardCategory.RouletteCard} />
        <Spacer height={24} />
        <UtilityCard cardType={CardCategory.NFCCard} />
        <Spacer height={24} />
        {/* <View style={{height: 76, width: 76, backgroundColor: 'red'}}>
        <FontAwesomeIcon icon={faPlus} size={32} color={Colors.white} />
      </View> */}
      </ScrollView>
      <Fab items={data} onPress={onPress} />
    </>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
});
