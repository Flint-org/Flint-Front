import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import BoxCardComponent from "../../../components/bottomTabs/card/BoxCardComponent";

const Container = styled.View``;
const Text = styled.Text``;
const Separator = styled.View`
  margin-top: 30%;
`;
const CardFlat = styled.FlatList``;

const CardBox = () => {
  const userData = [
    "김이름",
    "박건태",
    "이혜승",
    "박이름",
    "이이름",
    "전이름",
    "문이름",
    "문이름",
    "문이름",
  ];
  return (
    <Container>
      <CardFlat
        data={userData}
        renderItem={({ item, index }) => {
          if (index == userData.length - 1) {
            return <BoxCardComponent userName={item + index} isEnd={true} />;
          }
          return <BoxCardComponent userName={item + index} isEnd={false} />;
        }}
        //ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};

export default CardBox;
