import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;

const EditCard = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Btn
        onPress={() =>
          navigation.navigate('BottomTabs', { screen: 'EditCard' })
        }
      >
        <Text>EditCard</Text>
      </Btn>
    </Container>
  );
};

export default EditCard;
