import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import BoxCardComponent from "../../../components/bottomTabs/card/BoxCardComponent";
import { View } from "react-native";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;
const Text = styled.Text``;
const Separator = styled.View`
  margin-top: 30%;
`;
const GroupListWrap = styled.View`
  width: 80%;
`;
const CardList = styled.FlatList``;
const GroupList = styled.FlatList``;
const CardContainer = styled.View`
  margin-top: 20px;
`;
const GroupContainer = styled.View`
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  height: 64px;
  justify-content: space-between;
  border-color: rgba(217, 217, 217, 1);
  border-bottom-width: 1px;
  border-top-width: 1px;
`;
const Group = styled.TouchableOpacity`
  background-color: ${(props) => props.bgColor};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin: 17px 5px;
  height: 30px;
  width: 70px;
`;
const EditWrap = styled.View`
  margin: 0px 20px;
  width: 50px;
  justify-content: center;
`;
const EditBtn = styled.TouchableOpacity`
  height: 28px;
  border-radius: 5px;
  border: 1px solid rgba(255, 152, 16, 1);
  align-items: center;
  justify-content: center;
`;

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
      group: ["전체", "운동"],
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
      group: ["전체", "운동", "동아리"],
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
      group: ["전체", "동아리"],
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
      group: ["전체", "동아리", "등산"],
    },
  ];

  const groupData = ["전체", "운동", "동아리", "등산"];
  const [selectedGroup, setSelectedGroup] = useState("전체");
  const filteredCardData = cardData.filter((card) =>
    card.group.includes(selectedGroup)
  );

  return (
    <Container>
      <GroupContainer>
        <GroupListWrap>
          <GroupList
            horizontal={true}
            data={groupData}
            renderItem={({ item }) => {
              const backgroundColor =
                item === selectedGroup ? "#ff9810" : "#ccc";
              return (
                <Group
                  onPress={() => setSelectedGroup(item)}
                  bgColor={backgroundColor}
                >
                  <Text>{item}</Text>
                </Group>
              );
            }}
          />
        </GroupListWrap>
        <EditWrap>
          <EditBtn>
            <Text style={{ color: "rgba(255, 152, 16, 1)" }}>편집</Text>
          </EditBtn>
        </EditWrap>
      </GroupContainer>
      <CardContainer>
        <CardList
          data={filteredCardData}
          renderItem={({ item, index }) => {
            if (index == filteredCardData.length - 1) {
              return <BoxCardComponent cardData={item} isEnd={true} />;
            }
            return <BoxCardComponent cardData={item} isEnd={false} />;
          }}
          //ItemSeparatorComponent={() => <Separator />}
        />
      </CardContainer>
    </Container>
  );
};

export default CardBox;
