import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WithLocalSvg } from 'react-native-svg';
import styled from 'styled-components/native';
import { getHeaderTitle } from '@react-navigation/elements';

import Card from '../screens/bottomTabs/Card';
import Chat from '../screens/bottomTabs/Chat';
import Home from '../screens/bottomTabs/Home';
import Notification from '../screens/bottomTabs/Notification';
import Profile from '../screens/bottomTabs/Profile';

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
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 40px 30px 0;
  background-color: #fff;
`;
const HeaderText = styled.Text`
  font-weight: 700;
  font-size: 18px;
  color: #000;
`;

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF9810',
        tabBarLabelStyle: { fontSize: 12, marginTop: 3 },
        tabBarStyle: {
          height: Platform.OS == 'android' ? '9%' : '10%',
          paddingBottom: Platform.OS == 'android' ? '4.5%' : '7%',
          paddingTop: Platform.OS == 'android' ? '3.5%' : '2%',
          paddingLeft: 20,
          paddingRight: 20,
        },
        header: ({ route, options }) => {
          const title = getHeaderTitle(options, route.name);

          return (
            <Header>
              <HeaderText>{title}</HeaderText>
            </Header>
          );
        },
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
