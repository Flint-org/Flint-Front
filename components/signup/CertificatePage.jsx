import React, { useState } from 'react';
import styled from 'styled-components/native';
import * as DocumentPicker from 'expo-document-picker';

import EmailVerificationPage2 from './EmailVerificationPage2';
import SignupHeader from './SignupHeader';

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #fff;
`;
const UploadBtn = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: red;
`;

const CertificatePage = () => {
  const [certificateURI, setCertificateURI] = useState('');

  const selectCertificate = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['image/*', 'application/pdf'],
    });
    if (result.canceled) console.log('canceled');
    else {
      setCertificateURI(result.assets[0].uri);
      console.log(certificateURI);
    }
  };
  return (
    <Container>
      <SignupHeader />
      <UploadBtn title={'upload'} onPress={selectCertificate}></UploadBtn>
    </Container>
  );
};

export default CertificatePage;
