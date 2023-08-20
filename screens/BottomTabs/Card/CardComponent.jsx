import React, { useRef, useState } from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native';

const CardWrap = styled.TouchableOpacity`
  width: 100%;
  height: 195px;
  border-radius: 8px;
`;
const CardFront = styled(Animated.View)`
  width: 100%;
  height: 195px;
  border-radius: 8px;
  position: absolute;
  backface-visibility: hidden;
  background-color: #fff;
  border: 2px solid rgba(0, 0, 0, 0.08);
`;
const CardBack = styled(Animated.View)`
  width: 100%;
  height: 195px;
  border-radius: 8px;
  position: absolute;
  backface-visibility: hidden;
  background-color: ${(props) => {
    props.backgroundColor;
  }};
  border: 2px solid rgba(0, 0, 0, 0.08);
`;
const CardGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 25px;
`;

const CardComponent = () => {
  // FIXME: 학교별 메인컬러 R,G,B 담는 state (데이터 필요)
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

  const flipCard = () => {
    if (listenerVal >= 90) {
      Animated.timing(flipValue, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(flipValue, {
        toValue: 180,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <CardWrap onPress={flipCard}>
      <CardFront
        style={{
          transform: [{ rotateY: frontInterpolation }],
        }}
      >
        <CardGradient
          colors={[
            `rgba(${red}, ${green}, ${blue},0)`,
            `rgba(${red}, ${green}, ${blue},0.3)`,
            `rgba(${red}, ${green}, ${blue},0.9)`,
          ]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        ></CardGradient>
      </CardFront>
      <CardBack
        style={{
          transform: [{ rotateY: backInterpolation }],
        }}
        backgroundColor={`rgba(${red}, ${green}, ${blue},0.1)`}
      ></CardBack>
    </CardWrap>
  );
};

export default CardComponent;
