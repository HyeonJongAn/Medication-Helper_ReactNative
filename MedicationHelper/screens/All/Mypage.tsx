//Mypage.tsx

import React from "react";
import {
  NativeBaseProvider,
  Text,
  Box,
  Button,
  HStack,
} from "native-base";
import { Alert } from "react-native";
import firebase from "../../firebase";
import { currentUser } from "../../user";

const database = firebase.database();

export default function Mypage({ navigation }: any) {
  const logout = () => {
    currentUser.init();
    Alert.alert('알림', '로그아웃 되었습니다.');
    navigation.navigate("Welcome");
  };

  const Withdrawal = () => {
    database.ref('User/' + currentUser.uID).remove();
    currentUser.init();
    Alert.alert('알람', '회원탈퇴 되었습니다.');
    navigation.navigate("Welcome");
  };

  return (
    <NativeBaseProvider>
      <Box height="10"></Box>
      <Box width="100%" alignSelf="center">
        <Text alignSelf="center" fontSize="4xl">
          마이 페이지
        </Text>
      </Box>
      <Box height="5"></Box>

      <Box
        width="80%"
        alignSelf="center"
        borderColor="black"
        borderWidth="1"
        p="2"
      >
        <Text fontSize="2xl">사용자 정보</Text>

        <HStack>
          <Text fontSize="xl">이름 : </Text>
          <Text bold italic fontSize="xl">
            {currentUser.uName}
          </Text>
        </HStack>

        <HStack>
          <Text fontSize="xl">생년월일 : </Text>
          <Text bold italic fontSize="xl">
            {currentUser.birthDate}
          </Text>
        </HStack>

        <HStack>
          <Text fontSize="xl">성별 : </Text>
          <Text bold italic fontSize="xl">
            {currentUser.uGender}
          </Text>
        </HStack>
      </Box>
      <Box height="50"></Box>
      <Box width="200" alignSelf="center">
        <Button onPress={() => navigation.navigate("Modify")}>회원정보 수정</Button>
      </Box>
      <Box height="50"></Box>
      <Box width="200" alignSelf="center">
        <Button onPress={logout}>로그아웃</Button>
      </Box>
      <Box height="1"></Box>
      <Box width="200" alignSelf="center">
        <Button onPress={Withdrawal}>회원탈퇴</Button>
      </Box>
    </NativeBaseProvider>
  );
}