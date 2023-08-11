import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import CertificatePage from './CertificatePage';
import DetailsInfoPage from './DetailsInfoPage';
import SignupHeader from './SignupHeader';

const Container = styled.View`
  flex: 1;
  align-items: center;
`;
const Text = styled.Text`
  color: white;
  font-weight: 500;
`;
const Btn = styled.TouchableOpacity`
  background-color: black;
  padding: 10px 15px;
  padding: 10px 15px;
  margin: auto 0;
`;

const EmailVerificationPage = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <SignupHeader prevPage={DetailsInfoPage} />
      <Btn
        onPress={() => {
          navigation.navigate(CertificatePage);
        }}
      >
        <Text>이메일 인증 페이지</Text>
      </Btn>
    </Container>
  );
};

export default EmailVerificationPage;
