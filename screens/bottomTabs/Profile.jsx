import React, { useState } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  border: 0px solid rgba(217, 217, 217, 1);
  border-top-width: 2px;
`;
const MainMenu = styled.View`
  flex: 0.5;
  background-color: rgba(243, 243, 243, 1);
`;
const SubMenu = styled.View`
  flex: 0.5;
  background-color: white;
`;
const Menu = styled.TouchableOpacity`
  height: 70px;
  justify-content: center;
  background-color: ${(props) =>
    props.isSelected ? "white" : "rgba(243, 243, 243, 1)"};
`;
const SecondMenu = styled(Menu)`
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`;
const MenuText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-left: 20px;
`;

const Profile = () => {
  const [menuNum, setMenuNum] = useState(0);
  return (
    <Container>
      <MainMenu>
        <Menu
          isSelected={menuNum == 0 ? true : false}
          onPress={() => {
            setMenuNum(0);
          }}
        >
          <MenuText>커뮤니티</MenuText>
        </Menu>
        <Menu
          isSelected={menuNum == 1 ? true : false}
          onPress={() => {
            setMenuNum(1);
          }}
        >
          <MenuText>이용안내</MenuText>
        </Menu>
        <Menu
          isSelected={menuNum == 2 ? true : false}
          onPress={() => {
            setMenuNum(2);
          }}
        >
          <MenuText>기타</MenuText>
        </Menu>
      </MainMenu>
      <SubMenu>
        {menuNum == 0 && (
          <>
            <SecondMenu>
              <MenuText>내가 쓴 글</MenuText>
              <AntDesign name="right" size={16} color="black" />
            </SecondMenu>
            <SecondMenu>
              <MenuText>내 댓글</MenuText>
              <AntDesign name="right" size={16} color="black" />
            </SecondMenu>
            <SecondMenu>
              <MenuText>저장한 글</MenuText>
              <AntDesign name="right" size={16} color="black" />
            </SecondMenu>
          </>
        )}
        {menuNum == 1 && (
          <>
            <SecondMenu>
              <MenuText>알림설정</MenuText>
              <AntDesign name="right" size={16} color="black" />
            </SecondMenu>
            <SecondMenu>
              <MenuText>공지사항</MenuText>
              <AntDesign name="right" size={16} color="black" />
            </SecondMenu>
            <SecondMenu>
              <MenuText>문의하기</MenuText>
              <AntDesign name="right" size={16} color="black" />
            </SecondMenu>
          </>
        )}
        {menuNum == 2 && (
          <>
            <SecondMenu>
              <MenuText>회원탈퇴</MenuText>
              <AntDesign name="right" size={16} color="black" />
            </SecondMenu>
            <SecondMenu>
              <MenuText>로그아웃</MenuText>
              <AntDesign name="right" size={16} color="black" />
            </SecondMenu>
          </>
        )}
      </SubMenu>
    </Container>
  );
};

export default Profile;
