import React, { useState } from 'react';
import styled from 'styled-components/native';
import * as DocumentPicker from 'expo-document-picker';
import { WithLocalSvg } from 'react-native-svg';

import EmailVerificationPage2 from './EmailVerificationPage2';
import SignupHeader from './SignupHeader';
import CameraSvg from '../../assets/images/camera.svg';
import OrangeNextBtn from '../common/OrangeNextBtn';

/* TODO: 전체 완료 시 삭제
 * 증명서 첨부 UI 생성 (O)
 * 로컬에서 이미지 or pdf 가져오는 로직 구현 (O)
 * 버튼 클릭 시 모달창 띄우기
 * 버튼 클릭 시 이미지 전송
 */

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #fff;
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
const UploadBtn = styled.TouchableOpacity`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 35px 30px;
  margin-bottom: 8%;
  border: ${(props) => (props.border ? 0 : '1px solid #ff9810')};
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
`;
const BtnText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.fontColor};
  font-weight: ${(props) => (props.bold ? 700 : 500)};
`;

const CertificatePage = () => {
  // 인증서 파일 가져오기 성공여부, URI, name 정보 state
  const [selectSuccess, setSelectSuccess] = useState(false);
  const [certificateURI, setCertificateURI] = useState('');
  const [certificateName, setCertificateName] = useState('');

  /* selectCertificate : 인증서 받아오는 함수
   * 파일을 받아와서 certificateURI state에  URI 저장
   */
  const selectCertificate = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['image/*', 'application/pdf'],
    });
    if (result.canceled) console.log('canceled');
    else {
      setSelectSuccess(true);
      setCertificateURI(result?.assets[0]?.uri);
      setCertificateName(result?.assets[0]?.name);
    }
  };
  return (
    <Container>
      <SignupHeader prevPage={EmailVerificationPage2} />
      <MainSection>
        <Title>증명서 첨부</Title>
        <SubTitle>PDF / 이미지 파일</SubTitle>
        <UploadBtn
          onPress={selectCertificate}
          backgroundColor={selectSuccess ? '#f3f3f3' : '#fff'}
          border={selectSuccess}
        >
          {selectSuccess ? (
            <BtnText
              fontColor={'#000'}
              numberOfLines={2}
              ellipsizeMode={'middle'}
            >
              {certificateName}
            </BtnText>
          ) : (
            <>
              <WithLocalSvg width={25} height={25} asset={CameraSvg} />
              <BtnText bold={true} fontColor={'#ff9810'}>
                파일 선택
              </BtnText>
            </>
          )}
        </UploadBtn>
        <OrangeNextBtn
          width={'100%'}
          height={'50px'}
          fontSize={'18px'}
          active={selectSuccess}
          text={'인증완료'}
        />
      </MainSection>
    </Container>
  );
};

export default CertificatePage;
