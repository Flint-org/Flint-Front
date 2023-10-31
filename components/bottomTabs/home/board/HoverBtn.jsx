import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const HoverWrap = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: orange;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

const HoverBtn = ({ currentScreen }) => {
  return (
    <HoverWrap>
      <Feather name="edit" size={26} color="white" />
    </HoverWrap>
  );
};

export default HoverBtn;
