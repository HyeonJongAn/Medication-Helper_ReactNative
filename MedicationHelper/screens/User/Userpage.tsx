//Mypage.tsx

import React from "react";
import {
  NativeBaseProvider,
  Text,
  Box,
  Input,
  Button,
  HStack,
} from "native-base";
import { TextInput } from "react-native";

/*
  스택 네이게이션으로 지정된 컴포넌트는, 여러가지 요소(props)가 주어지는데,
  navigation을 사용하면, 네비게이션으로 지정된 여러가지 화면으로 이동 할 수 있다.
*/

export default function Mypage({ navigation }: any) {
  // navigation.navigate("스택 네이게이션 컴포넌트 name")을 사용해, 화면 이동
  return (
    <NativeBaseProvider>
      <Box height="10"></Box>
      <Box width="100%" alignSelf="center">
        <Text alignSelf="center" fontSize="4xl">
          마이 페이지
        </Text>
      </Box>
      <Box height="5"></Box>

      <Box width="80%" alignSelf="center">
        <Text bold italic fontSize="2xl">
          일반 사용자
        </Text>
      </Box>

      <Box
        width="80%"
        alignSelf="center"
        borderColor="black"
        borderWidth="1"
        p="2"
      >
        <Text fontSize="2xl">회원정보</Text>

        <HStack>
          <Text fontSize="xl">이름 : </Text>
          <Text bold italic fontSize="xl">
            김철수
          </Text>
        </HStack>

        <HStack>
          <Text fontSize="xl">생년월일 : </Text>
          <Text bold italic fontSize="xl">
            1998/03/28
          </Text>
        </HStack>

        <HStack>
          <Text fontSize="xl">성별 : </Text>
          <Text bold italic fontSize="xl">
            남성
          </Text>
        </HStack>
      </Box>
      <Box height="50"></Box>
      <Box width="200" alignSelf="center">
        <Button onPress={() => navigation.navigate("Welcome")}>로그아웃</Button>
      </Box>
      <Box height="1"></Box>
      <Box width="200" alignSelf="center">
        <Button onPress={() => navigation.navigate("Welcome")}>회원탈퇴</Button>
      </Box>
    </NativeBaseProvider>
  );
}
2;
