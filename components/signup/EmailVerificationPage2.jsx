import React, { useState } from 'react';
import styled from 'styled-components/native';
import { WithLocalSvg } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import SignupHeader from './SignupHeader';
import OrangeNextBtn from '../common/OrangeNextBtn';
import EmailVerificationPage from './EmailVerificationPage';
import CertificatePage from './CertificatePage';
import AlertSvg from '../../assets/images/alert.svg';

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

const ModalWrap = styled.Modal``;
const ModalBackground = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0 30px;
`;
const ModalView = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto auto;
  padding: 25px 30px;
  width: 85%;
  gap: 18;
  background-color: #fff;
  border-radius: 12px;
`;
const ModalText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 5px;
`;

/* 모달 컴포넌트
 * props.text : 모달에 출력될 텍스트 메세지
 * props.setModalVisible : 모달 보여짐 여부를 설정하는 state 갱신 함수
 * props.succes : 인증 성공 모달인지 인증 실패 모달인지 구분 (true면 인증 성공)
 */
const VerificationModal = ({ text, setModalVisible, success }) => {
  const navigation = useNavigation();

  return (
    <ModalWrap transparent={true} visible={true}>
      <ModalBackground>
        <ModalView>
          <WithLocalSvg width={35} height={35} asset={AlertSvg} />
          <ModalText>{text}</ModalText>
          <OrangeNextBtn
            width={'100%'}
            height={'40px'}
            active={true}
            text={'확인'}
            onPress={() => {
              success && navigation.navigate(CertificatePage);
              setModalVisible(false);
            }}
          />
        </ModalView>
      </ModalBackground>
    </ModalWrap>
  );
};

const EmailVerificationPage2 = () => {
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
            active={true}
            text={'인증번호 재전송'}
          />
          <OrangeNextBtn
            width={'48%'}
            height={'50px'}
            active={inputNum !== '' ? true : false}
            text={'인증완료'}
            onPress={onBtnPress}
          />
        </BtnWrap>
      </MainSection>
      {/* 모달창 부분 */}
      {succesModalVisible && (
        <VerificationModal
          text={'인증이 완료되었습니다.'}
          setModalVisible={setSuccessModalVisible}
          success={true}
        />
      )}
      {failModalVisible && (
        <VerificationModal
          text={'올바른 \n 인증번호를 입력해주세요.'}
          setModalVisible={setFailsModalVisible}
          success={false}
        />
      )}
    </Container>
  );
};

export default EmailVerificationPage2;
