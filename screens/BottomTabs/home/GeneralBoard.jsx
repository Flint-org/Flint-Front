import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import BoardHeader from "../../../components/bottomTabs/home/board/BoardHeader";
import FreeBoard from "./generalBoard/FreeBoard";
import FreshmanBoard from "./generalBoard/FreshmanBoard";
import PromotionBoard from "./generalBoard/PromotionBoard";
import DateBoard from "./generalBoard/DateBoard";
import PopularBoard from "./generalBoard/PopularBoard";

const Tab = createMaterialTopTabNavigator();

const GeneralBoard = () => {
  return (
    <>
      <BoardHeader title={"일반게시판"} />
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: { width: 145 },
          tabBarLabelStyle: { fontSize: 18, fontWeight: 600, marginBottom: 8 },
          tabBarIndicatorStyle: {
            backgroundColor: "#FF9810",
          },
          tabBarScrollEnabled: true,
        }}
      >
        <Tab.Screen name="자유게시판" component={FreeBoard} />
        <Tab.Screen name="새내기게시판" component={FreshmanBoard} />
        <Tab.Screen name="홍보게시판" component={PromotionBoard} />
        <Tab.Screen name="연애게시판" component={DateBoard} />
        <Tab.Screen name="인기게시판" component={PopularBoard} />
      </Tab.Navigator>
    </>
  );
};

export default GeneralBoard;
