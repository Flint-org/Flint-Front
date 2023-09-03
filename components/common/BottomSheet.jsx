import React, { useCallback, useEffect, useMemo, useRef } from "react";
import styled from "styled-components/native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import bottomSheetSlice from "../../redux_modules/slice/bottomSheetSlice";

const Text = styled.Text`
  font-size: 18px;
`;
const Content = styled.TouchableOpacity`
  height: 60px;
  align-items: center;
  justify-content: center;
`;
const BottomBorder = styled.View`
  border: 0.5px solid gray;
`;

const BottomSheetModal = () => {
  const bottomSheetRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bottomSheetSlice.actions.updateRef(bottomSheetRef.current));
  }, [bottomSheetRef]);
  const snapPoints = useMemo(() => ["20%"], []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      style={{ borderRadius: "15px" }}
      backdropComponent={renderBackdrop}
    >
      <View>
        <Content>
          <Text>그룹 편집</Text>
        </Content>
        <BottomBorder />
        <Content>
          <Text>명함 수정</Text>
        </Content>
      </View>
    </BottomSheet>
  );
};

export default BottomSheetModal;
