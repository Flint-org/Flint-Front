import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { WithLocalSvg } from 'react-native-svg';
import * as DocumentPicker from 'expo-document-picker';
import { LinearGradient } from 'expo-linear-gradient';

import BackArrowSvg from '../../../assets/images/back_arrow.svg';
import LogoSvg from '../../../assets/images/logo_symbol_white.svg';
import PlusSvg from '../../../assets/images/plus.svg';

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
              placeholderTextColor={'#c0c0c0'}
            ></Input>
          </InputWrap>
          <AtSignText>@</AtSignText>
          <InputWrap half={true}>
            <Input
              value={props.value[1]}
              placeholder={props.placeholder[1]}
              onChangeText={props.onChangeText[1]}
              placeholderTextColor={'#c0c0c0'}
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
            placeholderTextColor={'#c0c0c0'}
          ></Input>
        </InputWrap>
      </>
    );
  }
};
const EditCard = () => {
  const navigation = useNavigation();

  // 프로필 사진 가져오기 성공여부, 프로필 사진 URI state
  const [selectSuccess, setSelectSuccess] = useState(false);
  const [profileURI, setProfileURI] = useState('');

  /* selectProfileImg : 프로필 사진 가져오는 함수
   * 프로필 사진 가져와서 profileURI state에  URI 저장
   */
  const selectProfileImg = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['image/*'],
    });
    if (result.canceled) console.log('canceled');
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
  const [userName, setUserName] = useState('김이름');
  const [year, setYear] = useState('2019');
  const [univ, setUniv] = useState('00대학교');
  const [major, setMajor] = useState('소프트웨어학과');
  const [emailLocal, setEmailLocal] = useState('wjoo3');
  const [emailDomain, setEmailDomain] = useState('naver.com');
  const [introduction, setIntroduction] = useState('');
  const [mbti, setMbti] = useState('');
  const [sns, setSns] = useState('');

  return (
    <Container>
      <HeaderSection>
        <PrevPageBtn
          onPress={() =>
            navigation.navigate('BottomTabs', { screen: 'MyCard' })
          }
        >
          <WithLocalSvg
            width={20}
            height={20}
            fill={'#000'}
            asset={BackArrowSvg}
          />
        </PrevPageBtn>
        <HeaderTitle>명함 수정</HeaderTitle>
        <SaveBtn>
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
              fill={'#fff'}
              asset={PlusSvg}
            />
          </EditProfileBtn>
        </ProfileImgWrap>
        <CardDataInput
          title={'이름'}
          value={userName}
          onChangeText={setUserName}
          placeholder={'이름을 입력하세요.'}
          editable={false}
        />
        <CardDataInput
          title={'입학년도'}
          value={year}
          onChangeText={setYear}
          placeholder={'입학년도를 입력하세요.'}
          editable={false}
        />
        <CardDataInput
          title={'학교'}
          value={univ}
          onChangeText={setUniv}
          placeholder={'학교 이름을 입력하세요.'}
          editable={false}
        />
        <CardDataInput
          title={'학과'}
          value={major}
          onChangeText={setMajor}
          placeholder={'학과 이름을 입력하세요.'}
          editable={false}
        />
        <CardDataInput
          half={true}
          title={'이메일'}
          value={[emailLocal, emailDomain]}
          onChangeText={[setEmailLocal, setEmailDomain]}
          placeholder={['이메일', '도메인']}
          editable={false}
        />
        <CardDataInput
          title={'자기소개'}
          value={introduction}
          onChangeText={setIntroduction}
          placeholder={'자기소개를 입력하세요.'}
          multiline={true}
          maxLength={100}
        />
        <CardDataInput
          title={'MBTI'}
          value={mbti}
          onChangeText={setMbti}
          placeholder={'MBTI를 입력하세요.'}
        />
        <CardDataInput
          title={'SNS'}
          value={sns}
          onChangeText={setSns}
          placeholder={'SNS 계정을 입력하세요.'}
        />
        <InputTitle>관심사</InputTitle>
      </MainSection>
    </Container>
  );
};

export default EditCard;

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
  width: ${(props) => (props.half ? '45%' : '100%')};
  background-color: #f3f3f3;
  border-radius: 5px;
  margin-bottom: 6%;
  padding: 4% 15px;
`;
const Input = styled.TextInput`
  width: 100%;
  font-size: 16px;
  color: #000;
`;
