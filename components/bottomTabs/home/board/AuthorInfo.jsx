import React from "react";
import styled from "styled-components/native";
import { WithLocalSvg } from "react-native-svg";

import LogoSVG from "../../../../assets/images/flint_logo.svg";
import StarSVG from "../../../../assets/images/heart.svg";
import { View } from "react-native";

const Container = styled.View`
  width: 390px;
  height: 80px;
  justify-content: center;
  align-items: center;
  padding: 45px 30px;
  flex-direction: row;
`;
const InfoWrap = styled.View`
  width: 280px;
  height: 50px;
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

const AuthorInfo = ({ postData, isComment }) => {
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
            {!isComment && (
              <>
                <WithLocalSvg asset={StarSVG} width={15} height={15} />
                <Text>스크랩</Text>
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
