import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import CardComponent from '../../../components/bottomTabs/card/CardComponent';
import { WithLocalSvg } from 'react-native-svg';

import EditSvg from '../../../assets/images/edit.svg';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0 30px;
`;
const TitleWrap = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  margin-bottom: 10%;
`;
const TitleText = styled.Text`
  font-size: 29px;
  font-weight: 700;
  line-height: 38px;
`;
const EditBtn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 53px;
  background-color: #ff9810;
  border-radius: 35px;
`;

const MyCard = () => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState('김이름');

  // FIXME: 카드에 들어가는 데이터 (key에 대한 value가 임시 값으로 수정 필요)
  return (
    <Container>
      <TitleWrap>
        <TitleText>
          {userName} 님의{'\n'}명함
        </TitleText>
        <EditBtn
          onPress={() => {
            navigation.navigate('Stack', { screen: 'EditCard' });
          }}
        >
          <WithLocalSvg height={23} width={23} asset={EditSvg} />
        </EditBtn>
      </TitleWrap>
      <CardComponent
        focus={true}
        cardData={{
          red: 0,
          green: 91,
          blue: 172,
          userName: '김이름',
          univ: '00대학교',
          major: '19학번',
          grade: '19학번',
          email: 'abcd@00.ac.kr',
          score: 4.1,
          sns: '@abcde',
          mbti: 'ENTJ',
          introduction:
            '안녕하세요 저는 00에 관심이 많은 김이름입니다. 만나서 반갑습니다',
          interests: [
            '전시회 관람',
            '그림 그리기',
            '맛집 탐방',
            'IT',
            '게임',
            '노래',
            '악기',
          ],
        }}
      />
    </Container>
  );
};

export default MyCard;
