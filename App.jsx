import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import * as SplashScreen from "expo-splash-screen";
import userSlice from "./redux_modules/slice/userSlice";
import { useDispatch } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheetModal from "./components/common/BottomSheetModal";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        //FIXME: 테스트 코드이므로 삭제 필요
        //prepare 단계에서 user store에 올려놓은 토큰 값 업데이트 되는지 테스트용 코드
        //dispatch(userSlice.actions.updateToken("myTokenValue123"));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <NavigationContainer onReady={onLayoutRootView}>
            <Root />
          </NavigationContainer>
          <BottomSheetModal></BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
