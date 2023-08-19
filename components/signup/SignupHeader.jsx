import React from 'react';
import styled from 'styled-components/native';
import { WithLocalSvg } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';

import BackArrowSvg from '../../assets/images/back_arrow.svg';

const SignupHeader = ({ prevPage, onPrevBtn = true }) => {
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
    margin-right: ${onPrevBtn ? '30px' : '0'};
  `;
  const Title = styled.Text`
    font-weight: 700;
    font-size: 18px;
    color: #000;
  `;

  const navigation = useNavigation();
  return (
    <Header>
      {onPrevBtn && (
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
      )}
      <TitleWrap>
        <Title>회원가입</Title>
      </TitleWrap>
    </Header>
  );
};

export default SignupHeader;
