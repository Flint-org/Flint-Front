import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0 30px;
`;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;

const MyCard = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>MyCard</Text>
      <Btn
        onPress={() => {
          navigation.navigate("Stack", { screen: "EditCard" });
        }}
      >
        <Text>Edit Card</Text>
      </Btn>
    </Container>
  );
};

export default MyCard;
