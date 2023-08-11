import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import CertificatePage from './CertificatePage';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;

const EmailVerificationPage = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Btn
        onPress={() => {
          navigation.navigate(CertificatePage);
        }}
      >
        <Text>3</Text>
      </Btn>
    </Container>
  );
};

export default EmailVerificationPage;
