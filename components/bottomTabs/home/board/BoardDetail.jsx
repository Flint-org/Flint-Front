import React from "react";
import styled from "styled-components/native";
import BoardDetailHeader from "./BoardDetailHeader";

const Container = styled.View``;
const Text = styled.Text``;

const BoardDetail = ({ route }) => {
  const { postData } = route.params;

  return (
    <Container>
      <BoardDetailHeader title={postData.type} subTitle={postData.type} />
      <Text>BoardDetail</Text>
    </Container>
  );
};

const AuthorInfo = () => {};
export default BoardDetail;
