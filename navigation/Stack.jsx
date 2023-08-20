import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/Signup";
import EditCard from "../screens/BottomTabs/Card/EditCard";

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
    </NativeStack.Navigator>
  );
};

export default Stack;
