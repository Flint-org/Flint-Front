import React from "react";
import App from "./App";
import store from "./redux_modules/store";
import { Provider } from "react-redux";

//APP.js에서 store 사용할 수 있도록 APP.js 상위 컴포넌트 제작
const main = () => {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
};

export default main;
