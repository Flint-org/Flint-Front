import React from "react";
import styled from "styled-components/native";
import BoardHeader from "../home/board/BoardHeader";
import PostPreview from "../home/board/PostPreview";
import { PostData } from "../../../const/TempGeneralPostData";
import { FlatList } from "react-native";

const Container = styled.View`
  flex: 1;
`;
const PostWrap = styled.View`
  flex: 1;
  padding: 30px;
`;

const MyWriting = ({ title }) => {
  return (
    <Container>
      <BoardHeader title={title} />
      <PostWrap>
        <FlatList
          data={PostData}
          renderItem={({ item }) => {
            return <PostPreview postData={item} />;
          }}
        />
      </PostWrap>
    </Container>
  );
};

export default MyWriting;
