import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { WithLocalSvg } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import HeartSvg from "../../../../assets/images/heart.svg";
import CommentSvg from "../../../../assets/images/comment.svg";
import StarSvg from "../../../../assets/images/star.svg";

const PostPreview = ({ postData }) => {
  const nav = useNavigation();
  // 현재 년도, 월, 일, 시, 분 가져오는 state
  const today = new Date();
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [date, setDate] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // 게시글 미리보기에 보여질 시간 state
  const [time, setTime] = useState("");

  useEffect(() => {
    // 현재 년도, 월, 일, 시, 분 set
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    setDate(today.getDate());
    setHours(today.getHours());
    setMinutes(today.getMinutes());

    /* setTime
     * 년이 다른 경우 'N년 전'으로 설정
     * 년은 같은데 월 또는 일이 다른 경우 'N월 M일'로 설정
     * 년월일은 같은데 시가 다른 경우 '시:분'으로 설정
     * 년월일시가 같은 경우 'N분 전'으로 설정
     */
    if (year !== postData.year) {
      setTime(`${year - postData.year}년 전`);
    } else if (month !== postData.month || date !== postData.date) {
      setTime(`${postData.month}월 ${postData.date}일`);
    } else if (date === postData.date && hours !== postData.hours) {
      setTime(`${postData.hours}:${postData.minutes}`);
    } else if (hours == postData.hours) {
      setTime(`${minutes - postData.minutes}분 전`);
    }
  }, [today]);

  return (
    <PostContainer
      onPress={() =>
        nav.push("Stack", {
          screen: "BoardDetail",
          params: { postData },
        })
      }
    >
      <PostDetailWrap>
        <PostContentWrap>
          <PostTitle>{postData?.title}</PostTitle>
          <PostContent numberOfLines={2} ellipsizeMode={"tail"}>
            {postData?.content}
          </PostContent>
        </PostContentWrap>
        {/* FIXME: 이미지 src 필요 */}
        <PostImage></PostImage>
      </PostDetailWrap>
      <PostDetailWrap>
        <PostInfoWrap>
          <PostInfo>{postData?.univ}</PostInfo>
          <PostInfo>{postData?.major}</PostInfo>
          <PostInfo>|</PostInfo>
          <PostInfo>{time}</PostInfo>
        </PostInfoWrap>
        <PostInfoWrap>
          <WithLocalSvg
            height={15}
            width={15}
            fill={"#a0a0a0"}
            asset={HeartSvg}
          />
          <PostInfo>{postData?.like > 99 ? "99+" : postData?.like}</PostInfo>
          <WithLocalSvg
            height={17}
            width={17}
            fill={"#a0a0a0"}
            asset={StarSvg}
          />
          <PostInfo>{postData?.star > 99 ? "99+" : postData?.star}</PostInfo>
          <WithLocalSvg
            height={14}
            width={14}
            fill={"#a0a0a0"}
            asset={CommentSvg}
          />
          <PostInfo>
            {postData?.comment > 99 ? "99+" : postData?.comment}
          </PostInfo>
        </PostInfoWrap>
      </PostDetailWrap>
    </PostContainer>
  );
};

export default PostPreview;

const PostInfo = styled.Text`
  font-size: 13px;
  color: #a0a0a0;
`;
const PostInfoWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: 12px;
`;
const PostImage = styled.Image`
  width: 80px;
  height: 80px;
  background-color: #000;
  border-radius: 5px;
`;
const PostContent = styled.Text`
  font-size: 15px;
  line-height: 22px;
`;
const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  margin-bottom: 5px;
`;
const PostContentWrap = styled.View`
  display: flex;
  width: 65%;
  min-height: 80px;
`;
const PostDetailWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const PostContainer = styled.TouchableOpacity`
  display: flex;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 12px;
`;
