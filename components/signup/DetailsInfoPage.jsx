import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import SignupHeader from './SignupHeader';
import SignupPage from './SignupPage';
import EmailVerificationPage from './EmailVerificationPage';

const Container = styled.View`
  flex: 1;
  align-items: center;
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
  padding: 10px 15px;
  margin: auto 0;
`;

const DetailsInfoPage = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <SignupHeader prevPage={SignupPage} />
      {/* FIXME: 버튼과 텍스트 부분 페이지 작업 들어가면 삭제 */}
      <Btn
        onPress={() => {
          navigation.navigate(EmailVerificationPage);
        }}
      >
        <Text>상세 정보 페이지</Text>
      </Btn>
    </Container>
  );
};

export default DetailsInfoPage;
