import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import DetailsInfoPage from './DetailsInfoPage';
import SignupHeader from './SignupHeader';
import OrangeNextBtn from '../common/OrangeNextBtn';
import EmailVerificationPage2 from './EmailVerificationPage2';

/* TODO: 전체 완료 시 삭제
 * 이메일 입력 input 생성 (O)
 * 인증번호 전송 button 생성 (O)
 * 인증번호 입력 input 생성 (O)
 * 인증완료 button 생성 (O)
 * 인증 실패 modal 생성 (O)
 * 인증 완료 modal 생성 (O)
 * 사용자 소속 학교에 따라 이메일 정보 받아오기 (@ 뒷부분)
 * 인증번호 전송 button 클릭 시 인증번호 전송
 * 입력한 인증번호와 실제 인증번호 비교
 */

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

const EmailVerificationPage = () => {
  const navigation = useNavigation();

  // email state : local-parts@domain
  const [localParts, setLocalParts] = useState('');
  const [domain, setDomain] = useState('naver.com');

  // 인증번호 전송 버튼 onPress 함수
  const onBtnPress = () => {
    if (localParts !== '' && domain !== '') {
      navigation.navigate(EmailVerificationPage2);
    }
  };

  return (
    <Container>
      <SignupHeader prevPage={DetailsInfoPage} />
      <MainSection>
        <Title>학교 이메일 인증</Title>
        <SubTitle>이메일</SubTitle>
        <InputWrap>
          <InpuStyleWrap>
            <EmailInput
              placeholder="이메일"
              onChangeText={setLocalParts}
              value={localParts}
              keyboardType={'email-address'}
            />
          </InpuStyleWrap>
          <AtSignText>@</AtSignText>
          <InpuStyleWrap>
            <EmailInput
              placeholder="도메인"
              value={domain}
              onChangeText={setDomain}
              keyboardType={'email-address'}
            />
          </InpuStyleWrap>
        </InputWrap>
        <OrangeNextBtn
          width={'100%'}
          height={'50px'}
          active={localParts !== '' && setDomain !== '' ? true : false}
          text={'인증번호 전송'}
          onPress={onBtnPress}
        />
      </MainSection>
    </Container>
  );
};

export default EmailVerificationPage;