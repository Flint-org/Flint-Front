import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from '../screens/bottomTabs/Card';
import Chat from '../screens/bottomTabs/Chat';
import Home from '../screens/bottomTabs/Home';
import Notification from '../screens/bottomTabs/Notification';
import Profile from '../screens/bottomTabs/Profile';
import { WithLocalSvg } from 'react-native-svg';

import CardActive from '../assets/bottomTabIcons/card_active.svg';
import CardInActive from '../assets/bottomTabIcons/card_inactive.svg';
import AlarmActive from '../assets/bottomTabIcons/alarm_active.svg';
import AlarmInActive from '../assets/bottomTabIcons/alarm_inactive.svg';
import ChatActive from '../assets/bottomTabIcons/chat_active.svg';
import ChatInActive from '../assets/bottomTabIcons/chat_inactive.svg';
import HomeActive from '../assets/bottomTabIcons/home_active.svg';
import HomeInActive from '../assets/bottomTabIcons/home_inactive.svg';
import InfoActive from '../assets/bottomTabIcons/info_active.svg';
import InfoInActive from '../assets/bottomTabIcons/info_inactive.svg';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF9810',
      }}
    >
      <Tab.Screen
        name="명합첩"
        component={Card}
        options={{
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return <WithLocalSvg height={size} asset={CardActive} />;
            } else {
              return <WithLocalSvg height={size} asset={CardInActive} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="채팅방"
        component={Chat}
        options={{
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return <WithLocalSvg height={size} asset={ChatActive} />;
            } else {
              return <WithLocalSvg height={size} asset={ChatInActive} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return <WithLocalSvg height={size} asset={HomeActive} />;
            } else {
              return <WithLocalSvg height={size} asset={HomeInActive} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="알림"
        component={Notification}
        options={{
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return <WithLocalSvg height={size} asset={AlarmActive} />;
            } else {
              return <WithLocalSvg height={size} asset={AlarmInActive} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="내정보"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return <WithLocalSvg height={size} asset={InfoActive} />;
            } else {
              return <WithLocalSvg height={size} asset={InfoInActive} />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
