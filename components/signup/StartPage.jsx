import React, { css, useEffect, useState } from "react";
import styled from "styled-components/native";
import { WithLocalSvg } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { login } from "@react-native-seoul/kakao-login";
import NaverLogin from "@react-native-seoul/naver-login";

import FlintLogoSvg from "../../assets/images/flint_logo.svg";
import KakaoLogoSvg from "../../assets/images/kakao_logo.svg";
import NaverLogoSvg from "../../assets/images/naver_logo.svg";
import DetailsInfoPage from "./DetailsInfoPage";

/* TODO: 전체 완료 시 삭제
 * 로고 삽입 (O)
 * 카카오로 시작하기 버튼 생성 (O)
 * 네이버로 시작하기 버튼 생성 (O)
 * 카카오 버튼 로직
 * 네이버 버튼 로직
 * 회원가입 완료시 DetailsInfoPage로 넘어가기
 */

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

  const signInWithKakao = async () => {
    try {
      const token = await login();
      setToken(token.accessToken);
      console.log(JSON.stringify(token));
    } catch (err) {
      console.error("login err", err);
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
      console.log(successResponse);
      setToken(successResponse.accessToken);
    } else {
      console.log(failureResponse);
    }
  };

  useEffect(() => {
    navigation.navigate(DetailsInfoPage);
    console.log(token);
  }, [token]);

  return (
    <Container>
      <WithLocalSvg width={135} asset={FlintLogoSvg} />
      <BtnWrap>
        {/* FIXME: 로직 수정 필요 (우선 임의로 다음 페이지로 넘어가도록 해둠)*/}
        <StartBtn
          backgroundColor={"#fae100"}
          onPress={() => {
            signInWithKakao();
          }}
        >
          <WithLocalSvg height={22} asset={KakaoLogoSvg} />
          <BtnText color={"#381e1f"}>카카오톡으로 시작하기</BtnText>
        </StartBtn>
        {/* FIXME: 로직 수정 필요 (우선 임의로 다음 페이지로 넘어가도록 해둠)*/}
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
