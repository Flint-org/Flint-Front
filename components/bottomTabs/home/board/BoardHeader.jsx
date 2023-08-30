import React from "react";
import styled from "styled-components/native";
import { WithLocalSvg } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import BackArrowSvg from "../../../../assets/images/back_arrow.svg";

const BoardHeader = ({ title }) => {
  const Header = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 105px;
    padding: 45px 30px 0;
    background-color: #fff;
  `;

  const Btn = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
  `;

  const TitleWrap = styled.View`
    flex: 1;
    align-items: center;
    margin-right: 30px;
  `;
  const Title = styled.Text`
    font-weight: 700;
    font-size: 20px;
    color: #000;
  `;

  const navigation = useNavigation();
  return (
    <Header>
      <Btn
        tn
        onPress={() => {
          navigation.navigate("BottomTabs", { screen: "Home" });
        }}
      >
        <WithLocalSvg
          width={20}
          height={20}
          fill={"#000"}
          asset={BackArrowSvg}
        />
      </Btn>
      <TitleWrap>
        <Title>{title}</Title>
      </TitleWrap>
    </Header>
  );
};

export default BoardHeader;
