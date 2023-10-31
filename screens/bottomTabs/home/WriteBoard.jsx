import React, { useState } from "react";
import styled from "styled-components/native";
import BoardHeader from "../../../components/bottomTabs/home/board/BoardHeader";
import * as DocumentPicker from "expo-document-picker";

import { Feather } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

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
`;
const Content = styled.View``;

const WriteBoard = () => {
  const [selectSuccess, setSelectSuccess] = useState(false);
  const [certificateURI, setCertificateURI] = useState("");
  const [certificateName, setCertificateName] = useState("");

  const [title, onChangeTitle] = useState("");

  const selectCertificate = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/*", "application/pdf"],
    });
    if (result.canceled) console.log("canceled");
    else {
      setSelectSuccess(true);
      setCertificateURI(result?.assets[0]?.uri);
      setCertificateName(result?.assets[0]?.name);
    }
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Pear", value: "pear" },
  ]);
  return (
    <Container>
      <BoardHeader title={"글쓰기"} />
      <PictureWrap>
        <PictureUploadBtn onPress={selectCertificate}>
          <PictureIconWrap>
            <Feather name="camera" size={24} color="white" />
          </PictureIconWrap>
          <PictureCount>0/10</PictureCount>
        </PictureUploadBtn>
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
          placeholder={"Choose a fruit."}
          style={{ borderWidth: 0 }}
          dropDownContainerStyle={{
            borderWidth: 0,
          }}
        />
      </BoardName>
    </Container>
  );
};

export default WriteBoard;
