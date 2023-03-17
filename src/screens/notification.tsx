import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Spacer, UserInfoCard} from '../components';
import {Colors} from '../utils/colors';

const Notification = () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: Colors.backgroundColor}}>
        <Text>Notification</Text>
        <View>
          {data.map(() => (
            <>
              <UserInfoCard
                title="UserName"
                description="Lörem ipsum nymirat egenanställningsföretag. Monor hemibel deciligen ka"
              />
              <Spacer height={16} />
            </>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Notification;
