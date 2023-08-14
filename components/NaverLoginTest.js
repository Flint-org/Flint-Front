import React, { useState } from "react";
import styled from "styled-components/native";
import NaverLogin, {
  NaverLoginResponse,
  GetProfileResponse,
} from "@react-native-seoul/naver-login";

const consumerKey = "to11DuJF425zfdagzPWl";
const consumerSecret = "MVoE5xJDwh";
const appName = "com.flintfront";
const serviceUrlScheme = "flint";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;

const NaverLoginTest = () => {
  const [success, setSuccessResponse] = useState();
  const [failure, setFailureResponse] = useState();
  const [getProfileRes, setGetProfileRes] = useState();

  const login = async () => {
    const { failureResponse, successResponse } = await NaverLogin.login({
      appName,
      consumerKey,
      consumerSecret,
      serviceUrlScheme,
    });
    setSuccessResponse(successResponse);
    console.log(success);
    setFailureResponse(failureResponse);
    //console.log(failureResponse);
  };
  const logout = async () => {
    try {
      await NaverLogin.logout();
      setSuccessResponse(undefined);
      setFailureResponse(undefined);
      setGetProfileRes(undefined);
    } catch (e) {
      console.error(e);
    }
  };
  const getProfile = async () => {
    try {
      const profileResult = await NaverLogin.getProfile(success.accessToken);
      setGetProfileRes(profileResult);
      console.log(getProfileRes);
    } catch (e) {
      console.log(e);
      setGetProfileRes(undefined);
    }
  };

  return (
    <Container>
      <Btn
        onPress={() => {
          login();
        }}
      >
        <Text>Naver Login Test</Text>
      </Btn>
      <Btn
        onPress={() => {
          getProfile();
        }}
      >
        <Text>getProfile</Text>
      </Btn>
      <Btn
        onPress={() => {
          logout();
        }}
      >
        <Text>Logout</Text>
      </Btn>
    </Container>
  );
};

export default NaverLoginTest;
