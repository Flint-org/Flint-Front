import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/signup/Signup";
import EditCard from "../screens/bottomTabs/card/EditCard";

import GeneralBoard from "../screens/bottomTabs/home/GeneralBoard";
import MajorBoard from "../screens/bottomTabs/home/MajorBoard";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        presentation: "modal",
        headerShown: false,
      }}
    >
      <NativeStack.Screen name="Signup" component={Signup} />
      <NativeStack.Screen name="EditCard" component={EditCard} />
      <NativeStack.Screen name="GeneralBoard" component={GeneralBoard} />
      <NativeStack.Screen name="MajorBoard" component={MajorBoard} />
    </NativeStack.Navigator>
  );
};

export default Stack;
