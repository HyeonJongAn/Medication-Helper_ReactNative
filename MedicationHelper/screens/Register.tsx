//Register.tsx

import React from "react";
import {
  NativeBaseProvider,
  Text,
  Box,
  Input,
  Button,
  Center,
  HStack,
  Radio,
  Stack,
} from "native-base";
import { TextInput } from "react-native";

export default function Register({ navigation }: any) {
  return (
    <NativeBaseProvider>
      <Box height="30"></Box>
      <Box alignSelf="center" p="5">
        <Text fontSize="2xl">회원가입</Text>
      </Box>
      <Box
        width="80%"
        alignSelf="center"
        borderColor="black"
        borderWidth="1"
        p="2"
      >
        <Text fontSize="xl">아이디</Text>
        <HStack>
          <Input width="75%" variant="underlined" placeholder="ID"></Input>
          <Button>중복확인</Button>
        </HStack>

        <Text fontSize="xl">비밀번호</Text>
        <Input variant="underlined" placeholder="PW"></Input>
        <Text fontSize="xl">비밀번호 확인</Text>
        <Input variant="underlined" placeholder="PW 재입력"></Input>
      </Box>
      <Box height="1"></Box>
      <Box
        width="80%"
        alignSelf="center"
        borderColor="black"
        borderWidth="1"
        p="2"
      >
        <Text fontSize="xl">이름</Text>
        <Input variant="underlined" placeholder="NAME"></Input>
        <Text fontSize="xl">생년월일</Text>
        <Input variant="underlined" placeholder="PW"></Input>
        <Text fontSize="xl">성별</Text>
        <Radio.Group
          name="exampleGroup"
          defaultValue="1"
          accessibilityLabel="pick a size"
        >
          <HStack>
            <Radio value="1" colorScheme="red" size="sm" my={1}>
              남성
            </Radio>
            <Radio value="2" colorScheme="green" size="sm" my={1}>
              여성
            </Radio>
          </HStack>
        </Radio.Group>
      </Box>
      <Box height="1"></Box>
      <Box width="200" alignSelf="center">
        <Button onPress={() => navigation.navigate("Welcome")}>
          회원가입하기
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
