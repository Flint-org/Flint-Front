import React, { useState } from "react";
import styled from "styled-components/native";
import { WithLocalSvg } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import DraggableFlatList from "react-native-draggable-flatlist";

import BackArrowSvg from "../../../assets/images/back_arrow.svg";
import PlusSvg from "../../../assets/images/plus.svg";
import DeleteSVG from "../../../assets/images/delete_group.svg";
import MoveGroup from "../../../assets/images/dehaze.svg";
import AlertModal from "../../../components/common/AlertModal";

const EditGroup = () => {
  const navigation = useNavigation();
  const [groupData, setGroupData] = useState([
    { label: "운동", key: 1 },
    { label: "등산", key: 2 },
    { label: "동아리", key: 3 },
  ]);
  const [deleteModalVisiable, setDeleteModalVisiable] = useState(false);
  const renderItem = ({ item, drag, isActive }) => {
    return (
      <GroupContainer>
        <DeleteBtn onPress={() => setDeleteModalVisiable(true)}>
          <WithLocalSvg width={20} height={20} asset={DeleteSVG} />
        </DeleteBtn>
        <GroupInput value={item.label} />
        <MoveBtn onPressIn={drag} disabled={isActive}>
          <WithLocalSvg width={20} height={20} asset={MoveGroup} />
        </MoveBtn>
      </GroupContainer>
    );
  };
  return (
    <Container>
      {deleteModalVisiable && (
        <AlertModal
          text={"명함을 삭제하시겠습니까?"}
          onPress={() => setDeleteModalVisiable(false)}
        />
      )}
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
        <SaveBtn
          onPress={() => {
            const newGroup = [
              ...groupData,
              {
                label: "새로운 그룹 " + (groupData.length + 1),
                key: groupData.length + 1,
              },
            ];

            setGroupData(newGroup);
          }}
        >
          <WithLocalSvg width={18} height={18} fill={"#000"} asset={PlusSvg} />
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
  //border-bottom-width: 2px;
`;
const GroupInput = styled.TextInput`
  width: 240px;
  height: 40px;
  background-color: rgba(243, 243, 243, 1);
  border-radius: 5px;
  padding: 20px;
`;
const MoveBtn = styled.TouchableOpacity``;
const DeleteBtn = styled.TouchableOpacity``;
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

export default EditGroup;
