import React, { useState } from "react";
import styled from "styled-components/native";
import { WithLocalSvg } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { Text, TouchableOpacity } from "react-native";

import BackArrowSvg from "../../../assets/images/back_arrow.svg";
import PlusSvg from "../../../assets/images/plus.svg";
import DeleteSVG from "../../../assets/images/delete_group.svg";
import MoveGroup from "../../../assets/images/dehaze.svg";

const EditGroup = () => {
  const navigation = useNavigation();
  const [groupData, setGroupData] = useState([
    { label: "전체", key: 1 },
    { label: "운동", key: 2 },
    { label: "등산", key: 3 },
    { label: "동아리", key: 4 },
  ]);
  const renderItem = ({ item, drag, isActive }) => {
    return (
      <GroupContainer>
        <WithLocalSvg width={20} height={20} asset={DeleteSVG} />
        <GroupInput value={item.label} />
        <TouchableOpacity onPressIn={drag} disabled={isActive}>
          <WithLocalSvg width={20} height={20} asset={MoveGroup} />
        </TouchableOpacity>

        {/* */}
      </GroupContainer>
    );
  };
  return (
    <Container>
      <HeaderSection>
        <PrevPageBtn onPress={() => navigation.goBack()}>
          <WithLocalSvg
            width={20}
            height={20}
            fill={"#000"}
            asset={BackArrowSvg}
          />
        </PrevPageBtn>
        <HeaderTitle>그룹 편집</HeaderTitle>
        <SaveBtn onPress={() => setClickSave(true)}>
          <WithLocalSvg width={20} height={20} fill={"#000"} asset={PlusSvg} />
        </SaveBtn>
      </HeaderSection>
      <DraggableFlatList
        data={groupData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        onDragEnd={({ data }) => setGroupData(data)}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 0 30px 45px;
`;
const GroupContainer = styled.View`
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-color: rgba(243, 243, 243, 1);
  border-bottom-width: 2px;
`;
const GroupInput = styled.TextInput`
  width: 240px;
  height: 40px;
  background-color: rgba(243, 243, 243, 1);
  border-radius: 5px;
  padding: 20px;
`;
const HeaderSection = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 105px;
  padding: 45px 0 0;
  background-color: #fff;
  margin-bottom: 2%;
`;
const HeaderTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
`;
const PrevPageBtn = styled.TouchableOpacity``;
const SaveBtn = styled.TouchableOpacity``;
const BtnText = styled.Text`
  color: #fff;
  font-size: 16px;
  line-height: 30px;
  font-weight: 600;
  margin: 0 auto;
`;

export default EditGroup;
