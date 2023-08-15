import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import SignupHeader from './SignupHeader';
import OrangeNextBtn from '../common/OrangeNextBtn';
import EmailVerificationPage from './EmailVerificationPage';
import CertificatePage from './CertificatePage';
import AlertModal from '../common/AlertModal';

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
  border-radius: 5px;
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
  const navigation = useNavigation();

  const [inputNum, setInputNum] = useState(''); // 사용자가 입력한 인증번호

  const [compareNum, setCompareNum] = useState(1234); // 전송된 실제 인증번호 FIXME: 데이터 필요

  const [succesModalVisible, setSuccessModalVisible] = useState(false); // 인증 성공시 뜨는 모달 여닫는 state
  const [failModalVisible, setFailsModalVisible] = useState(false); // 인증 실패시 뜨는 모달 여닫는 state

  /* 인증완료 버튼 클릭시 호출되는 함수
   * 입력 인증번호  != '' && 입력 인증번호 == 실제 인증번호 : 성공시 뜨는 모달 여닫는 state true 설정
   * 입력 인증번호  != '' && 입력 인증번호 != 실제 인증번호 : 실패시 뜨는 모달 여닫는 state true 설정
   * 입력 인증번호 === '' : 아무 변화 없음
   */
  const onBtnPress = () => {
    inputNum != ''
      ? inputNum == compareNum
        ? setSuccessModalVisible(true)
        : setFailsModalVisible(true)
      : setSuccessModalVisible(false);
  };

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
          {/* FIXME: 인증번호 재전송 처리 필요 */}
          <OrangeNextBtn
            width={'48%'}
            height={'50px'}
            fontSize={'18px'}
            active={true}
            text={'인증번호 재전송'}
          />
          <OrangeNextBtn
            width={'48%'}
            height={'50px'}
            fontSize={'18px'}
            active={inputNum !== '' ? true : false}
            text={'인증완료'}
            onPress={onBtnPress}
          />
        </BtnWrap>
      </MainSection>
      {/* 모달창 부분 */}
      {succesModalVisible && (
        <AlertModal
          text={'인증이 완료되었습니다.'}
          onPress={() => {
            setSuccessModalVisible(false);
            navigation.navigate(CertificatePage);
          }}
        />
      )}
      {failModalVisible && (
        <AlertModal
          text={'올바른 \n 인증번호를 입력해주세요.'}
          onPress={() => setFailsModalVisible(false)}
        />
      )}
    </Container>
  );
};

export default EmailVerificationPage2;
