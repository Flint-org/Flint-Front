import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Platform, StyleSheet, View } from 'react-native';

import SignupHeader from './SignupHeader';
import SignupPage from './SignupPage';
import EmailVerificationPage from './EmailVerificationPage';

/* TODO: 전체 완료 시 삭제
 * 입학년도 입력 dropdown
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

  const [loading, setLoading] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [yearValue, setYearValue] = useState(null);
  // FIXME: 데이터 수정 필요
  const [year, setYear] = useState([
    { label: '1980', value: '1980' },
    { label: '1981', value: '1981' },
    { label: '1982', value: '1982' },
    { label: '1983', value: '1983' },
    { label: '1984', value: '1984' },
    { label: '1985', value: '1985' },
  ]);

  // FIXME: dropdown들에 적용된 아이콘 변경 필요
  return (
    <Container>
      <SignupHeader prevPage={SignupPage} />
      <MainSection>
        <Title>학교 및 학과 선택</Title>
        <ContentWrap1>
          <SubTitle>입학년도</SubTitle>
          <DropDownPicker
            loading={loading}
            open={yearOpen}
            value={yearValue}
            items={year}
            setOpen={setYearOpen}
            setValue={setYearValue}
            setItems={setYear}
            placeholder="입학년도를 선택하세요."
            style={styles.container}
            textStyle={styles.text}
            placeholderStyle={styles.placeholder}
            listItemLabelStyle={styles.listItemLabel}
            dropDownContainerStyle={styles.dropdownContainer}
            selectedItemLabelStyle={styles.selectedItemLabel}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    borderColor: '#f3f3f3',
    borderWidth: '1.2px',
    borderRadius: '12px',
  },
  text: {
    fontSize: '18px',
    fontWeight: '500',
  },
  dropdownContainer: {
    borderColor: '#f3f3f3',
    borderWidth: '1.2px',
  },
  placeholder: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#c0c0c0',
  },
  listItemLabel: {
    fontSize: '16px',
    fontWeight: '400',
  },
  selectedItemLabel: {
    fontWeight: '600',
  },
});

export default DetailsInfoPage;
