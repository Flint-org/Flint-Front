import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { WithLocalSvg } from 'react-native-svg';
import * as DocumentPicker from 'expo-document-picker';
import { LinearGradient } from 'expo-linear-gradient';

import BackArrowSvg from '../../../assets/images/back_arrow.svg';
import LogoSvg from '../../../assets/images/logo_symbol_white.svg';
import PlusSvg from '../../../assets/images/plus.svg';

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
const MainSection = styled.ScrollView``;
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
      </MainSection>
    </Container>
  );
};

export default EditCard;
