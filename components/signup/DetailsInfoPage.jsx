import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import EmailVerificationPage from './EmailVerificationPage';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;

const DetailsInfoPage = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Btn
        onPress={() => {
          navigation.navigate(EmailVerificationPage);
        }}
      >
        <Text>2</Text>
      </Btn>
    </Container>
  );
};

export default DetailsInfoPage;
