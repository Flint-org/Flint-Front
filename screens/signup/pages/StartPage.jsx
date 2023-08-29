
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { WithLocalSvg } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { login } from "@react-native-seoul/kakao-login";
import NaverLogin from "@react-native-seoul/naver-login";
import { useSelector } from "react-redux";

import FlintLogoSvg from "../../../assets/images/flint_logo.svg";
import KakaoLogoSvg from "../../../assets/images/kakao_logo.svg";
import NaverLogoSvg from "../../../assets/images/naver_logo.svg";
import DetailsInfoPage from "./DetailsInfoPage";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 120px 30px 0;
  background-color: white;
  gap: 155px;
`;
const BtnWrap = styled.View`
  gap: 15px;
  width: 100%;
`;
const StartBtn = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 55px;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
`;
const BtnText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.color};
  font-weight: 600;
`;

const StartPage = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState(null);
  //FIXME: 그냥 테스트 코드라 추후에 삭제필요.
  /* user store에 올려놓은 토큰 값 받아와지는지 테스트 코드
  const myToken = useSelector((state) => {
    return state.user.token;
  });
  console.log(myToken)
  */
  const signInWithKakao = async () => {
    try {
      const token = await login();
      setToken(token.accessToken);
      console.log(token);
    } catch (err) {
      console.error("error: ", err);
    }
  };

  const signInWithNaver = async () => {
    const { failureResponse, successResponse, isSuccess } =
      await NaverLogin.login({
        appName: "com.flintfront",
        consumerKey: "to11DuJF425zfdagzPWl",
        consumerSecret: "MVoE5xJDwh",
        serviceUrlScheme: "flint",
      });
    if (isSuccess) {
      setToken(successResponse.accessToken);
      console.log(successResponse);
    } else {
      console.log("error: " + failureResponse);
    }
  };

  useEffect(() => {
    navigation.navigate(DetailsInfoPage);
    console.log("accessToken: " + token);
  }, [token]);

  return (
    <Container>
      <WithLocalSvg width={135} asset={FlintLogoSvg} />
      <BtnWrap>
        <StartBtn
          backgroundColor={"#fae100"}
          onPress={() => {
            signInWithKakao();
          }}
        >
          <WithLocalSvg height={22} asset={KakaoLogoSvg} />
          <BtnText color={"#381e1f"}>카카오톡으로 시작하기</BtnText>
        </StartBtn>
        <StartBtn
          backgroundColor={"#3bac37"}
          onPress={() => {
            signInWithNaver();
          }}
        >
          <WithLocalSvg height={22} asset={NaverLogoSvg} />
          <BtnText color={"#fff"}>네이버로 시작하기</BtnText>
        </StartBtn>
      </BtnWrap>
    </Container>
  );
};

export default StartPage;
