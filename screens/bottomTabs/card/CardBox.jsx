import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components/native";
import BoxCardComponent from "../../../components/bottomTabs/card/BoxCardComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import bottomSheetSlice from "../../../redux_modules/slice/bottomSheetSlice";
import { useNavigation } from "@react-navigation/native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { WithLocalSvg } from "react-native-svg";

import CancelSVG from "../../../assets/images/cancel.svg";
import DeleteSVG from "../../../assets/images/delete.svg";
import MoveSVG from "../../../assets/images/drive_file_move.svg";

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
  const navigator = useNavigation();
  const cardData = [
    {
      red: 0,
      green: 91,
      blue: 172,
      userName: "파랑1",
      univ: "운동",
      major: "파랑1",
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
      userName: "운동,동아리",
      univ: "운동,동아리",
      major: "빨강",
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
      userName: "동아리",
      univ: "동아리",
      major: "초록",
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
      userName: "동아리, 등산",
      univ: "동아리, 등산",
      major: "파랑2",
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

  const [filteredCardData, setFilteredCardData] = useState(cardData);

  // bottomModal Ref 받아오기 (모달을 띄우기 위함)
  const bottomSheetRef = useSelector((state) => {
    return state.bottomSheet.bottomSheetRef;
  });
  const bottomSheetModalRef = useRef(null);

  //bottomModal에 값 보내기
  //FIXME: BottomSheetModal 사용하면 좀 더 쉽고 직관적이므로 수정 필요.
  const dispatch = useDispatch();
  const editBtnOnPress = () => {
    dispatch(
      bottomSheetSlice.actions.updateObj({
        text_1: "그룹 편집",
        onPress_1: () => {
          navigator.navigate("Stack", { screen: "EditGroup" });
          bottomSheetRef.close();
        },
        text_2: "명함 수정",
        onPress_2: () => {
          setIsEditing(true);
          bottomSheetRef.close();
          bottomSheetModalRef.current.present();
        },
      })
    );
    bottomSheetRef.snapToIndex(0);
  };

  const [isEditing, setIsEditing] = useState(false);

  const snapPoints = useMemo(() => ["15%"], []);

  //명함 편집에서 선택된 명함들의 리스트 관리
  //TODO: 받아온 리스트 토대로 그룹 이동, 삭제 기능 구현 필요
  //FIXME: 인덱스로 리스트 구성이 아닌 해당 명함의 ID로 리스트 구성 필요
  const [selectedCardList, setSelectedCardList] = useState([]);
  const toggleItemSelection = (index) => {
    if (selectedCardList.includes(index)) {
      setSelectedCardList(
        selectedCardList.filter((itemIndex) => itemIndex !== index)
      );
    } else {
      setSelectedCardList([...selectedCardList, index]);
    }
  };

  //TODO: 해당 리스트로 기능 구현 필요
  useEffect(() => {
    //console.log(selectedCardList);
  }, [selectedCardList]);

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
                  onPress={() => {
                    setSelectedGroup(item);
                    setFilteredCardData(
                      cardData.filter((card) => card.group.includes(item))
                    );
                  }}
                  bgColor={backgroundColor}
                >
                  <Text>{item}</Text>
                </Group>
              );
            }}
          />
        </GroupListWrap>
        <EditWrap>
          <EditBtn
            onPress={() => {
              editBtnOnPress();
            }}
          >
            <Text style={{ color: "rgba(255, 152, 16, 1)" }}>편집</Text>
          </EditBtn>
        </EditWrap>
      </GroupContainer>
      <CardContainer>
        <CardList
          data={filteredCardData}
          renderItem={({ item, index }) => {
            if (index == filteredCardData.length - 1) {
              return (
                <BoxCardComponent
                  cardData={item}
                  isEnd={true}
                  isEdit={isEditing}
                  toggleItemSelection={toggleItemSelection}
                  index={index}
                />
              );
            }
            return (
              <BoxCardComponent
                cardData={item}
                isEnd={false}
                isEdit={isEditing}
                toggleItemSelection={toggleItemSelection}
                index={index}
              />
            );
          }}
        />
      </CardContainer>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        handleComponent={null}
        enablePanDownToClose={false}
      >
        <BottomMenu>
          <Btn>
            <WithLocalSvg asset={CancelSVG} height={36} />
            <BtnText>그룹 지정</BtnText>
          </Btn>
          <Btn>
            <WithLocalSvg asset={DeleteSVG} height={36} />
            <BtnText>명함 삭제</BtnText>
          </Btn>
          <Btn
            onPress={() => {
              setIsEditing(false);
              bottomSheetModalRef.current.close();
            }}
          >
            <WithLocalSvg asset={MoveSVG} height={36} />
            <BtnText>편집 취소</BtnText>
          </Btn>
        </BottomMenu>
      </BottomSheetModal>
    </Container>
  );
};

const BottomMenu = styled.View`
  position: absolute;
  background-color: white;
  bottom: 0;
  height: 110px;
  width: 100%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);
  flex-direction: row;
  justify-content: space-between;
`;
const Btn = styled.TouchableOpacity`
  width: 30%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;
const BtnText = styled.Text``;

export default CardBox;
