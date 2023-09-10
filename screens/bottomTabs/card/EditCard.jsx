import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { WithLocalSvg } from "react-native-svg";
import * as DocumentPicker from "expo-document-picker";
import { LinearGradient } from "expo-linear-gradient";

import BackArrowSvg from "../../../assets/images/back_arrow.svg";
import ArrowDownSvg from "../../../assets/images/arrow_down.svg";
import LogoSvg from "../../../assets/images/logo_symbol_white.svg";
import PlusSvg from "../../../assets/images/plus.svg";
import AlertModal from "../../../components/common/AlertModal";

/* TODO: 전체 완료 시 삭제
 * 헤더 추가 (O)
 * 프로필 사진 가져오기 및 보여주기 (O)
 * 입력창 추가 (O)
 * 관심사 버튼 추가 (O)
 * 저장 버튼 클릭시 모달창 생성 (O)
 * 저장 버튼 클릭시 데이터 저장
 * 저장 버튼 클릭시 내명함에 반영
 */

const EditCard = () => {
  const navigation = useNavigation();

  // 프로필 사진 가져오기 성공여부, 프로필 사진 URI state
  const [selectSuccess, setSelectSuccess] = useState(false);
  const [profileURI, setProfileURI] = useState("");

  /* selectProfileImg : 프로필 사진 가져오는 함수
   * 프로필 사진 가져와서 profileURI state에  URI 저장
   */
  const selectProfileImg = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/*"],
    });
    if (result.canceled) console.log("canceled");
    else {
      setSelectSuccess(true);
      setProfileURI(result?.assets[0]?.uri);
    }
  };

  // FIXME: 학교별 메인컬러 R,G,B 담는 state
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(91);
  const [blue, setBlue] = useState(172);

  // FIXME: 명함 데이터 state (임시 state로 나중에 삭제될 수도 수정될 수도 있음)
  const [userName, setUserName] = useState("김이름");
  const [year, setYear] = useState("2019");
  const [univ, setUniv] = useState("00대학교");
  const [major, setMajor] = useState("소프트웨어학과");
  const [emailLocal, setEmailLocal] = useState("wjoo3");
  const [emailDomain, setEmailDomain] = useState("naver.com");
  const [introduction, setIntroduction] = useState("");
  const [mbti, setMbti] = useState("");
  const [sns, setSns] = useState("");

  const [interestTitle, setInterestTitle] = useState([
    "엔터테인먼트 및 문화예술",
    "운동 및 피트니스",
    "취미 및 창작",
    "패션 및 뷰티",
    "여행 및 레저",
    "라이프스타일",
  ]);
  const [interests, setInterests] = useState([
    { type: 0, name: "🎮 게임", active: false },
    { type: 0, name: "🎥 영화", active: false },
    { type: 0, name: "📺 드라마", active: false },
    { type: 0, name: "🖼️ 전시회", active: false },
    { type: 0, name: "🎞️ 애니메이션", active: false },
    { type: 0, name: "🪩 콘서트", active: false },
    { type: 0, name: "🎭 연극", active: false },
    { type: 0, name: "🎟️ 뮤지컬", active: false },
    { type: 0, name: "🗯️ 웹툰", active: false },
    { type: 1, name: "🏃‍♂️ 런닝", active: false },
    { type: 1, name: "🏋️ 헬스", active: false },
    { type: 1, name: "🧘‍♂️ 요가", active: false },
    { type: 1, name: "🧘 필라테스", active: false },
    { type: 1, name: "⚽ 스포츠", active: false },
    { type: 1, name: "🚶‍♀️ 산책", active: false },
    { type: 1, name: "🚗 드라이브", active: false },
    { type: 2, name: "📚 독서", active: false },
    { type: 2, name: "🎨 그림그리기", active: false },
    { type: 2, name: "🖋️ 글쓰기", active: false },
    { type: 2, name: "🤸 댄스", active: false },
    { type: 2, name: "🥁 악기 연주", active: false },
    { type: 2, name: "🎧 노래 감상", active: false },
    { type: 2, name: "🎤 노래 부르기", active: false },
    { type: 2, name: "🍳 요리", active: false },
    { type: 2, name: "📸 사진 찍기", active: false },
    { type: 3, name: "🛍️ 쇼핑", active: false },
    { type: 3, name: "🕶️ 패션", active: false },
    { type: 3, name: "💄 뷰티", active: false },
    { type: 4, name: "🛩️ 여행", active: false },
    { type: 4, name: "⛷️ 스키", active: false },
    { type: 4, name: "🍜 맛집 탐방", active: false },
    { type: 4, name: "🌊 빠지", active: false },
    { type: 4, name: "🤿 스노쿨링", active: false },
    { type: 5, name: "🍺 술", active: false },
    { type: 5, name: "🥐 카페", active: false },
    { type: 5, name: "🥰 덕질", active: false },
    { type: 5, name: "📝 자기계발", active: false },
    { type: 5, name: "🐶 동물", active: false },
    { type: 5, name: "🗞️ 사회이슈", active: false },
    { type: 5, name: "🕊️ 봉사", active: false },
  ]);

  // 관심사 버튼 클릭 여부 state : 리렌더링을 목적으로 함
  const [onCilckInterest, setClickInterest] = useState(false);

  // 저장 버튼 클릭 여부 state
  const [onClickSave, setClickSave] = useState(false);

  // 관심사 드롭다운 클릭 여부 state
  const [onClickDropdown, setClickDropdown] = useState(false);

  return (
    <Container>
      <HeaderSection>
        <PrevPageBtn onPress={() => navigation.goBack()}>
          <WithLocalSvg
            width={20}
            height={20}
            fill={"#000"}
            asset={BackArrowSvg}
          />
        </PrevPageBtn>
        <HeaderTitle>명함 수정</HeaderTitle>
        <SaveBtn onPress={() => setClickSave(true)}>
          <BtnText>저장</BtnText>
        </SaveBtn>
      </HeaderSection>
      <MainSection showsVerticalScrollIndicator={false}>
        <ProfileImgWrap onPress={() => selectProfileImg()}>
          {selectSuccess ? (
            <SelectedProfile src={profileURI} />
          ) : (
            <BasicProfile
              colors={[
                `rgba(${red}, ${green}, ${blue}, 0.8)`,
                `rgba(${red}, ${green}, ${blue}, 0.3)`,
              ]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            >
              <WithLocalSvg height={52} asset={LogoSvg} />
            </BasicProfile>
          )}
          <EditProfileBtn>
            <WithLocalSvg
              width={15}
              height={15}
              fill={"#fff"}
              asset={PlusSvg}
            />
          </EditProfileBtn>
        </ProfileImgWrap>
        <CardDataInput
          title={"이름"}
          value={userName}
          onChangeText={setUserName}
          placeholder={"이름을 입력하세요."}
          editable={false}
        />
        <CardDataInput
          title={"입학년도"}
          value={year}
          onChangeText={setYear}
          placeholder={"입학년도를 입력하세요."}
          editable={false}
        />
        <CardDataInput
          title={"학교"}
          value={univ}
          onChangeText={setUniv}
          placeholder={"학교 이름을 입력하세요."}
          editable={false}
        />
        <CardDataInput
          title={"학과"}
          value={major}
          onChangeText={setMajor}
          placeholder={"학과 이름을 입력하세요."}
          editable={false}
        />
        <CardDataInput
          half={true}
          title={"이메일"}
          value={[emailLocal, emailDomain]}
          onChangeText={[setEmailLocal, setEmailDomain]}
          placeholder={["이메일", "도메인"]}
          editable={false}
        />
        <CardDataInput
          title={"자기소개"}
          value={introduction}
          onChangeText={setIntroduction}
          placeholder={"자기소개를 입력하세요."}
          multiline={true}
          maxLength={100}
        />
        <CardDataInput
          title={"MBTI"}
          value={mbti}
          onChangeText={setMbti}
          placeholder={"MBTI를 입력하세요."}
        />
        <CardDataInput
          title={"SNS"}
          value={sns}
          onChangeText={setSns}
          placeholder={"SNS 계정을 입력하세요."}
        />
        <InputTitle>관심사</InputTitle>
        <InterestsWrap>
          <ArrowIconWrap
            onPress={() => setClickDropdown(!onClickDropdown)}
            rotate={onClickDropdown}
          >
            <WithLocalSvg width={20} height={20} asset={ArrowDownSvg} />
          </ArrowIconWrap>
          {onClickDropdown &&
            interestTitle.map((title, index) => {
              return (
                <>
                  <InterestTitle>{title}</InterestTitle>
                  <InterestBtns
                    interests={interests}
                    type={index}
                    onCilckInterest={onCilckInterest}
                    setClickInterest={setClickInterest}
                  />
                </>
              );
            })}
        </InterestsWrap>
      </MainSection>
      {onClickSave && (
        <AlertModal
          text={"저장되었습니다."}
          onPress={() => setClickSave(false)}
        />
      )}
    </Container>
  );
};

export default EditCard;

// 인풋 컴포넌트
const CardDataInput = (props) => {
  if (props.half) {
    return (
      <>
        <InputTitle>{props.title}</InputTitle>
        <InputsWrap>
          <InputWrap half={true}>
            <Input
              value={props.value[0]}
              placeholder={props.placeholder[0]}
              onChangeText={props.onChangeText[0]}
              placeholderTextColor={"#c0c0c0"}
            ></Input>
          </InputWrap>
          <AtSignText>@</AtSignText>
          <InputWrap half={true}>
            <Input
              value={props.value[1]}
              placeholder={props.placeholder[1]}
              onChangeText={props.onChangeText[1]}
              placeholderTextColor={"#c0c0c0"}
            ></Input>
          </InputWrap>
        </InputsWrap>
      </>
    );
  } else {
    return (
      <>
        <InputTitle>{props.title}</InputTitle>
        <InputWrap>
          <Input
            value={props.value}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            editable={props.editable}
            multiline={props.multiline}
            maxLength={props.maxLength}
            placeholderTextColor={"#c0c0c0"}
          ></Input>
        </InputWrap>
      </>
    );
  }
};

// 관심사 키워드 버튼 컴포넌트
const InterestBtns = ({
  interests,
  type,
  onCilckInterest,
  setClickInterest,
}) => {
  return (
    <InterestBtnWrap>
      {interests.map((interest) => {
        if (interest.type == type) {
          return (
            <InterestBtn
              key={interest.name}
              onPress={() => {
                interest.active = !interest.active;
                setClickInterest(!onCilckInterest);
              }}
              style={{
                backgroundColor: interest.active ? "#ff9810" : "#fff",
              }}
            >
              <InteretText style={{ color: interest.active ? "#fff" : "#000" }}>
                {interest.name}
              </InteretText>
            </InterestBtn>
          );
        }
      })}
    </InterestBtnWrap>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 0 30px 45px;
`;
const HeaderSection = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 105px;
  padding: 45px 0 0;
  background-color: #fff;
  margin-bottom: 2%;
`;
const HeaderTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  margin-left: 40px;
`;
const PrevPageBtn = styled.TouchableOpacity``;
const SaveBtn = styled.TouchableOpacity`
  width: 60px;
  height: 30px;
  background-color: #ff9810;
  border-radius: 5px;
`;
const BtnText = styled.Text`
  color: #fff;
  font-size: 16px;
  line-height: 30px;
  font-weight: 600;
  margin: 0 auto;
`;
const MainSection = styled.ScrollView`
  width: 100%;
`;
const ProfileImgWrap = styled.TouchableOpacity`
  width: 100px;
  margin: 0 auto 8%;
`;
const BasicProfile = styled(LinearGradient)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 60px;
`;
const SelectedProfile = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 60px;
`;
const EditProfileBtn = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: #ccc;
  border: 1px solid #fff;
  border-radius: 20px;
`;
const InputTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-left: 12px;
  margin-bottom: 5%;
`;
const AtSignText = styled.Text`
  color: #a0a0a0;
  font-size: 16px;
  line-height: 50px;
`;
const InputsWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const InputWrap = styled.View`
  display: flex;
  justify-content: center;
  width: ${(props) => (props.half ? "45%" : "100%")};
  background-color: #f3f3f3;
  border-radius: 5px;
  margin-bottom: 6%;
  padding: 4% 15px;
`;
const Input = styled.TextInput`
  width: 100%;
  font-size: 16px;
  color: #000;
  font-weight: 500;
`;
const InterestsWrap = styled.View`
  display: flex;
  gap: 20px;
  background-color: #f3f3f3;
  border-radius: 5px;
  margin-bottom: 6%;
  padding: 4% 5%;
`;
const ArrowIconWrap = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  transform: ${(props) => (props.rotate ? "rotate(180deg)" : "rotate(0deg)")};
`;
const InterestTitle = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  font-weight: 500;
`;
const InterestBtnWrap = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;
const InterestBtn = styled.TouchableOpacity`
  padding: 10px 15px;
  border-radius: 30px;
`;
const InteretText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
