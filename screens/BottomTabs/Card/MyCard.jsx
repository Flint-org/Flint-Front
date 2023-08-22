import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import CardComponent from '../../../components/bottomTabs/card/CardComponent';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 0 30px;
`;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;

const MyCard = () => {
  const navigation = useNavigation();

  // FIXME: 카드에 들어가는 데이터 (key에 대한 value가 임시 값으로 수정 필요)
  return (
    <Container>
      <CardComponent
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
      <Btn
        onPress={() => {
          navigation.navigate('Stack', { screen: 'EditCard' });
        }}
      >
        <Text>Edit Card</Text>
      </Btn>
    </Container>
  );
};

export default MyCard;
