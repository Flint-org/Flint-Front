import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import BoardHeader from "../../../components/bottomTabs/home/board/BoardHeader";
import GeneralScreen from "./generalBoard/GeneralScreen";
import { useQuery } from "react-query";
import { communityAPI } from "../../../api";
import Loader from "../../../components/common/Loader";

const Tab = createMaterialTopTabNavigator();

const GeneralBoard = () => {
  const { isLoading, data: boardObj } = useQuery(
    "generalBoardList",
    communityAPI.generalBoardList
  );

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
          tabBarLabelStyle: { fontSize: 17, fontWeight: 600, marginBottom: 5 },
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
        />
        <Tab.Screen
          name={boardData[1].boardName}
          component={GeneralScreen}
          initialParams={{ boardId: boardData[1].boardId }}
        />
        <Tab.Screen
          name={boardData[2].boardName}
          component={GeneralScreen}
          initialParams={{ boardId: boardData[2].boardId }}
        />
        <Tab.Screen
          name={boardData[3].boardName}
          component={GeneralScreen}
          initialParams={{ boardId: boardData[3].boardId }}
        />
        <Tab.Screen
          name={boardData[4].boardName}
          component={GeneralScreen}
          initialParams={{ boardId: boardData[4].boardId }}
        />
      </Tab.Navigator>
    </>
  );
};

export default GeneralBoard;
