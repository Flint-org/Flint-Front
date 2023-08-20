import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyCard from './card/MyCard';
import CardBox from './card/CardBox';

const Tab = createMaterialTopTabNavigator();

const Card = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: 600 },
        tabBarIndicatorStyle: {
          backgroundColor: '#FF9810',
        },
      }}
    >
      <Tab.Screen name="내명함" component={MyCard} />
      <Tab.Screen name="명함상자" component={CardBox} />
    </Tab.Navigator>
  );
};

export default Card;
