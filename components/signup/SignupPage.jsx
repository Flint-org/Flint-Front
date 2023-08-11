import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import DetailsInfoPage from './DetailsInfoPage';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;

const SignupPage = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Btn
        onPress={() => {
          navigation.navigate(DetailsInfoPage);
        }}
      >
        <Text>1</Text>
      </Btn>
    </Container>
  );
};

export default SignupPage;
