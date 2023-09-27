import React, { useState } from "react";
import styled from "styled-components/native";
import BoardDetailHeader from "./BoardDetailHeader";
import AuthorInfo from "./AuthorInfo";
import { WithLocalSvg } from "react-native-svg";
import { PostData } from "../../../../const/TempGeneralPostData";
import { Feather, FontAwesome, AntDesign } from "@expo/vector-icons";

import HeartSVG from "../../../../assets/images/heart.svg";
import Stroke from "../../../../assets/images/stroke.svg";
import { View } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const Board = styled.ScrollView``;
const Text = styled.Text``;
const BoardWrap = styled.View`
  border-color: rgba(217, 217, 217, 1);
  border-bottom-width: 1px;
  padding-bottom: 20px;
`;
const ContentWrap = styled.View`
  padding: 0px 30px;
`;
const CommentWrap = styled.View`
  border-color: rgba(217, 217, 217, 1);
  border-bottom-width: 1px;
  padding-bottom: 20px;
`;
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
`;
const Btn = styled.TouchableOpacity`
  flex-direction: row;
`;
const BtnText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  margin: 0px 8px;
  color: rgba(160, 160, 160, 1);
`;
const CommentBtnWrap = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;
const NestedCommentWrap = styled.View`
  flex-direction: row;
  padding-top: 15px;
  padding-left: 24px;
  padding-right: 24px;
`;
const BoardDetail = ({ route }) => {
  const { postData } = route.params;
  const [text, onChangeText] = useState("");
  return (
    <Container>
      <BoardDetailHeader title={postData.type} subTitle={postData.type} />
      <Board>
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
                <FontAwesome
                  name="comment-o"
                  size={14}
                  color="rgba(160, 160, 160, 1)"
                />
                <BtnText>댓글쓰기</BtnText>
              </Btn>
              <Btn>
                <Feather
                  name="share"
                  size={14}
                  color="rgba(160, 160, 160, 1)"
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
                    <FontAwesome
                      name="comment-o"
                      size={12}
                      color="rgba(160, 160, 160, 1)"
                    />
                    <BtnText>답글쓰기</BtnText>
                  </Btn>
                </CommentBtnWrap>
              </ContentWrap>
              <NestedCommentWrap>
                <View>
                  <WithLocalSvg asset={Stroke} height={24} width={24} />
                </View>
                <View style={{ paddingRight: 24 }}>
                  <AuthorInfo
                    postData={commentData}
                    isComment={true}
                    isNested={true}
                  />
                  <View>
                    <Content>{commentData.content}</Content>
                  </View>
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
                  </BtnWrap>
                </View>
              </NestedCommentWrap>
            </CommentWrap>
          );
        })}
      </Board>
      <CommentInputWrap behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <CommentInput
          placeholder={"댓글을 입력해주세요."}
          onChangeText={onChangeText}
          value={text}
        ></CommentInput>
        <SendBtn>
          <Feather name="send" size={22} color="white" />
        </SendBtn>
      </CommentInputWrap>
    </Container>
  );
};

const CommentInputWrap = styled.KeyboardAvoidingView`
  //height: 100px;
  padding: 20px 0px;
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
  margin-bottom: 30px;
  border-radius: 20px;
  padding: 0px 20px;
`;
const SendBtn = styled.TouchableOpacity`
  width: 50px;
  height: 38px;
  margin-left: 5%;
  margin-bottom: 30px;
  background-color: rgba(255, 152, 16, 1);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding-right: 1px;
  padding-top: 1px;
`;

export default BoardDetail;
