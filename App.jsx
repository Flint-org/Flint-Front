import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import * as SplashScreen from "expo-splash-screen";
import { useDispatch } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import Realm from "realm";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheetModal from "./components/common/BottomSheetModal";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const tokenSchema = {
  name: "flintToken",
  properties: {
    _id: "int",
    accessToken: "string",
    refrashToken: "string",
  },
  primaryKey: "_id",
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [realm, setRealm] = useState(null);
  const [isTokenAvailable, setIsTokenAvailable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function prepare() {
      try {
        //FIXME: 테스트 코드이므로 삭제 필요
        //prepare 단계에서 user store에 올려놓은 토큰 값 업데이트 되는지 테스트용 코드
        //dispatch(userSlice.actions.updateToken("myTokenValue123"));
        const connection = await Realm.open({
          path: "tokenDB",
          schema: [tokenSchema],
        });
        if (connection.objects("flintToken").length !== 0) {
          //토큰이 로컬에 존재할 경우
          console.log("토큰 유효한지 체크하기");

          //토큰이 유효할 경우
          setIsTokenAvailable(true);
        } else {
          //토큰이 로컬에 존재하지 않을 경우
          console.log("not exist");
          setIsTokenAvailable(false);
        }
        setRealm(connection);
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
            <Root isTokenAvailable={isTokenAvailable} />
          </NavigationContainer>
          <BottomSheetModal></BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
