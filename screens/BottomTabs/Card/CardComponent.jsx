import React, { useState } from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';

const CardWrap = styled.View`
  width: 100%;
  height: 195px;
  background-color: #fff;
  border-radius: 8px;

  ${Platform.OS == 'android'
    ? 'elevation: 4;'
    : 'box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.23)'}
`;

const CardGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const CardComponent = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(91);
  const [blue, setBlue] = useState(172);

  return (
    <CardWrap>
      <CardGradient
        colors={[
          `rgba(${red}, ${green},${blue},0)`,
          `rgba(${red}, ${green},${blue},0.3)`,
          `rgba(${red}, ${green},${blue},0.9)`,
        ]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      />
    </CardWrap>
  );
};

export default CardComponent;
