import React, { useCallback, useState } from "react";
import styled from "styled-components/native";
import { RefreshControl } from "react-native";

import MajorSubHeader from "../../../../components/bottomTabs/home/board/MajorSubHeader";
import SortingFilter from "../../../../components/common/SortingFilter";
import { PostData2 } from "../../../../const/TempMajorPostData";
import PostPreview from "../../../../components/bottomTabs/home/board/PostPreview";

const ArtsAthletics = () => {
  // 선택된 서브 메뉴 Index 0은 전체 그 외에는 서브 메뉴
  const [selectedIdx, setSelectedIdx] = useState(0);

  // 서브 메뉴 목록 데이터
  const majorData = [
    "전체",
    "디자인",
    "무용·체육",
    "미술·조형",
    "연극·영화",
    "음악",
  ];

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
    <>
      <MajorSubHeader
        majors={majorData}
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
      />
      <Container>
        <SortingFilter
          clickBestBtn={clickBestBtn}
          setClickBestBtn={setClickBestBtn}
        />
        <PostsWrap
          data={PostData2}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => {
            if (item.type === "ArtsAthletics" && selectedIdx == 0) {
              return <PostPreview postData={item} />;
            } else if (
              item.type === "ArtsAthletics" &&
              item.subType == selectedIdx
            ) {
              return <PostPreview postData={item} />;
            }
          }}
        />
      </Container>
    </>
  );
};

export default ArtsAthletics;

const PostsWrap = styled.FlatList``;
const Container = styled.View`
  background-color: #f3f3f3;
  flex: 1;
  padding: 30px;
`;
