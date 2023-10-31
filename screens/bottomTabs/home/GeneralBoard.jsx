import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import BoardHeader from "../../../components/bottomTabs/home/board/BoardHeader";
import FreeBoard from "./generalBoard/FreeBoard";
import FreshmanBoard from "./generalBoard/FreshmanBoard";
import PromotionBoard from "./generalBoard/PromotionBoard";
import DateBoard from "./generalBoard/DateBoard";
import PopularBoard from "./generalBoard/PopularBoard";
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
          component={FreeBoard}
          initialParams={{ boardId: boardData[0].boardId }}
        />
        <Tab.Screen
          name={boardData[1].boardName}
          component={FreshmanBoard}
          initialParams={{ boardId: boardData[1].boardId }}
        />
        <Tab.Screen
          name={boardData[2].boardName}
          component={PromotionBoard}
          initialParams={{ boardId: boardData[2].boardId }}
        />
        <Tab.Screen
          name={boardData[3].boardName}
          component={DateBoard}
          initialParams={{ boardId: boardData[3].boardId }}
        />
        <Tab.Screen
          name={boardData[4].boardName}
          component={PopularBoard}
          initialParams={{ boardId: boardData[4].boardId }}
        />
      </Tab.Navigator>
    </>
  );
};

export default GeneralBoard;
