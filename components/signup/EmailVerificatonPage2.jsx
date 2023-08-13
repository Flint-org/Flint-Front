import React, { useState } from 'react';
import styled from 'styled-components/native';

import SignupHeader from './SignupHeader';
import OrangeNextBtn from '../common/OrangeNextBtn';
import EmailVerificationPage from './EmailVerificationPage';

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;
const MainSection = styled.View`
  display: flex;
  padding: 30px 30px;
  width: 100%;
`;
const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8%;
`;
const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin-left: 12px;
  margin-bottom: 8%;
`;
const InputWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: #f3f3f3;
  border-radius: 8px;
  margin-bottom: 8%;
  padding: 0 15px;
`;
const NumInput = styled.TextInput`
  width: 100%;
  height: 50px;
  overflow: hidden;
  font-size: 16px;
  color: #000;
`;
const BtnWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const EmailVerificationPage2 = () => {
  const [inputNum, setInputNum] = useState(null); // 사용자가 입력한 인증번호
  // FIXME: 전송된 인증번호 데이터 가져오는 수정 필요
  const [compareNum, setCompareNum] = useState(1234); // 전송된 실제 인증번호

  const onBtnPress = () => {};

  return (
    <Container>
      <SignupHeader prevPage={EmailVerificationPage} />
      <MainSection>
        <Title>학교 이메일 인증</Title>
        <SubTitle>인증번호</SubTitle>
        <InputWrap>
          <NumInput
            placeholder="인증번호 입력"
            onChangeText={setInputNum}
            value={inputNum}
            keyboardType={'numeric'}
          />
        </InputWrap>
        <BtnWrap>
          <OrangeNextBtn
            width={'48%'}
            height={'50px'}
            active={true}
            text={'인증번호 재전송'}
          />
          <OrangeNextBtn
            width={'48%'}
            height={'50px'}
            active={inputNum !== null ? true : false}
            text={'인증완료'}
            onPress={onBtnPress}
          />
        </BtnWrap>
      </MainSection>
    </Container>
  );
};

export default EmailVerificationPage2;
