import React from "react";
import styled from "styled-components/native";

import { PostData } from "../../../../const/TempGeneralPostData";
import PostPreview from "../../../../components/bottomTabs/home/board/PostPreview";
import RefreshCtrl from "../../../../components/common/RefreshCtrl";

const PromotionBoard = () => {
  return (
    <Container>
      <PostsWrap
        data={PostData}
        refreshControl={<RefreshCtrl />}
        renderItem={({ item }) =>
          item.type === "promotion" && <PostPreview postData={item} />
        }
      />
    </Container>
  );
};

export default PromotionBoard;

const PostsWrap = styled.FlatList``;
const Container = styled.View`
  background-color: #f3f3f3;
  flex: 1;
  padding: 30px;
`;
