import React from 'react';
import styled from 'styled-components/native';

/*
 * OrangeNextBtn 컴포넌트
 * 기능 : 활성화 전(회색)과 후(오렌지)의 버튼 색상이 변하며,
 *  활성화 후에는 다음 페이지로 이동 가능
 */
const OrangeNextBtn = ({ height, width, fontSize, active, onPress, text }) => {
  const Btn = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${height};
    width: ${width};
    background-color: ${active ? '#ff9810' : '#a0a0a0'};
    border-radius: 5px;
  `;
  const BtnText = styled.Text`
    font-size: ${fontSize};
    font-weight: 600;
    color: #fff;
  `;

  return (
    <Btn onPress={onPress}>
      <BtnText>{text}</BtnText>
    </Btn>
  );
};

export default OrangeNextBtn;
