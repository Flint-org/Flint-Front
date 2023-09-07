import React, { useCallback, useState } from "react";
import styled from "styled-components/native";
import { RefreshControl } from "react-native";

import { PostData } from "../../../../const/TempGeneralPostData";
import PostPreview from "../../../../components/bottomTabs/home/board/PostPreview";
import SortingFilter from "../../../../components/common/SortingFilter";

const PopularBoard = () => {
  // 인기순 클릭 여부 state (false인 경우 최신순 true인 경우 인기순)
  const [clickBestBtn, setClickBestBtn] = useState(false);

  // refresh 여부 state
  const [refreshing, setRefreshing] = useState(false);

  /* refresh될 때 호출되는 함수
   * setRefreshing을 true로 만들었다가
   * 2000ms 뒤에 다시 false로 변경
   */
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <Container>
      <SortingFilter
        clickBestBtn={clickBestBtn}
        setClickBestBtn={setClickBestBtn}
      />
      <PostsWrap
        data={PostData}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) =>
          item.type === "popular" && <PostPreview postData={item} />
        }
      />
    </Container>
  );
};

export default PopularBoard;

const PostsWrap = styled.FlatList``;
const Container = styled.View`
  background-color: #f3f3f3;
  flex: 1;
  padding: 30px;
`;
