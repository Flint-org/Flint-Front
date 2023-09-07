import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const Btn = styled.TouchableOpacity``;
const Text = styled.Text`
  font-size: 20px;
`;

const Home = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Btn
        onPress={() => navigation.navigate("Stack", { screen: "GeneralBoard" })}
      >
        <Text>일반게시판</Text>
      </Btn>
      <Btn
        onPress={() => navigation.navigate("Stack", { screen: "MajorBoard" })}
      >
        <Text>전공게시판</Text>
      </Btn>
    </Container>
  );
};

export default Home;
