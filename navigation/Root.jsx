import React, { useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack from "./Stack";
import BottomTabs from "./BottomTabs";
import { useNavigation } from "@react-navigation/native";

const Nav = createNativeStackNavigator();

const Root = ({ isTokenAvailable }) => {
  return (
    <Nav.Navigator screenOptions={{ headerShown: false }}>
      <Nav.Screen
        name="BottomTabs"
        component={BottomTabs}
        initialParams={{ isTokenAvailable }}
      ></Nav.Screen>
      <Nav.Screen name="Stack" component={Stack}></Nav.Screen>
    </Nav.Navigator>
  );
};

export default Root;
