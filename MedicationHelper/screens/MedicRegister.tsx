//.tsx

import React from "react";
import { NativeBaseProvider, Text, Box, Input, Button } from "native-base";
import { TextInput } from "react-native";

/*
  스택 네이게이션으로 지정된 컴포넌트는, 여러가지 요소(props)가 주어지는데,
  navigation을 사용하면, 네비게이션으로 지정된 여러가지 화면으로 이동 할 수 있다.
*/

export default function MedicRegister({ navigation }: any) {
  // navigation.navigate("스택 네이게이션 컴포넌트 name")을 사용해, 화면 이동
  return (
    <NativeBaseProvider>
      <Box height="10"></Box>
      <Box width="100%" alignSelf="center">
        <Text alignSelf="center" fontSize="4xl">
          약물 등록
        </Text>
      </Box>
      <Box height="5"></Box>

      <Box
        width="70%"
        alignSelf="center"
        borderColor="black"
        borderWidth="1"
        p="2"
        height="350"
      ></Box>
      <Box height="5"></Box>
      <Box width="200" alignSelf="center">
        <Button onPress={() => navigation.navigate("Welcome")}>사진촬영</Button>
      </Box>
      <Box height="1"></Box>
      <Box width="200" alignSelf="center">
        <Button onPress={() => navigation.navigate("Welcome")}>약물등록</Button>
      </Box>
    </NativeBaseProvider>
  );
}
