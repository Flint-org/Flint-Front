import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';

import SignupHeader from './SignupHeader';
import SignupPage from './SignupPage';
import EmailVerificationPage from './EmailVerificationPage';
import InfoDropdown from './InfoDropdown';

/* TODO: 전체 완료 시 삭제
 * 입학년도 입력 dropdown (O)
 * 학교 입력 searchable dropdown
 * 학과 입력 searchable dropdown
 * 년도 데이터
 * 학교 데이터
 * 학과 데이터
 * 사용자가 선택한 데이터 보내기
 */

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;
const MainSection = styled.View`
  padding: 30px 30px;
  width: 100%;
`;
const ContentWrap1 = styled.View`
  display: flex;
  gap: 18;
  margin-bottom: 30px;
  z-index: 1;
`;
const ContentWrap2 = styled.View`
  display: flex;
  gap: 18;
  margin-bottom: 30px;
`;
const ContentWrap3 = styled.View`
  display: flex;
  gap: 18;
`;
const Title = styled.Text`
  font-size: ${Platform.OS == 'android' ? '22px' : '26px'};
  font-weight: ${Platform.OS == 'android' ? '600' : '700'};
  margin-bottom: 30px;
`;
const SubTitle = styled.Text`
  font-size: ${Platform.OS == 'android' ? '18px' : '22px'};
  font-weight: 500;
  margin-left: 12px;
`;

const DetailsInfoPage = () => {
  const navigation = useNavigation();

  // 입학년도 dropdown에 대한 state
  const [loading, setLoading] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [yearValue, setYearValue] = useState(null);
  const [yearItems, setYearItems] = useState([]);

  useEffect(() => {
    setYearItems(setYearData); // 년도 데이터를 가지는 state에 값 설정
  }, []);

  // retrun: 1980년부터 2023년까지의 년도 데이터를 반환
  const setYearData = () => {
    let year = 1980;
    const yearItems = [];
    while (year < 2024) {
      yearItems.push({ label: year, value: year });
      year += 1;
    }
    return yearItems;
  };

  // FIXME: dropdown들에 적용된 아이콘 변경 필요
  return (
    <Container>
      <SignupHeader prevPage={SignupPage} />
      <MainSection>
        <Title>학교 및 학과 선택</Title>
        <ContentWrap1>
          <SubTitle>입학년도</SubTitle>
          <InfoDropdown
            loading={loading}
            open={yearOpen}
            value={yearValue}
            items={yearItems}
            setOpen={setYearOpen}
            setValue={setYearValue}
            setItems={setYearItems}
            placeholder={'입학년도를 입력하세요.'}
          />
        </ContentWrap1>
        <ContentWrap2>
          <SubTitle>학교</SubTitle>
        </ContentWrap2>
        <ContentWrap3>
          <SubTitle>학과</SubTitle>
        </ContentWrap3>
      </MainSection>
    </Container>
  );
};

export default DetailsInfoPage;
