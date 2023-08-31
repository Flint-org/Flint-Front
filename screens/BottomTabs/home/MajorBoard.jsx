import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import BoardHeader from "../../../components/bottomTabs/home/board/BoardHeader";
import Engineering from "./majorBoard/Engineering";
import Social from "./majorBoard/Social";
import Education from "./majorBoard/Education";
import Medical from "./majorBoard/Medical";
import NaturalScience from "./majorBoard/NaturalScience";
import LiberalArts from "./majorBoard/LiberalArts";
import ArtsAthletics from "./majorBoard/ArtsAthletics";

const Tab = createMaterialTopTabNavigator();

const MajorBoard = () => {
  return (
    <>
      <BoardHeader title={"전공게시판"} />
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarItemStyle: { width: 145 },
          tabBarLabelStyle: { fontSize: 18, fontWeight: 600, marginBottom: 8 },
          tabBarIndicatorStyle: {
            backgroundColor: "#FF9810",
          },
          tabBarScrollEnabled: true,
        }}
      >
        <Tab.Screen name="공학계열" component={Engineering} />
        <Tab.Screen name="자연계열" component={NaturalScience} />
        <Tab.Screen name="인문계열" component={LiberalArts} />
        <Tab.Screen name="사회계열" component={Social} />
        <Tab.Screen name="교육계열" component={Education} />
        <Tab.Screen name="의학계열" component={Medical} />
        <Tab.Screen name="예체능계열" component={ArtsAthletics} />
      </Tab.Navigator>
    </>
  );
};

export default MajorBoard;
