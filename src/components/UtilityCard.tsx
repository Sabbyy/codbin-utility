import {
  faCaretLeft,
  faCaretRight,
  faChevronLeft,
  faChevronRight,
  faSquarePollHorizontal,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {CardCategory} from '../types';
import {Colors} from '../utils/colors';
import {getFullWidth} from '../utils/get-width';
import PollCard from './PollCard';
import SimpleTextCard from './SimpleTextCard';
import Spacer from './Spacer';
import {WheelPicker} from 'react-native-wheel-picker-android';
import CustomButtom from './Button';

interface UtilityCardProps {
  cardType: CardCategory;
  taskCardItems?: {
    id?: string;
    heading?: string;
    description?: string;
  };
}
const UtilityCard = ({cardType, taskCardItems}: UtilityCardProps) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const wheelPickerData = [
    'Shivani Sabby',
    'Altmesh Khan',
    'Amandeep Singh',
    'Nitin Solanky',
    'Piyush Sharma',
    'Gopal',
  ];
  const onItemSelected = selectedItem => {
    setSelectedItem(selectedItem);
  };
  const cardHeading =
    cardType === CardCategory.VotesCard
      ? 'Votes'
      : cardType === CardCategory.TaskCard
      ? 'Todays Tasks'
      : cardType === CardCategory.RouletteCard
      ? 'Roulette'
      : cardType === CardCategory.NFCCard
      ? 'Near By'
      : '';
  const cardDescription =
    cardType === CardCategory.VotesCard
      ? 'Going to gym?'
      : cardType === CardCategory.TaskCard
      ? '28 feb 2023'
      : '';

  return (
    <View style={styles.votesContainer}>
      <View style={styles.votesContainerHeading}>
        <FontAwesomeIcon
          icon={faSquarePollHorizontal}
          size={20}
          color={Colors.white}
        />
        <Text style={styles.votesContainerHeadingText}>{cardHeading}</Text>
      </View>
      {cardDescription && (
        <>
          <Spacer height={8} />
          <Text style={styles.subHeading}>{cardDescription}</Text>
        </>
      )}
      <Spacer height={16} />
      {cardType === CardCategory.VotesCard ? (
        <View>
          <PollCard />
          <Spacer height={16} />
          <PollCard />
          <Spacer height={16} />
          <Text style={styles.cardFooter}>13 Votes</Text>
        </View>
      ) : null}
      {cardType === CardCategory.TaskCard && taskCardItems && (
        <View>
          {taskCardItems.map((item, index) => (
            <>
              <SimpleTextCard
                heading="4.30 PM to 6.30 PM"
                description="PepBin @Balewadi_Highstreet"
              />
              <Spacer height={8} />
            </>
          ))}
        </View>
      )}
      {cardType === CardCategory.RouletteCard && (
        <View>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <FontAwesomeIcon
                icon={faCaretRight}
                size={40}
                color={Colors.white}
              />
            </View>
            <WheelPicker
              selectedItem={selectedItem}
              data={wheelPickerData}
              hideIndicator={true}
              onItemSelected={e => {
                console.log('e.', e);
              }}
              selectedItemTextColor={Colors.white}
              selectedItemTextSize={20}
              itemTextSize={16}
            />
            <View>
              <FontAwesomeIcon
                icon={faCaretLeft}
                size={40}
                color={Colors.white}
              />
            </View>
          </View>
          <Spacer height={16} />
          <CustomButtom
            buttonText="BlastOff"
            buttonStyles={{width: getFullWidth() - 64}}
          />
        </View>
      )}
      {cardType === CardCategory.NFCCard && (
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/images/avatar.png')} />
          <Image source={require('../assets/images/avatar.png')} />
          <Image source={require('../assets/images/avatar.png')} />
          <Image source={require('../assets/images/avatar.png')} />
        </View>
      )}
    </View>
  );
};

export default UtilityCard;

const styles = StyleSheet.create({
  votesContainer: {
    width: getFullWidth() - 32,
    alignSelf: 'center',
    backgroundColor: Colors.containerColor,
    padding: 12,
  },
  votesContainerHeading: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  votesContainerHeadingText: {
    color: Colors.white,
    marginLeft: 16,
    fontSize: 20,
    lineHeight: 30,
    borderBottomWidth: 2,
    borderBottomColor: Colors.white,
  },
  subHeading: {
    color: Colors.white,
    fontSize: 14,
    lineHeight: 21,
  },
  cardFooter: {
    color: Colors.white,
    fontSize: 14,
    lineHeight: 21,
    alignSelf: 'center',
  },
});
