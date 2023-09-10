import React from "react";
import styled from "styled-components/native";
import { WithLocalSvg } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import BackArrowSvg from "../../../../assets/images/back_arrow.svg";

const BoardDetailHeader = ({ title, subTitle }) => {
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
    font-size: 18px;
    color: #000;
  `;
  const SubTitle = styled.Text`
    font-size: 12px;
    color: rgba(118, 118, 118, 1);
  `;

  const navigation = useNavigation();
  return (
    <Header>
      <Btn
        tn
        onPress={() => {
          navigation.goBack();
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
        <SubTitle>{subTitle}</SubTitle>
      </TitleWrap>
    </Header>
  );
};

export default BoardDetailHeader;
