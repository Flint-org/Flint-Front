import React from "react";
import styled from "styled-components/native";
import BoardDetailHeader from "./BoardDetailHeader";
import AuthorInfo from "./AuthorInfo";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const Text = styled.Text``;
const BoardWrap = styled.View``;
const ContentWrap = styled.View`
  padding: 0px 30px;
`;
const CommentWrap = styled.View``;
const Title = styled.Text`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 15px;
`;
const Content = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

const BoardDetail = ({ route }) => {
  const { postData } = route.params;
  //console.log(postData);
  return (
    <Container>
      <BoardDetailHeader title={postData.type} subTitle={postData.type} />
      <BoardWrap>
        <AuthorInfo postData={postData} />
        <ContentWrap>
          <Title>{postData.title}</Title>
          <Content>{postData.content}</Content>
        </ContentWrap>
        <Content></Content>
      </BoardWrap>
      <CommentWrap></CommentWrap>
    </Container>
  );
};

export default BoardDetail;
