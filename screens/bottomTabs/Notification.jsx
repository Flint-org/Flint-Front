import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const AlertContainer = styled.View`
  border: 0px solid rgba(217, 217, 217, 1);
  border-top-width: 2px;
`;
const AlertBox = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.isRead ? "white" : "rgba(255, 246, 231, 1)"};
  height: 90px;
  border: 0px solid rgba(217, 217, 217, 1);
  border-bottom-width: 2px;
  align-items: center;
  flex-direction: row;
`;
const TextBox = styled.View`
  margin-left: 20px;
  width: 60%;
`;
const MainText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
`;
const SubText = styled.Text`
  font-size: 13px;
  margin-bottom: 5px;
  font-weight: 500;
`;
const AlertIcon = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: rgba(255, 152, 16, 1);
  margin-left: 20px;
  justify-content: center;
  align-items: center;
`;
const EmptyBox = styled.View`
  flex: 1;
  //background-color: gray;
  justify-content: center;
  align-items: center;
`;
const EmptyText = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: rgba(217, 217, 217, 1);
  margin: 10px 0px;
`;

const Notification = () => {
  const data = [
    {
      isRead: false,
      class: "전공게시판",
      content:
        "내 게시글에 댓글이 달렸어요: 달린 댓글 달린 댓글 달린 댓글 달린 댓글 달린 댓글",
      date: "11/18 12:15",
    },
    {
      isRead: false,
      class: "전공게시판",
      content:
        "내 게시글에 댓글이 달렸어요: 달린 댓글 달린 댓글 달린 댓글 달린 댓글 달린 댓글",
      date: "11/18 12:15",
    },
    {
      isRead: true,
      class: "전공게시판",
      content:
        "내 게시글에 댓글이 달렸어요: 달린 댓글 달린 댓글 달린 댓글 달린 댓글 달린 댓글",
      date: "11/18 12:15",
    },
    {
      isRead: true,
      class: "전공게시판",
      content:
        "내 게시글에 댓글이 달렸어요: 달린 댓글 달린 댓글 달린 댓글 달린 댓글 달린 댓글",
      date: "11/18 12:15",
    },
    {
      isRead: true,
      class: "전공게시판",
      content:
        "내 게시글에 댓글이 달렸어요: 달린 댓글 달린 댓글 달린 댓글 달린 댓글 달린 댓글",
      date: "11/18 12:15",
    },
    {
      isRead: true,
      class: "전공게시판",
      content:
        "내 게시글에 댓글이 달렸어요: 달린 댓글 달린 댓글 달린 댓글 달린 댓글 달린 댓글",
      date: "11/18 12:15",
    },
    {
      isRead: true,
      class: "전공게시판",
      content:
        "내 게시글에 댓글이 달렸어요: 달린 댓글 달린 댓글 달린 댓글 달린 댓글 달린 댓글",
      date: "11/18 12:15",
    },
    {
      isRead: true,
      class: "전공게시판",
      content:
        "내 게시글에 댓글이 달렸어요: 달린 댓글 달린 댓글 달린 댓글 달린 댓글 달린 댓글",
      date: "11/18 12:15",
    },
    {
      isRead: true,
      class: "전공게시판",
      content:
        "내 게시글에 댓글이 달렸어요: 달린 댓글 달린 댓글 달린 댓글 달린 댓글 달린 댓글",
      date: "11/18 12:15",
    },
    {
      isRead: true,
      class: "전공게시판",
      content:
        "내 게시글에 댓글이 달렸어요: 달린 댓글 달린 댓글 달린 댓글 달린 댓글 달린 댓글",
      date: "11/18 12:15",
    },
    {
      isRead: true,
      class: "전공게시판",
      content:
        "내 게시글에 댓글이 달렸어요: 달린 댓글 달린 댓글 달린 댓글 달린 댓글 달린 댓글",
      date: "11/18 12:15",
    },
    {
      isRead: true,
      class: "전공게시판",
      content:
        "내 게시글에 댓글이 달렸어요: 달린 댓글 달린 댓글 달린 댓글 달린 댓글 달린 댓글",
      date: "11/18 12:15",
    },
    {
      isRead: true,
      class: "전공게시판",
      content:
        "내 게시글에 댓글이 달렸어요: 달린 댓글 달린 댓글 달린 댓글 달린 댓글 달린 댓글",
      date: "11/18 12:15",
    },
  ];
  return (
    <Container>
      {data.length != 0 ? (
        <AlertContainer>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <AlertBox isRead={item.isRead}>
                <AlertIcon>
                  {/* FIXME: 종류에 맞는 아이콘 변경 기능 필요 */}
                  <MaterialIcons
                    name="message"
                    size={36}
                    color="white"
                    style={{ marginTop: 2, marginLeft: 2 }}
                  />
                </AlertIcon>
                <TextBox>
                  <MainText>{item.class}</MainText>
                  <SubText numberOfLines={1}>{item.content}</SubText>
                  <SubText style={{ color: "rgba(160, 160, 160, 1)" }}>
                    {item.date}
                  </SubText>
                </TextBox>
              </AlertBox>
            )}
          />
        </AlertContainer>
      ) : (
        <EmptyBox>
          <Ionicons
            name="notifications-outline"
            size={28}
            color="rgba(217, 217, 217, 1)"
          />
          <EmptyText>알림 내역이 없습니다.</EmptyText>
        </EmptyBox>
      )}
    </Container>
  );
};

export default Notification;
