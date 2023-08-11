import React from 'react';
import styled from 'styled-components/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import DetailsInfoPage from '../components/signup/DetailsInfoPage';
import EmailVerificationPage from '../components/signup/EmailVerificationPage';
import CertificatePage from '../components/signup/CertificatePage';
import SignupPage from '../components/signup/SignupPage';

const NativeStack = createNativeStackNavigator();

const Signup = () => {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
      <NativeStack.Screen name="SignupPage" component={SignupPage} />
      <NativeStack.Screen name="DetailsInfoPage" component={DetailsInfoPage} />
      <NativeStack.Screen
        name="EmailVerificationPage"
        component={EmailVerificationPage}
      />
      <NativeStack.Screen name="CertificatePage" component={CertificatePage} />
    </NativeStack.Navigator>
  );
};

export default Signup;
