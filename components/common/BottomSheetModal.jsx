import React, { useCallback, useEffect, useMemo, useRef } from "react";
import styled from "styled-components/native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import bottomSheetSlice from "../../redux_modules/slice/bottomSheetSlice";
import { useSelector } from "react-redux";

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

  const bottomSheetObj = useSelector((state) => {
    return state.bottomSheet.bottomSheetObj;
  });

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
  const snapPoints = bottomSheetObj.text_2 ? ["20%"] : ["13%"];

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
        <Content onPress={bottomSheetObj.onPress_1}>
          <Text>{bottomSheetObj.text_1}</Text>
        </Content>
        {bottomSheetObj.text_2 && (
          <>
            <BottomBorder />
            <Content onPress={bottomSheetObj.onPress_2}>
              <Text>{bottomSheetObj.text_2}</Text>
            </Content>
          </>
        )}
      </View>
    </BottomSheet>
  );
};

export default BottomSheetModal;
