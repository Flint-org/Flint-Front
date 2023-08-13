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
  margin-bottom: 8%;
`;
const InpuStyleWrap = styled.View`
  display: flex;
  height: 50px;
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 0 15px;
`;
const EmailInput = styled.TextInput`
  width: 125px;
  height: 50px;
  overflow: hidden;
  font-size: 16px;
  color: #000;
`;
const AtSignText = styled.Text`
  color: #a0a0a0;
  font-size: 16px;
`;

const EmailVerificationPage2 = () => {
  // email state : local-parts@domain
  const [localParts, setLocalParts] = useState(null);
  const [domain, setDomain] = useState('naver.com');

  return (
    <Container>
      <SignupHeader prevPage={EmailVerificationPage} />
      <MainSection>
        <Title>학교 이메일 인증</Title>
        <SubTitle>인증번호</SubTitle>
        <InputWrap>
          <InpuStyleWrap>
            <EmailInput
              placeholder="이메일"
              onChangeText={setLocalParts}
              value={localParts}
            />
          </InpuStyleWrap>
          <AtSignText>@</AtSignText>
          <InpuStyleWrap>
            <EmailInput value={domain} editable={false} />
          </InpuStyleWrap>
        </InputWrap>
        <OrangeNextBtn
          width={'100%'}
          height={'50px'}
          active={localParts !== null ? true : false}
          text={'인증번호 전송'}
        />
      </MainSection>
    </Container>
  );
};

export default EmailVerificationPage2;
