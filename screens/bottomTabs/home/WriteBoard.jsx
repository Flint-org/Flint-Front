import React, { useState } from "react";
import styled from "styled-components/native";
import BoardHeader from "../../../components/bottomTabs/home/board/BoardHeader";
import * as DocumentPicker from "expo-document-picker";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const PictureWrap = styled.View``;
const PictureUploadBtn = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: gray;
`;
const Title = styled.TextInput``;
const BoardName = styled.View``;
const Content = styled.View``;

const WriteBoard = () => {
  const [selectSuccess, setSelectSuccess] = useState(false);
  const [certificateURI, setCertificateURI] = useState("");
  const [certificateName, setCertificateName] = useState("");

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

  return (
    <Container>
      <BoardHeader title={"글쓰기"} />
      <PictureWrap>
        <PictureUploadBtn onPress={selectCertificate} />
      </PictureWrap>
    </Container>
  );
};

export default WriteBoard;
