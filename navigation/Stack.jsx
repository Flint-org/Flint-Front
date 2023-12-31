import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/signup/Signup";
import EditCard from "../screens/bottomTabs/card/EditCard";

import GeneralBoard from "../screens/bottomTabs/home/GeneralBoard";
import MajorBoard from "../screens/bottomTabs/home/MajorBoard";
import EditGroup from "../screens/bottomTabs/card/EditGroup";
import BoardDetail from "../components/bottomTabs/home/board/BoardDetail";
import WriteBoard from "../screens/bottomTabs/home/WriteBoard";
import MyWriting from "../components/bottomTabs/profile/MyWriting";

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
      <NativeStack.Screen name="EditGroup" component={EditGroup} />
      <NativeStack.Screen name="BoardDetail" component={BoardDetail} />
      <NativeStack.Screen
        name="WriteBoard"
        component={WriteBoard}
        options={{ presentation: "card" }}
      />
      <NativeStack.Screen
        name="MyWriting"
        component={MyWriting}
        options={{ presentation: "card" }}
      />
    </NativeStack.Navigator>
  );
};

export default Stack;
