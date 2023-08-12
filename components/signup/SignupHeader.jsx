import React from 'react';
import styled from 'styled-components/native';
import { WithLocalSvg } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';

import BackArrowSvg from '../../assets/images/back_arrow.svg';

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 105px;
  padding: 45px 30px 0;
  background-color: #fff;
`;

const Btn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

const TitleWrap = styled.View`
  flex: 1;
  align-items: center;
`;
const Title = styled.Text`
  font-weight: ${Platform.OS === 'android' ? '600' : '700'};
  font-size: ${Platform.OS === 'android' ? '18px' : '22px'};
  color: #000;
  padding-right: 20px;
`;

const SignupHeader = ({ prevPage }) => {
  const navigation = useNavigation();
  return (
    <Header>
      <Btn
        tn
        onPress={() => {
          navigation.navigate(prevPage);
        }}
      >
        <WithLocalSvg
          width={20}
          height={20}
          fill={'#000'}
          asset={BackArrowSvg}
        />
      </Btn>
      <TitleWrap>
        <Title>회원가입</Title>
      </TitleWrap>
    </Header>
  );
};

export default SignupHeader;