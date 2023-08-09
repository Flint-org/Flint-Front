import React from "react";
import styled from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const NativeStack = createNativeStackNavigator();

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;

const Signup1 = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Btn
        onPress={() => {
          navigation.navigate("Signup2");
        }}
      >
        <Text>1</Text>
      </Btn>
    </Container>
  );
};

const Signup2 = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Btn
        onPress={() => {
          navigation.navigate("Signup3");
        }}
      >
        <Text>2</Text>
      </Btn>
    </Container>
  );
};

const Signup3 = () => {
  return (
    <Container>
      <Btn>
        <Text>3</Text>
      </Btn>
    </Container>
  );
};

const Signup = () => {
  return (
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
      <NativeStack.Screen name="Signup1" component={Signup1} />
      <NativeStack.Screen name="Signup2" component={Signup2} />
      <NativeStack.Screen name="Signup3" component={Signup3} />
    </NativeStack.Navigator>
  );
};

export default Signup;
