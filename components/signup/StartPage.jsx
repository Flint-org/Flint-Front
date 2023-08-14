import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import DetailsInfoPage from './DetailsInfoPage';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
// FIXME: 페이지 작업 들어가면 해당 스타일링 삭제
const Text = styled.Text`
  color: white;
  font-weight: 500;
`;
// FIXME: 페이지 작업 들어가면 해당 스타일링 삭제
const Btn = styled.TouchableOpacity`
  background-color: black;
  padding: 10px 15px;
`;

const SignupPage = () => {
  const navigation = useNavigation();
  return (
    <Container>
      {/* FIXME: 버튼과 텍스트 부분 페이지 작업 들어가면 삭제 */}
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
