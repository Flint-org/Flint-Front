import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

import SignupHeader from './SignupHeader';
import SignupPage from './SignupPage';
import EmailVerificationPage from './EmailVerificationPage';
import InfoDropdown from './InfoDropdown';
import OrangeNextBtn from '../common/OrangeNextBtn';

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
  flex: 1;
  flex-direction: end;
  padding: 30px 30px;
  width: 100%;
`;
const ContentWrap1 = styled.View`
  display: flex;
  gap: 18;
  margin-bottom: 8%;
  ${Platform.OS == 'ios' && 'z-index: 3'};
`;
const ContentWrap2 = styled.View`
  display: flex;
  gap: 18;
  margin-bottom: 8%;
  ${Platform.OS == 'ios' && 'z-index: 2'};
`;
const ContentWrap3 = styled.View`
  display: flex;
  gap: 18;
  ${Platform.OS == 'ios' && 'z-index: 1'};
  margin-bottom: 10%;
`;
const Title = styled.Text`
  font-size: ${Platform.OS == 'android' ? '20px' : '26px'};
  font-weight: ${Platform.OS == 'android' ? '600' : '700'};
  margin-bottom: 10%;
`;
const SubTitle = styled.Text`
  font-size: ${Platform.OS == 'android' ? '16px' : '22px'};
  font-weight: ${Platform.OS == 'android' ? '500' : '600'};
  margin-left: 12px;
`;

const DetailsInfoPage = () => {
  // 입학년도 dropdown에 대한 state
  const [yearLoading, setYearLoading] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [yearValue, setYearValue] = useState(null);
  const [yearItems, setYearItems] = useState([]);

  //FIXME: 데이터 교체 필요
  // 학교 dropdown에 대한 state
  const [univLoading, setUnivLoading] = useState(false);
  const [univOpen, setUnivOpen] = useState(false);
  const [univValue, setUnivValue] = useState(null);
  const [univItems, setUnivItems] = useState([
    { label: 'aa대학교', value: 'aa대학교' },
    { label: 'bb대학교', value: 'bb대학교' },
    { label: 'cc대학교', value: 'cc대학교' },
    { label: 'dd대학교', value: 'dd대학교' },
    { label: 'ee대학교', value: 'ee대학교' },
    { label: 'ff대학교', value: 'ff대학교' },
    { label: 'gg대학교', value: 'gg대학교' },
  ]);

  //FIXME: 데이터 교체 필요
  // 학과 dropdown에 대한 state
  const [majorLoading, setMajorLoading] = useState(false);
  const [majorOpen, setMajorOpen] = useState(false);
  const [majorValue, setMajorValue] = useState(null);
  const [majorItems, setMajorItems] = useState([
    { label: '기계공학과', value: '기계공학과' },
    { label: '소프트웨어학과', value: '소프트웨어학과' },
    { label: '전자공학과', value: '전자공학과' },
    { label: '미디어학과', value: '미디어학과' },
    { label: '산업공학과', value: '산업공학과' },
    { label: '사이버보안학과', value: '사이버보안학과' },
    { label: '국방디지털융합학과', value: '국방디지털융합학과' },
  ]);

  // 다른 dropdown 열리면 나머지 닫히도록 설정
  const onYearOpen = useCallback(() => {
    setUnivOpen(false);
    setMajorOpen(false);
  }, []);
  const onUnivOpen = useCallback(() => {
    setYearOpen(false);
    setMajorOpen(false);
  }, []);
  const onMajorOpen = useCallback(() => {
    setYearOpen(false);
    setUnivOpen(false);
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

  useEffect(() => {
    setYearItems(setYearData);
  }, []);

  // FIXME: dropdown들에 적용된 아이콘 변경 필요
  return (
    <Container>
      <SignupHeader prevPage={SignupPage} />
      <MainSection>
        <Title>학교 및 학과 선택</Title>
        <ContentWrap1>
          <SubTitle>학교</SubTitle>
          <InfoDropdown
            loading={univLoading}
            open={univOpen}
            value={univValue}
            items={univItems}
            setOpen={setUnivOpen}
            setValue={setUnivValue}
            setItems={setUnivItems}
            onOpen={onUnivOpen}
            searchable={true}
            placeholder={'학교 이름을 입력하세요.'}
            searchPlaceholder={'검색'}
            zIndex={3}
          />
        </ContentWrap1>
        <ContentWrap2>
          <SubTitle>학과</SubTitle>
          <InfoDropdown
            loading={majorLoading}
            open={majorOpen}
            value={majorValue}
            items={majorItems}
            setOpen={setMajorOpen}
            setValue={setMajorValue}
            setItems={setMajorItems}
            onOpen={onMajorOpen}
            searchable={true}
            placeholder={'학과 이름을 입력하세요.'}
            searchPlaceholder={'검색'}
            zIndex={2}
          />
        </ContentWrap2>
        <ContentWrap3>
          <SubTitle>입학년도</SubTitle>
          <InfoDropdown
            loading={yearLoading}
            open={yearOpen}
            value={yearValue}
            items={yearItems}
            setOpen={setYearOpen}
            setValue={setYearValue}
            setItems={setYearItems}
            onOpen={onYearOpen}
            placeholder={'입학년도를 입력하세요.'}
            zIndex={1}
          />
        </ContentWrap3>
        <OrangeNextBtn
          height={'50px'}
          width={'100%'}
          active={
            yearValue !== null && univValue !== null && majorValue !== null
              ? true
              : false
          }
          next={EmailVerificationPage}
        />
      </MainSection>
    </Container>
  );
};

export default DetailsInfoPage;
