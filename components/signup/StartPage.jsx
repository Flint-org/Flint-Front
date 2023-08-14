import React, { css } from 'react';
import styled from 'styled-components/native';
import { WithLocalSvg } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import FlintLogoSvg from '../../assets/images/flint_logo.svg';
import KakaoLogoSvg from '../../assets/images/kakao_logo.svg';
import NaverLogoSvg from '../../assets/images/naver_logo.svg';

/* TODO: 전체 완료 시 삭제
 * 로고 삽입 (O)
 * 카카오로 시작하기 버튼 생성
 * 네이버로 시작하기 버튼 생성
 * 카카오 버튼 로직
 * 네이버 버튼 로직
 * 회원가입 완료시 DetailsInfoPage로 넘어가기
 */

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 120px 30px 0;
  background-color: white;
  gap: 155;
`;
const BtnWrap = styled.View`
  gap: 15;
  width: 100%;
`;
const StartBtn = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15;
  width: 100%;
  height: 55px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
`;
const BtnText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.color};
  font-weight: 600;
`;

const SignupPage = () => {
  return (
    <Container>
      <WithLocalSvg width={135} asset={FlintLogoSvg} />
      <BtnWrap>
        <StartBtn backgroundColor={'#fae100'}>
          <WithLocalSvg height={22} asset={KakaoLogoSvg} />
          <BtnText color={'#381e1f'}>카카오톡으로 시작하기</BtnText>
        </StartBtn>
      </BtnWrap>
    </Container>
  );
};

export default SignupPage;
