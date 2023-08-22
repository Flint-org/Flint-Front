import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { WithLocalSvg } from 'react-native-svg';

import BackArrowSvg from '../../../assets/images/back_arrow.svg';

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;
const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 105px;
  padding: 45px 30px 0;
  background-color: #fff;
`;
const HeaderTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  margin-left: 40px;
`;
const PrevPageBtn = styled.TouchableOpacity``;
const SaveBtn = styled.TouchableOpacity`
  width: 60px;
  height: 30px;
  background-color: #ff9810;
  border-radius: 5px;
`;
const BtnText = styled.Text`
  color: #fff;
  font-size: 16px;
  line-height: 30px;
  font-weight: 600;
  margin: 0 auto;
`;

const EditCard = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <PrevPageBtn
          onPress={() =>
            navigation.navigate('BottomTabs', { screen: 'MyCard' })
          }
        >
          <WithLocalSvg
            width={20}
            height={20}
            fill={'#000'}
            asset={BackArrowSvg}
          />
        </PrevPageBtn>
        <HeaderTitle>명함 수정</HeaderTitle>
        <SaveBtn>
          <BtnText>저장</BtnText>
        </SaveBtn>
      </Header>
    </Container>
  );
};

export default EditCard;
