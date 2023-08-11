import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import EmailVerificationPage from './EmailVerificationPage';
import SignupHeader from './SignupHeader';

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
  padding: 10px 15px;
  margin: auto 0;
`;

const CertificatePage = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <SignupHeader prevPage={EmailVerificationPage} />
      {/* FIXME: 버튼과 텍스트 부분 페이지 작업 들어가면 삭제 */}
      <Btn
        onPress={() => {
          navigation.navigate(CertificatePage);
        }}
      >
        <Text>증명서 첨부 페이지</Text>
      </Btn>
    </Container>
  );
};

export default CertificatePage;
