import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/Signup";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="Signup" component={Signup} />
    </NativeStack.Navigator>
  );
};

export default Stack;
