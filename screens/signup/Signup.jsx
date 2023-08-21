import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartPage from './pages/StartPage';
import DetailsInfoPage from './pages/DetailsInfoPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import EmailVerificationPage2 from './pages/EmailVerificationPage2';
import CertificatePage from './pages/CertificatePage';

const NativeStack = createNativeStackNavigator();

const Signup = () => {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
      <NativeStack.Screen name="StartPage" component={StartPage} />
      <NativeStack.Screen name="DetailsInfoPage" component={DetailsInfoPage} />
      <NativeStack.Screen
        name="EmailVerificationPage"
        component={EmailVerificationPage}
      />
      <NativeStack.Screen
        name="EmailVerificationPage2"
        component={EmailVerificationPage2}
      />
      <NativeStack.Screen name="CertificatePage" component={CertificatePage} />
    </NativeStack.Navigator>
  );
};

export default Signup;
