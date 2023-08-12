import React from "react";
import styled from "styled-components/native";
import {
  login,
  logout,
  getProfile as getKakaoProfile,
  shippingAddresses as getKakaoShippingAddresses,
  unlink,
} from "@react-native-seoul/kakao-login";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;

const KakaoLoginTest = () => {
  const signInWithKakao = async () => {
    try {
      const token = await login();
      console.log(JSON.stringify(token));
      getProfile();
    } catch (err) {
      console.error("login err", err);
    }
  };
  const getProfile = async () => {
    return await getKakaoProfile()
      .then((result) => {
        console.log(JSON.stringify(result));
        return result;
      })
      .catch((error) => {
        throw error;
      });
  };
  return (
    <Container>
      <Btn
        onPress={() => {
          signInWithKakao();
        }}
      >
        <Text>Kakao Login</Text>
      </Btn>
    </Container>
  );
};

export default KakaoLoginTest;
