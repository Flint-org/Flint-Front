import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const LoaderView = styled.View`
  justify-content: center;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.5);
`;
const LoaderModal = styled.Modal``;

const Loader = ({ visible }) => {
  return (
    <LoaderModal visible={visible} transparent={true}>
      <LoaderView>
        <ActivityIndicator size="small" />
      </LoaderView>
    </LoaderModal>
  );
};

export default Loader;
