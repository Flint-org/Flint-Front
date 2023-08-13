import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

import DetailsInfoPage from './DetailsInfoPage';
import SignupHeader from './SignupHeader';

/* TODO: 전체 완료 시 삭제
 * 이메일 입력 input 생성
 * 인증번호 전송 button 생성
 * 인증번호 입력 input 생성
 * 인증완료 button 생성
 * 인증 실패 modal 생성
 * 인증 완료 modal 생성
 * 사용자 소속 학교에 따라 이메일 정보 받아오기 (@ 뒷부분)
 * 인증번호 전송 button 클릭 시 인증번호 전송
 * 입력한 인증번호와 실제 인증번호 비교
 */

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const EmailVerificationPage = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <SignupHeader prevPage={DetailsInfoPage} />
    </Container>
  );
};

export default EmailVerificationPage;
