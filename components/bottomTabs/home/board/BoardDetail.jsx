import React from "react";
import styled from "styled-components/native";
import BoardDetailHeader from "./BoardDetailHeader";
import AuthorInfo from "./AuthorInfo";
import { WithLocalSvg } from "react-native-svg";
import { PostData } from "../../../../const/TempGeneralPostData";

import HeartSVG from "../../../../assets/images/heart.svg";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const Board = styled.ScrollView``;
const Text = styled.Text``;
const BoardWrap = styled.View``;
const ContentWrap = styled.View`
  padding: 0px 30px;
  padding-bottom: 20px;
  border-color: rgba(217, 217, 217, 1);
  border-bottom-width: 1px;
`;
const CommentWrap = styled.View``;
const Title = styled.Text`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 15px;
`;
const Content = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;
const BtnWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0px 20px;
`;
const Btn = styled.TouchableOpacity`
  flex-direction: row;
`;
const BtnText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  margin: 0px 10px;
  color: rgba(160, 160, 160, 1);
`;
const CommentBtnWrap = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;
const BoardDetail = ({ route }) => {
  const { postData } = route.params;
  //console.log(postData);
  return (
    <Container>
      <Board>
        <BoardDetailHeader title={postData.type} subTitle={postData.type} />
        <BoardWrap>
          <AuthorInfo postData={postData} isComment={false} />
          <ContentWrap>
            <Title>{postData.title}</Title>
            <Content>{postData.content}</Content>
            <BtnWrap>
              <Btn>
                <WithLocalSvg
                  asset={HeartSVG}
                  height={16}
                  width={16}
                  fill={"rgba(160, 160, 160, 1)"}
                />
                <BtnText>좋아요</BtnText>
              </Btn>
              <Btn>
                <WithLocalSvg
                  asset={HeartSVG}
                  height={16}
                  width={16}
                  fill={"rgba(160, 160, 160, 1)"}
                />
                <BtnText>댓글쓰기</BtnText>
              </Btn>
              <Btn>
                <WithLocalSvg
                  asset={HeartSVG}
                  height={16}
                  width={16}
                  fill={"rgba(160, 160, 160, 1)"}
                />
                <BtnText>공유하기</BtnText>
              </Btn>
            </BtnWrap>
          </ContentWrap>
        </BoardWrap>
        {PostData.map((commentData) => {
          return (
            <CommentWrap>
              <AuthorInfo postData={commentData} isComment={true} />
              <ContentWrap>
                <Content>{commentData.content}</Content>
                <CommentBtnWrap>
                  <Btn>
                    <WithLocalSvg
                      asset={HeartSVG}
                      height={14}
                      width={14}
                      fill={"rgba(160, 160, 160, 1)"}
                    />
                    <BtnText>좋아요</BtnText>
                  </Btn>
                  <Btn>
                    <WithLocalSvg
                      asset={HeartSVG}
                      height={14}
                      width={14}
                      fill={"rgba(160, 160, 160, 1)"}
                    />
                    <BtnText>답글쓰기</BtnText>
                  </Btn>
                </CommentBtnWrap>
              </ContentWrap>
            </CommentWrap>
          );
        })}
      </Board>
      <CommentInputWrap>
        <CommentInput placeholder={"댓글을 입력해주세요."}></CommentInput>
        <SendBtn></SendBtn>
      </CommentInputWrap>
    </Container>
  );
};

const CommentInputWrap = styled.View`
  height: 100px;
  background-color: white;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const CommentInput = styled.TextInput`
  background-color: rgba(243, 243, 243, 1);
  width: 70%;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 20px;
`;
const SendBtn = styled.TouchableOpacity`
  width: 50px;
  height: 38px;
  margin-left: 5%;
  margin-bottom: 10px;
  background-color: rgba(255, 152, 16, 1);
  border-radius: 10px;
`;

export default BoardDetail;
