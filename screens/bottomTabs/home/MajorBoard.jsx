import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import BoardHeader from "../../../components/bottomTabs/home/board/BoardHeader";
import MajorScreen from "./majorBoard/MajorScreen";
import { useQuery } from "react-query";
import { communityAPI } from "../../../api";
import Loader from "../../../components/common/Loader";
import HoverBtn from "../../../components/bottomTabs/home/board/HoverBtn";

const Tab = createMaterialTopTabNavigator();

const MajorBoard = () => {
  const { isLoading, data: boardObj } = useQuery(
    "majorBoardList",
    communityAPI.majorBoardList
  );
  const [currentScreen, setCurrentScreen] = useState(null);

  if (isLoading) {
    return <Loader visible={isLoading} />;
  }
  const {
    data: { data: boardData },
  } = boardObj;

  useEffect(() => {
    setCurrentScreen(boardData[0]);
  }, []);

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
        <Tab.Screen
          name={boardData[0].upperMajor.upperMajorName}
          component={MajorScreen}
          initialParams={{ boardData: boardData[0] }}
          listeners={{
            focus: () => {
              setCurrentScreen(boardData[0]);
            },
          }}
        />
        <Tab.Screen
          name={boardData[1].upperMajor.upperMajorName}
          component={MajorScreen}
          initialParams={{ boardData: boardData[1] }}
          listeners={{
            focus: () => {
              setCurrentScreen(boardData[1]);
            },
          }}
        />
        <Tab.Screen
          name={boardData[2].upperMajor.upperMajorName}
          component={MajorScreen}
          initialParams={{ boardData: boardData[2] }}
          listeners={{
            focus: () => {
              setCurrentScreen(boardData[2]);
            },
          }}
        />
        <Tab.Screen
          name={boardData[3].upperMajor.upperMajorName}
          component={MajorScreen}
          initialParams={{ boardData: boardData[3] }}
          listeners={{
            focus: () => {
              setCurrentScreen(boardData[3]);
            },
          }}
        />
        <Tab.Screen
          name={boardData[4].upperMajor.upperMajorName}
          component={MajorScreen}
          initialParams={{ boardData: boardData[4] }}
          listeners={{
            focus: () => {
              setCurrentScreen(boardData[4]);
            },
          }}
        />
        <Tab.Screen
          name={boardData[5].upperMajor.upperMajorName}
          component={MajorScreen}
          initialParams={{ boardData: boardData[5] }}
          listeners={{
            focus: () => {
              setCurrentScreen(boardData[5]);
            },
          }}
        />
        <Tab.Screen
          name={boardData[6].upperMajor.upperMajorName}
          component={MajorScreen}
          initialParams={{ boardData: boardData[6] }}
          listeners={{
            focus: () => {
              setCurrentScreen(boardData[6]);
            },
          }}
        />
      </Tab.Navigator>
      <HoverBtn currentScreen={currentScreen} />
    </>
  );
};

export default MajorBoard;
