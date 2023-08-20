import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import CardComponent from '../../../components/bottomTabs/card/CardComponent';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0 30px;
`;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;

const MyCard = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <CardComponent />
      <Btn
        onPress={() => {
          navigation.navigate('Stack', { screen: 'EditCard' });
        }}
      >
        <Text>Edit Card</Text>
      </Btn>
    </Container>
  );
};

export default MyCard;
