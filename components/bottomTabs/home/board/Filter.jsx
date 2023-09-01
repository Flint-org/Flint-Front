import React, { useState } from "react";
import styled from "styled-components/native";
import { WithLocalSvg } from "react-native-svg";
import { Platform } from "react-native";

import ArrowDownSvg from "../../../../assets/images/arrow_down.svg";
import ArrowUpSvg from "../../../../assets/images/arrow_up.svg";
import CheckSvg from "../../../../assets/images/check2.svg";

const Filter = () => {
  const [clickFilter, setClickFilter] = useState(false);

  const [clickBestBtn, setClickBestBtn] = useState(false);

  return (
    <FilterWrap>
      <FilterBtn
        onPress={() => {
          setClickFilter(!clickFilter);
        }}
      >
        <Filtertext>{clickBestBtn ? "인기순" : "최신순"}</Filtertext>
        {clickFilter ? (
          <WithLocalSvg
            width={20}
            height={20}
            fill={"#a0a0a0"}
            asset={ArrowUpSvg}
          />
        ) : (
          <WithLocalSvg
            width={20}
            height={20}
            fill={"#a0a0a0"}
            asset={ArrowDownSvg}
          />
        )}
      </FilterBtn>
      {clickFilter && (
        <FilterDropdown>
          <FilterOptionBtn
            onPress={() => {
              setClickBestBtn(false);
              setClickFilter(false);
            }}
          >
            {!clickBestBtn ? (
              <WithLocalSvg width={20} height={20} asset={CheckSvg} />
            ) : (
              <Empty></Empty>
            )}
            <FilterOptionText margin={clickBestBtn}>최신순</FilterOptionText>
          </FilterOptionBtn>
          <MiddleLine />
          <FilterOptionBtn
            onPress={() => {
              setClickBestBtn(true);
              setClickFilter(false);
            }}
          >
            {clickBestBtn ? (
              <WithLocalSvg width={20} height={20} asset={CheckSvg} />
            ) : (
              <Empty></Empty>
            )}
            <FilterOptionText margin={clickBestBtn}>인기순</FilterOptionText>
          </FilterOptionBtn>
        </FilterDropdown>
      )}
    </FilterWrap>
  );
};

export default Filter;

const Empty = styled.View`
  height: 2px;
  width: 20px;
`;
const MiddleLine = styled.View`
  height: 1px;
  width: 100%;
  background-color: #d9d9d9;
`;
const FilterOptionText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
const FilterOptionBtn = styled.TouchableOpacity`
  diplay: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  width: 140px;
  margin: 12px 15px;
`;
const FilterDropdown = styled.View`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: #fff;
  border-radius: 5px;
  ${Platform.OS == "android"
    ? "elevation: 3"
    : "box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22)"}
`;
const Filtertext = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #a0a0a0;
`;
const FilterBtn = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
const FilterWrap = styled.View`
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 20px;
`;
