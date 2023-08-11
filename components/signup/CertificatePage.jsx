import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import SignupPage from './SignupPage';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;

const CertificatePage = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Btn
        onPress={() => {
          navigation.navigate(SignupPage);
        }}
      >
        <Text>4</Text>
      </Btn>
    </Container>
  );
};

export default CertificatePage;
