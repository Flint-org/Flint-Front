import React from 'react';
import styled from 'styled-components/native';
import CardComponent from './CardComponent';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;
const Text = styled.Text``;

const MyCard = () => {
  return (
    <Container>
      <CardComponent />
    </Container>
  );
};

export default MyCard;
