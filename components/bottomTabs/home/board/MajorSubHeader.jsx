import React, { useState } from "react";
import styled from "styled-components/native";

/* MajorSubHeader
 * 전공게시판 서브 메뉴 선택 컴포넌트
 */
const MajorSubHeader = ({ majors, selectedIdx, setSelectedIdx }) => {
  // 서브 메뉴 버튼 컴포넌트
  const renderMajorBtn = (item, index) => {
    const backgroundColor = index === selectedIdx ? "#ff9810" : "#ccc";
    return (
      <MajorBtn
        onPress={() => setSelectedIdx(index)}
        backgroundColor={backgroundColor}
      >
        <MajorText>{item}</MajorText>
      </MajorBtn>
    );
  };

  return (
    <Header>
      <MajorList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={majors.map((item) => item.lowerMajorName)}
        renderItem={({ item, index }) => renderMajorBtn(item, index)}
        ItemSeparatorComponent={() => <MarginRight />}
      />
    </Header>
  );
};

const MarginRight = styled.View`
  margin-right: 12px;
`;
const MajorText = styled.Text`
  margin: auto auto;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
`;
const MajorBtn = styled.TouchableOpacity`
  background-color: ${(props) => props.backgroundColor};
  padding: 0 18px;
  height: 30px;
  border-radius: 30px;
`;
const MajorList = styled.FlatList``;
const Header = styled.View`
  padding: 15px 20px;
  width: 100%;
  background-color: #fff;
`;
export default MajorSubHeader;
