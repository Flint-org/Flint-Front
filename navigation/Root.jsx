import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack from "./Stack";
import BottomTabs from "./BottomTabs";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ headerShown: false }}>
    <Nav.Screen name="Stack" component={Stack}></Nav.Screen>
    <Nav.Screen name="BottomTabs" component={BottomTabs}></Nav.Screen>
  </Nav.Navigator>
);

export default Root;
