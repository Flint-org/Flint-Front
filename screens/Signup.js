import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsInfoPage from '../components/signup/DetailsInfoPage';
import EmailVerificationPage from '../components/signup/EmailVerificationPage';
import CertificatePage from '../components/signup/CertificatePage';
import StartPage from '../components/signup/StartPage';
import EmailVerificationPage2 from '../components/signup/EmailVerificationPage2';

const NativeStack = createNativeStackNavigator();

const Signup = () => {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <NativeStack.Screen name="StartPage" component={StartPage} />
      <NativeStack.Screen name="DetailsInfoPage" component={DetailsInfoPage} />
      <NativeStack.Screen
        name="EmailVerificationPage"
        component={EmailVerificationPage}
      />
      <NativeStack.Screen
        name="EmailVerificationPage2"
        component={EmailVerificationPage2}
      /> */}
      <NativeStack.Screen name="CertificatePage" component={CertificatePage} />
    </NativeStack.Navigator>
  );
};

export default Signup;
