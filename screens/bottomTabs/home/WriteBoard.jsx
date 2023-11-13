import React, { useState } from "react";
import styled from "styled-components/native";
import BoardHeader from "../../../components/bottomTabs/home/board/BoardHeader";
import * as ImagePicker from "expo-image-picker";

import { Feather } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import MajorSubHeader from "../../../components/bottomTabs/home/board/MajorSubHeader";
import { FlatList } from "react-native-gesture-handler";
import { Image, Text, View } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const PictureWrap = styled.View`
  height: 100px;
  padding: 10px 20px;
  flex-direction: row;
`;
const PictureUploadBtn = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  margin: 0px 10px;
  background-color: rgba(243, 243, 243, 1);
  align-items: center;
  justify-content: center;
`;
const PictureIconWrap = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(192, 192, 192, 1);
  align-items: center;
  justify-content: center;
`;
const PictureCount = styled.Text`
  margin-top: 5px;
  color: rgba(192, 192, 192, 1);
`;
const Title = styled.TextInput`
  height: 60px;
  margin: 0px 30px;
  padding: 0px 10px;
  border: 0px solid rgba(217, 217, 217, 1);
  border-bottom-width: 1px;
  font-size: 16px;
`;
const BoardName = styled.View`
  margin: 0px 30px;
  border: 0px solid rgba(217, 217, 217, 1);
  border-bottom-width: 1px;
  z-index: 1;
`;
const SubBoardName = styled.View`
  margin: 0px 30px;
  border: 0px solid rgba(217, 217, 217, 1);
  border-bottom-width: 1px;
  z-index: 0;
`;
const ContentInput = styled.TextInput`
  height: 300px;
  margin: 20px 30px;
  padding: 0px 10px;
  font-size: 16px;
`;
const ImageWrap = styled.View``;
const ImageDeleteBtn = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 10px;
  position: absolute;
`;

const WriteBoard = ({ route }) => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      //mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
    });
    //console.log(result);
    if (!result.canceled) {
      setImage(result.assets);
      //console.log(image[0].uri);
    }
  };

  //글 제목
  const [title, onChangeTitle] = useState("");

  //글쓰기 버튼을 누른 게시판 정보 처리
  const { currentScreen, boardData, isGeneral } = route.params;
  const boardName = isGeneral
    ? currentScreen.boardName
    : currentScreen.upperMajor.upperMajorName;
  const boardItem = boardData.map((obj) => {
    if (isGeneral) {
      return { label: obj.boardName, value: obj.boardName };
    } else {
      return {
        label: obj.upperMajor.upperMajorName,
        value: obj.upperMajor.upperMajorName,
      };
    }
  });

  //게시판 분류 DropDownPicker 관련 상태
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(boardName);
  const [items, setItems] = useState(boardItem);

  //전공 게시판 소분류 헤더 관련 상태
  const [selectedIdx, setSelectedIdx] = useState(0);

  //내용 입력 관련 상태
  const [text, onChangeText] = useState("");

  return (
    <Container>
      <BoardHeader title={"글쓰기"} />
      <PictureWrap>
        <PictureUploadBtn onPress={pickImage}>
          <PictureIconWrap>
            <Feather name="camera" size={24} color="white" />
          </PictureIconWrap>
          <PictureCount>{image ? image.length : 0}/10</PictureCount>
        </PictureUploadBtn>
        {image && (
          <FlatList
            data={image}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <ImageWrap>
                  {/* 미리보기용 테스트 코드 */}
                  <Text style={{ color: "black", fontSize: 12 }}>
                    {item.fileName}
                  </Text>
                  <Image
                    uri={item.uri}
                    width={80}
                    height={80}
                    style={{ backgroundColor: "gray" }}
                  />
                  <ImageDeleteBtn
                    onPress={() => {
                      setImage(
                        image.filter((img) => img.assetId !== item.assetId)
                      );
                    }}
                  />
                </ImageWrap>
              );
            }}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: 15,
                }}
              />
            )}
          />
        )}
      </PictureWrap>
      <Title onChangeText={onChangeTitle} value={title} placeholder="글 제목" />
      <BoardName>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={boardName}
          style={{ borderWidth: 0 }}
          dropDownContainerStyle={{
            borderWidth: 0,
          }}
        />
      </BoardName>
      {!isGeneral && (
        <SubBoardName>
          <MajorSubHeader
            majors={currentScreen.upperMajor.lowerMajors}
            selectedIdx={selectedIdx}
            setSelectedIdx={setSelectedIdx}
          />
        </SubBoardName>
      )}
      <ContentInput
        editable
        multiline
        maxLength={1000}
        onChangeText={onChangeText}
        value={text}
        placeholder="내용을 입력하세요."
      />
    </Container>
  );
};

export default WriteBoard;
