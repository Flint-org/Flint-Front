import React from "react";
import styled from "styled-components/native";
import BoxCardComponent from "../../../components/bottomTabs/card/BoxCardComponent";

const Container = styled.View`
  padding: 0px 30px;
`;
const Text = styled.Text``;
const Separator = styled.View`
  margin-top: 30%;
`;
const CardFlat = styled.FlatList``;

const CardBox = () => {
  const cardData = [
    {
      red: 0,
      green: 91,
      blue: 172,
      userName: "김이름",
      univ: "00대학교",
      major: "소프트웨어학과",
      grade: "19학번",
      email: "abcd@00.ac.kr",
      score: 4.1,
      sns: "@abcde",
      mbti: "ENTJ",
      introduction:
        "안녕하세요 저는 00에 관심이 많은 김이름입니다. 만나서 반갑습니다",
      interests: [
        "전시회 관람",
        "그림 그리기",
        "맛집 탐방",
        "IT",
        "게임",
        "노래",
        "악기",
      ],
    },
    {
      red: 139,
      green: 0,
      blue: 41,
      userName: "박건태",
      univ: "00대학교",
      major: "소프트웨어학과",
      grade: "19학번",
      email: "abcd@00.ac.kr",
      score: 4.1,
      sns: "@abcde",
      mbti: "ENTJ",
      introduction:
        "안녕하세요 저는 00에 관심이 많은 김이름입니다. 만나서 반갑습니다",
      interests: [
        "전시회 관람",
        "그림 그리기",
        "맛집 탐방",
        "IT",
        "게임",
        "노래",
        "악기",
      ],
    },
    {
      red: 105,
      green: 190,
      blue: 130,
      userName: "박이름",
      univ: "00대학교",
      major: "소프트웨어학과",
      grade: "19학번",
      email: "abcd@00.ac.kr",
      score: 4.1,
      sns: "@abcde",
      mbti: "ENTJ",
      introduction:
        "안녕하세요 저는 00에 관심이 많은 김이름입니다. 만나서 반갑습니다",
      interests: [
        "전시회 관람",
        "그림 그리기",
        "맛집 탐방",
        "IT",
        "게임",
        "노래",
        "악기",
      ],
    },
    {
      red: 0,
      green: 91,
      blue: 172,
      userName: "내이름",
      univ: "00대학교",
      major: "소프트웨어학과",
      grade: "19학번",
      email: "abcd@00.ac.kr",
      score: 4.1,
      sns: "@abcde",
      mbti: "ENTJ",
      introduction:
        "안녕하세요 저는 00에 관심이 많은 김이름입니다. 만나서 반갑습니다",
      interests: [
        "전시회 관람",
        "그림 그리기",
        "맛집 탐방",
        "IT",
        "게임",
        "노래",
        "악기",
      ],
    },
  ];
  return (
    <Container>
      <CardFlat
        data={cardData}
        renderItem={({ item, index }) => {
          if (index == cardData.length - 1) {
            return <BoxCardComponent cardData={item} isEnd={true} />;
          }
          return <BoxCardComponent cardData={item} isEnd={false} />;
        }}
        //ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};

export default CardBox;
