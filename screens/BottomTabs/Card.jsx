import React from "react";
import styled from "styled-components/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyCard from "./Card/MyCard";
import CardBox from "./Card/CardBox";

const Tab = createMaterialTopTabNavigator();

const Card = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 15 },
        tabBarIndicatorStyle: {
          backgroundColor: "#FF9810",
        },
      }}
    >
      <Tab.Screen name="내명함" component={MyCard} />
      <Tab.Screen name="명함상자" component={CardBox} />
    </Tab.Navigator>
  );
};

export default Card;
