import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import BoardHeader from "../../../components/bottomTabs/home/board/BoardHeader";
import GeneralScreen from "./generalBoard/GeneralScreen";
import { useQuery } from "react-query";
import { communityAPI } from "../../../api";
import Loader from "../../../components/common/Loader";
import HoverBtn from "../../../components/bottomTabs/home/board/HoverBtn";

const Tab = createMaterialTopTabNavigator();

const GeneralBoard = () => {
  const { isLoading, data: boardObj } = useQuery(
    "generalBoardList",
    communityAPI.generalBoardList
  );
  const [currentScreen, setCurrentScreen] = useState(null);

  useEffect(() => {
    if (boardObj) {
      setCurrentScreen(boardObj.data.data[0]);
    }
  }, [boardObj]);

  if (isLoading) {
    return <Loader visible={isLoading} />;
  }
  const {
    data: { data: boardData },
  } = boardObj;

  return (
    <>
      <BoardHeader title={"일반게시판"} />
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarItemStyle: { width: 145 },
          tabBarLabelStyle: {
            fontSize: 17,
            fontWeight: 600,
            marginBottom: 5,
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#FF9810",
          },
          tabBarScrollEnabled: true,
        }}
      >
        <Tab.Screen
          name={boardData[0].boardName}
          component={GeneralScreen}
          initialParams={{ boardId: boardData[0].boardId }}
          listeners={{
            focus: () => {
              setCurrentScreen(boardData[0]);
            },
          }}
        />
        <Tab.Screen
          name={boardData[1].boardName}
          component={GeneralScreen}
          initialParams={{ boardId: boardData[1].boardId }}
          listeners={{
            focus: () => {
              setCurrentScreen(boardData[1]);
            },
          }}
        />
        <Tab.Screen
          name={boardData[2].boardName}
          component={GeneralScreen}
          initialParams={{ boardId: boardData[2].boardId }}
          listeners={{
            focus: () => {
              setCurrentScreen(boardData[2]);
            },
          }}
        />
        <Tab.Screen
          name={boardData[3].boardName}
          component={GeneralScreen}
          initialParams={{ boardId: boardData[3].boardId }}
          listeners={{
            focus: () => {
              setCurrentScreen(boardData[3]);
            },
          }}
        />
        <Tab.Screen
          name={boardData[4].boardName}
          component={GeneralScreen}
          initialParams={{ boardId: boardData[4].boardId }}
          listeners={{
            focus: () => {
              setCurrentScreen(boardData[4]);
            },
          }}
        />
      </Tab.Navigator>
      <HoverBtn currentScreen={currentScreen} />
    </>
  );
};

export default GeneralBoard;
