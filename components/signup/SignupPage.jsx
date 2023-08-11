import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import DetailsInfoPage from './DetailsInfoPage';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  color: white;
  font-weight: 500;
`;
const Btn = styled.TouchableOpacity`
  background-color: black;
  padding: 10px 15px;
`;

const SignupPage = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Btn
        onPress={() => {
          navigation.navigate(DetailsInfoPage);
        }}
      >
        <Text>카카오 네이버 로그인 페이지</Text>
      </Btn>
    </Container>
  );
};

export default SignupPage;
