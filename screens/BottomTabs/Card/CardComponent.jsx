import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';
import { Animated } from 'react-native';

const CardWrap = styled.TouchableOpacity`
  width: 100%;
  height: 195px;
`;
const CardFront = styled(Animated.View)`
  width: 100%;
  height: 195px;
  background-color: #fff;
  border-radius: 8px;
  ${Platform.OS == 'android'
    ? 'elevation: 4;'
    : 'box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.23)'};
  backface-visibility: hidden;
  position: absolute;
`;

const CardBack = styled(Animated.View)`
  width: 100%;
  height: 195px;
  border-radius: 8px;
  background-color: blue;
  backface-visibility: hidden;
`;

const CardGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const CardComponent = () => {
  //  학교별 메인컬러 R,G,B 담는 state
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(91);
  const [blue, setBlue] = useState(172);

  /* 명함 flip 애니메이션 관련 state 및 함수
   * flipValue : 애니메이션 값
   * listenerVal : flipValue의 변화값을 listen 하는 state
   * frontInterpolation : 앞면의 interpolate (flipValue의 inpuRange에 따라 ouputRange 반환)
   * backInterpolation : 뒷면의 Interpolate
   * flipCard: 실제 flip 애니메이션을 수행하는 함수
   */
  const flipValue = useRef(new Animated.Value(0)).current;
  const [listenerVal, setListenerVal] = useState(0);
  flipValue.addListener(({ value }) => {
    setListenerVal(value);
  });

  const frontInterpolation = flipValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolation = flipValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = useCallback(() => {
    if (listenerVal >= 90) {
      Animated.timing(flipValue, {
        toValue: 0,
        duration: 800,
        useNativeDrive: true,
      }).start();
    } else {
      Animated.timing(flipValue, {
        toValue: 180,
        duration: 800,
        useNativeDrive: true,
      }).start();
    }
  }, [listenerVal]);

  return (
    <CardWrap onPress={flipCard}>
      <CardFront
        style={{
          transform: [{ rotateY: frontInterpolation }],
        }}
      >
        <CardGradient
          colors={[
            `rgba(${red}, ${green},${blue},0)`,
            `rgba(${red}, ${green},${blue},0.3)`,
            `rgba(${red}, ${green},${blue},0.9)`,
          ]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        />
      </CardFront>
      <CardBack
        style={{
          transform: [{ rotateY: backInterpolation }],
        }}
      ></CardBack>
    </CardWrap>
  );
};

export default CardComponent;
