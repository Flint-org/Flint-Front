import React, { useState } from 'react';
import styled from 'styled-components/native';
import { WithLocalSvg } from 'react-native-svg';

import AlertSvg from '../../assets/images/alert.svg';
import OrangeNextBtn from './OrangeNextBtn';

/* 모달 컴포넌트
 * props.text : 모달에 출력될 텍스트 메세지
 * props.setModalVisible : 모달 보여짐 여부를 설정하는 state 갱신 함수
 * props.succes : 인증 성공 모달인지 인증 실패 모달인지 구분 (true면 인증 성공)
 */

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
  gap: 18px;
  background-color: #fff;
  border-radius: 8px;
`;
const ModalText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  text-align: center;
  margin-bottom: 5px;
`;

const AlertModal = ({ text, onPress }) => {
  return (
    <ModalWrap transparent={true} visible={true}>
      <ModalBackground>
        <ModalView>
          <WithLocalSvg width={35} height={35} asset={AlertSvg} />
          <ModalText>{text}</ModalText>
          <OrangeNextBtn
            width={'100%'}
            height={'40px'}
            fontSize={'16px'}
            active={true}
            text={'확인'}
            onPress={onPress}
          />
        </ModalView>
      </ModalBackground>
    </ModalWrap>
  );
};

export default AlertModal;
