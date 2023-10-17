import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Modal, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import SignupHeader from "../../../components/signup/SignupHeader";
import StartPage from "./StartPage";
import InfoDropdown from "../../../components/signup/InfoDropdown";
import OrangeNextBtn from "../../../components/common/OrangeNextBtn";
import { useQuery } from "react-query";
import { classList, univList, majorList } from "../../../api";
import Loader from "../../../components/common/Loader";

/* TODO: 전체 완료 시 삭제
 * 입학년도 입력 dropdown (O)
 * 학교 입력 searchable dropdown (O)
 * 학과 입력 searchable dropdown (O)
 * 년도 데이터 (0)
 * 학교 데이터 (0)
 * 학과 데이터 (0)
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
  gap: 18px;
  margin-bottom: 6%;
  ${Platform.OS == "ios" && "z-index: 4"};
`;
const ContentWrap2 = styled.View`
  display: flex;
  gap: 18px;
  margin-bottom: 6%;
  ${Platform.OS == "ios" && "z-index: 3"};
`;
const ContentWrap3 = styled.View`
  display: flex;
  gap: 18px;
  ${Platform.OS == "ios" && "z-index: 2"};
  margin-bottom: 10%;
`;
const ContentWrap4 = styled.View`
  display: flex;
  gap: 18px;
  ${Platform.OS == "ios" && "z-index: 1"};
  margin-bottom: 10%;
`;
const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8%;
`;
const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin-left: 12px;
`;

const DetailsInfoPage = () => {
  const navigation = useNavigation();

  // 입학년도 dropdown에 대한 state
  const [yearLoading, setYearLoading] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [yearValue, setYearValue] = useState(null);
  const [yearItems, setYearItems] = useState([]);

  // 학교 dropdown에 대한 state
  const [univLoading, setUnivLoading] = useState(false);
  const [univOpen, setUnivOpen] = useState(false);
  const [univValue, setUnivValue] = useState(null);
  const [univItems, setUnivItems] = useState([]);
  const {
    isLoading: univListLoading,
    data: univListData,
    error,
  } = useQuery("univList", univList);

  // 학과 dropdown에 대한 state
  const [classOpen, setClassOpen] = useState(false);
  const [classValue, setClassValue] = useState(null);
  const { isLoading: classListLoading, data: classListData } = useQuery(
    ["classList", univValue],
    () => classList(univValue),
    {
      enabled: !!univValue,
    }
  );

  const [majorLoading, setMajorLoading] = useState(false);
  const [majorOpen, setMajorOpen] = useState(false);
  const [majorValue, setMajorValue] = useState(null);
  const [majorItems, setMajorItems] = useState([]);
  const { isLoading: majorListLoading, data: majorListData } = useQuery(
    ["majorList", univValue, classValue],
    () => majorList(univValue, classValue),
    {
      enabled: !!classValue,
    }
  );

  // 다른 dropdown 열리면 나머지 닫히도록 설정
  const onYearOpen = useCallback(() => {
    setUnivOpen(false);
    setMajorOpen(false);
    setClassOpen(false);
  }, []);
  const onUnivOpen = useCallback(() => {
    setYearOpen(false);
    setMajorOpen(false);
    setClassOpen(false);
  }, []);
  const onMajorOpen = useCallback(() => {
    setYearOpen(false);
    setUnivOpen(false);
    setClassOpen(false);
  }, []);
  const onClassOpen = useCallback(() => {
    setYearOpen(false);
    setUnivOpen(false);
    setMajorOpen(false);
  }, []);

  // retrun: 1980년부터 2023년까지의 년도 데이터를 반환
  const setYearData = () => {
    let year = 2010;
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

  const isLoading = univListLoading || classListLoading || majorListLoading;

  // FIXME: dropdown들에 적용된 아이콘 변경 필요
  return (
    <Container>
      <Loader visible={isLoading} />
      <SignupHeader prevPage={StartPage} onPrevBtn={false} />
      <MainSection>
        <Title>학교 및 학과 선택</Title>
        <ContentWrap1>
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
            placeholder={"입학년도를 입력하세요."}
            zIndex={1}
          />
        </ContentWrap1>
        {univListData && (
          <ContentWrap2>
            <SubTitle>학교</SubTitle>
            <InfoDropdown
              loading={univLoading}
              open={univOpen}
              value={univValue}
              items={univListData.data.data.map((item) => ({
                label: item,
                value: item,
              }))}
              setOpen={setUnivOpen}
              setValue={setUnivValue}
              setItems={setUnivItems}
              onOpen={onUnivOpen}
              searchable={true}
              placeholder={"학교 이름을 입력하세요."}
              searchPlaceholder={"검색"}
              zIndex={2}
              addCustomItem={true}
            />
          </ContentWrap2>
        )}
        {classListData && (
          <>
            <ContentWrap3>
              <SubTitle>학과</SubTitle>
              <InfoDropdown
                loading={majorLoading}
                open={majorOpen}
                value={classValue}
                items={classListData.data.data.map((item) => ({
                  label: item,
                  value: item,
                }))}
                setOpen={setMajorOpen}
                setValue={setClassValue}
                setItems={setMajorItems}
                onOpen={onMajorOpen}
                searchable={true}
                placeholder={"계열을 선택해주세요."}
                searchPlaceholder={"검색"}
                zIndex={3}
              />
            </ContentWrap3>
            {classValue && majorListData && (
              <ContentWrap4>
                <InfoDropdown
                  loading={majorLoading}
                  open={classOpen}
                  value={majorValue}
                  items={majorListData.data.data.majors.map((item) => ({
                    label: item,
                    value: item,
                  }))}
                  setOpen={setClassOpen}
                  setValue={setMajorValue}
                  setItems={setMajorItems}
                  onOpen={onClassOpen}
                  searchable={true}
                  placeholder={"학과를 선택해주세요."}
                  searchPlaceholder={"검색"}
                  zIndex={4}
                />
              </ContentWrap4>
            )}
          </>
        )}

        <OrangeNextBtn
          height={"50px"}
          width={"100%"}
          fontSize={"18px"}
          active={
            yearValue !== null && univValue !== null && majorValue !== null
              ? true
              : false
          }
          text={"다음"}
          onPress={() => {
            yearValue !== null &&
              univValue !== null &&
              classValue !== null &&
              majorValue !== null &&
              navigation.navigate("EmailVerificationPage", {
                univName: univValue,
              });
          }}
        />
      </MainSection>
    </Container>
  );
};

export default DetailsInfoPage;
