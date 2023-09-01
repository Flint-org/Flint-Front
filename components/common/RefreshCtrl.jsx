import React, { useCallback, useState } from "react";
import { RefreshControl } from "react-native";

/* RefreshCtrl 컴포넌트
 * ScrollView or ListView에서 화면을 당길 경우 refresh를 하는 역할
 */
const RefreshCtrl = () => {
  // refresh 여부 state
  const [refreshing, setRefreshing] = useState(false);

  /* refresh될 때 호출되는 함수
   * setRefreshing을 true로 만들었다가
   * 2000ms 뒤에 다시 false로 변경
   */
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />;
};

export default RefreshCtrl;
