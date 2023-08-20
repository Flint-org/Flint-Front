import React, { useRef, useState } from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';

import LogoSvg from '../../../assets/images/logo_symbol_white.svg';
import PlusSvg from '../../../assets/images/plus.svg';

const CardComponent = () => {
  // FIXME: 학교별 메인컬러 R,G,B 담는 state (데이터 필요)
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(91);
  const [blue, setBlue] = useState(172);

  // FIXME: 데이터 처리 필요
  const [userName, setUserName] = useState('김이름');
  const [univ, setUniv] = useState('00대학교');
  const [major, setMajor] = useState('소프트웨어학과');
  const [grade, setGrade] = useState('19학번');
  const [email, setEmail] = useState('abcd@00.ac.kr');
  const [score, setScore] = useState(4.1);
  const [sns, setSNS] = useState('@abcde');
  const [mbti, setMbti] = useState('ENTJ');
  const [indroduction, setIntroduction] = useState(
    '안녕하세요 저는 00에 관심이 많은 김이름입니다. 만나서 반갑습니다'
  );
  // FIXME: 특히 관심사 부분은 선택형이므로 선택에 따라 데이터를 받아와야 하고 이모지도 필요
  const [interests, setInterests] = useState([
    '전시회 관람',
    '그림 그리기',
    '맛집 탐방',
    'IT',
    '게임',
    '노래',
    '악기',
  ]);

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
        >
          <FrontNameWrap>
            {/* FIXME: 학교 로고 SVG로 변경 필요 */}
            <Circle></Circle>
            <FrontNameText color={`rgb(${red}, ${green}, ${blue})`}>
              {userName}
            </FrontNameText>
          </FrontNameWrap>
          <FrontContentWrap>
            <FrontContentText weight={800}>{univ}</FrontContentText>
            <FrontContentText>{major}</FrontContentText>
            <FrontContentText>{grade}</FrontContentText>
            <MiddleLine />
            <FrontContentText>{email}</FrontContentText>
          </FrontContentWrap>
        </CardGradient>
      </CardFront>
      <CardBack
        style={{
          transform: [{ rotateY: backInterpolation }],
        }}
        backgroundColor={`rgba(${red}, ${green}, ${blue},0.1)`}
      >
        <BackContentWrap>
          <BackTextWrap>
            <BackTitleText color={`rgb(${red}, ${green}, ${blue})`}>
              모임성적
            </BackTitleText>
            <ScoreWrap backgroundColor={`rgb(${red}, ${green}, ${blue})`}>
              <BackContentText weight={700} color={'#fff'}>
                {score}
              </BackContentText>
              <BackContentText color={'#fff'}>/ 4.5</BackContentText>
            </ScoreWrap>
          </BackTextWrap>
          {/* FIXME: 사용자가 이미지 가져오면 해당 이미지로 변경돼야 함 */}
          <BasicProfile
            colors={[
              `rgba(${red}, ${green}, ${blue}, 0.8)`,
              `rgba(${red}, ${green}, ${blue}, 0.3)`,
            ]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          >
            <WithLocalSvg height={42} asset={LogoSvg} />
          </BasicProfile>
          <BackTextWrap>
            <BackTitleText color={`rgb(${red}, ${green}, ${blue})`}>
              SNS
            </BackTitleText>
            <BackContentText color={`rgb(${red}, ${green}, ${blue})`}>
              {sns}
            </BackContentText>
          </BackTextWrap>
          <BackTextWrap>
            <BackTitleText color={`rgb(${red}, ${green}, ${blue})`}>
              MBTI
            </BackTitleText>
            <BackContentText color={`rgb(${red}, ${green}, ${blue})`}>
              {mbti}
            </BackContentText>
          </BackTextWrap>
        </BackContentWrap>
        <BackContentWrap>
          <BackContentBtn>
            <TitleWrap>
              <BackTitleText color={`rgb(${red}, ${green}, ${blue})`}>
                자기소개
              </BackTitleText>
              <WithLocalSvg height={12} width={12} asset={PlusSvg} />
            </TitleWrap>
            <IntroWrap>
              <BackContentText
                color={'#000'}
                numberOfLines={2}
                ellipsizeMode={'end'}
              >
                {indroduction}
              </BackContentText>
            </IntroWrap>
          </BackContentBtn>
          <BackContentBtn>
            <TitleWrap>
              <BackTitleText color={`rgb(${red}, ${green}, ${blue})`}>
                관심사
              </BackTitleText>
              <WithLocalSvg height={12} width={12} asset={PlusSvg} />
            </TitleWrap>
            <InterestsWrap>
              {interests.map((interest) => (
                <InterestWrap key={interest}>
                  <BackContentText color={'#000'}>{interest}</BackContentText>
                </InterestWrap>
              ))}
            </InterestsWrap>
          </BackContentBtn>
        </BackContentWrap>
      </CardBack>
    </CardWrap>
  );
};

const CardWrap = styled.TouchableOpacity`
  width: 100%;
  height: 200px;
  border-radius: 8px;
`;
const CardFront = styled(Animated.View)`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  position: absolute;
  backface-visibility: hidden;
  background-color: #fff;
  border: 2px solid rgba(0, 0, 0, 0.08);
`;
const CardGradient = styled(LinearGradient)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 25px;
`;
const FrontNameText = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: ${(props) => props.color};
`;
const FrontContentText = styled.Text`
  font-size: 13px;
  font-weight: ${(props) => (props.weight ? props.weight : 500)};
  color: #fff;
`;
const MiddleLine = styled.View`
  width: 1px;
  height: 50px;
  background-color: #fff;
  margin: 8px 0;
`;
const FrontNameWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const FrontContentWrap = styled.View`
  display: flex;
  align-items: space-between;
  justify-content: space-between;
`;
const CardBack = styled(Animated.View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  position: absolute;
  backface-visibility: hidden;
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid rgba(0, 0, 0, 0.08);
  padding: 20px 20px;
`;
const BackContentWrap = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
const BackContentBtn = styled.TouchableOpacity`
  display: flex;
  gap: 10px;
`;
const BackTextWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
const BackTitleText = styled.Text`
  font-size: 13px;
  font-weight: 700;
  color: ${(props) => props.color};
`;
const BackContentText = styled.Text`
  font-size: 12px;
  font-weight: ${(props) => (props.weight ? props.weight : 500)};
  color: ${(props) => props.color};
`;
const ScoreWrap = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 30px;
  background-color: ${(props) => props.backgroundColor};
`;
const BasicProfile = styled(LinearGradient)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  margin: 10px 0 8px;
`;
const TitleWrap = styled.View`
  width: 155px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const IntroWrap = styled.View`
  width: 155px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 7px 10px;
  border-radius: 5px;
`;
const InterestsWrap = styled.View`
  width: 155px;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  overflow: hidden;
`;
const InterestWrap = styled.View`
  background-color: #fff;
  padding: 3px 8px;
  border-radius: 20px;
`;

// FIXME: 로고 데이터 받아오면 삭제 필요
const Circle = styled.View`
  width: 35px;
  height: 35px;
  background-color: rgb(0, 91, 172);
  border-radius: 40px;
  overflow: hidden;
`;

export default CardComponent;
