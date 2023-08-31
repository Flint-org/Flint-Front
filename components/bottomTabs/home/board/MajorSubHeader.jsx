import React, { useState } from "react";
import styled from "styled-components/native";

const MajorChip = ({ item, onPress, backgroundColor }) => {
  return (
    <MajorBtn onPress={onPress} backgroundColor={backgroundColor}>
      <MajorText>{item}</MajorText>
    </MajorBtn>
  );
};

const MajorSubHeader = ({ majors }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

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
        data={majors}
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
  margin: 0 auto;
  line-height: 30px;
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
