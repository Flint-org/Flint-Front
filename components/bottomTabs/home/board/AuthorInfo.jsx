import React from "react";
import styled from "styled-components/native";
import { WithLocalSvg } from "react-native-svg";
import { Entypo } from "@expo/vector-icons";

import LogoSVG from "../../../../assets/images/flint_logo.svg";
import { useDispatch, useSelector } from "react-redux";
import bottomSheetSlice from "../../../../redux_modules/slice/bottomSheetSlice";

const Container = styled.View`
  width: auto;
  height: 80px;
  justify-content: center;
  align-items: center;
  //padding: 45px 30px;
  flex-direction: row;
  //border: 1px solid red;
`;
const InfoWrap = styled.View`
  width: 280px;
  height: 50px;
  //border: 1px solid red;
`;
const Text = styled.Text`
  font-size: 14px;
`;
const UnivText = styled.Text`
  font-weight: 700;
  font-size: 16px;
`;
const MajorText = styled.Text`
  font-weight: 500;
  font-size: 14px;
`;
const AuthorSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const ClipSection = styled.View`
  flex-direction: row;
  align-items: center;
`;
const DotMenu = styled.TouchableOpacity`
  position: absolute;
  right: ${(props) => {
    return props.isNested ? "15px" : "0px";
  }};
`;

const AuthorInfo = ({ postData, isComment, isNested }) => {
  const bottomSheetRef = useSelector((state) => {
    return state.bottomSheet.bottomSheetRef;
  });
  const dispatch = useDispatch();
  const menuBtnOnPress = () => {
    dispatch(
      bottomSheetSlice.actions.updateObj({
        text_1: "신고하기",
        onPress_1: () => {
          console.log("신고");
          bottomSheetRef.close();
        },
      })
    );
    bottomSheetRef.snapToIndex(0);
  };

  return (
    <Container>
      <WithLocalSvg height={50} width={50} asset={LogoSVG} />
      <InfoWrap>
        <AuthorSection>
          <ClipSection>
            <UnivText>{postData.univ + " "}</UnivText>
            <MajorText>{postData.major}</MajorText>
          </ClipSection>
          <ClipSection>
            {isComment ? (
              <DotMenu isNested={isNested} onPress={menuBtnOnPress}>
                <Entypo
                  name="dots-three-horizontal"
                  size={16}
                  color="rgba(160, 160, 160, 1)"
                />
              </DotMenu>
            ) : (
              <>
                <Entypo
                  name="star-outlined"
                  size={16}
                  color="rgba(160, 160, 160, 1)"
                />
                <Text
                  style={{ marginLeft: 5, color: "rgba(160, 160, 160, 1)" }}
                >
                  스크랩
                </Text>
              </>
            )}
          </ClipSection>
        </AuthorSection>
        <Text style={{ color: "gray" }}>
          {postData.month +
            "/" +
            postData.date +
            " " +
            postData.hours +
            ":" +
            postData.minutes +
            ""}
        </Text>
      </InfoWrap>
    </Container>
  );
};

export default AuthorInfo;
