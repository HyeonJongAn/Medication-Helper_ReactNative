//Modify.tsx

import React, { useState } from "react";
import {
  NativeBaseProvider,
  Text,
  Box,
  Input,
  Button,
  HStack,
  Radio,
} from "native-base";
import { Alert } from "react-native";
import firebase from "../../firebase";
import { currentUser } from "../../user";

const database = firebase.database();

export default function Register({ navigation }: any) {
  const [rPW, setrPW] = useState(currentUser.uPW);
  const [PWCheck, setPWCheck] = useState('')
  const [rName, setrName] = useState(currentUser.uName);
  const [rGender, setrGender] = useState(currentUser.uGender);
  const [rbirthDate, setrBirthDate] = useState(currentUser.birthDate);

  const handleClick = () => {
    // 새로운 하위 항목의 이름 지정
    if (!rPW || !rName || !rGender || !rbirthDate) {
      Alert.alert('오류', '비어있는 내용이 있습니다.')
    } else if (rPW != PWCheck) {
      Alert.alert('오류', '비밀번호 확인란이 일치하지 않습니다.')
    } else {
      const ref = database.ref('User/' + currentUser.uID);

      ref.update({
        uPW: rPW,
        uName: rName,
        uGender: rGender,
        birthDate: rbirthDate,
      });
  
      Alert.alert('안내', '회원정보 수정이 완료되었습니다.')
      navigation.navigate("Mypage");
    }
  };

  return (
    <NativeBaseProvider>
      <Box height="30"></Box>
      <Box width="100" alignSelf="flex-start" marginLeft="10%" marginTop="5%">
      <Button onPress={() => navigation.navigate("Mypage")}>
          이전으로
      </Button>
      </Box>
      <Box alignSelf="center" p="5">
        <Text fontSize="2xl">회원정보 수정</Text>
      </Box>
      <Box
        width="80%"
        alignSelf="center"
        borderColor="black"
        borderWidth="1"
        p="2"
      >
        <Text fontSize="xl">비밀번호</Text>
        <Input type="text" value={rPW} onChangeText={text => setrPW(text)} variant="underlined" ></Input>
        <Text fontSize="xl">비밀번호 확인</Text>
        <Input type="text" onChangeText={text => setPWCheck(text)} variant="underlined" placeholder="PW 재입력"></Input>
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
        <Input type="text" value={rName} onChangeText={text => setrName(text)} variant="underlined"></Input>
        <Text fontSize="xl">생년월일</Text>
        <Input type="text" value={rbirthDate} onChangeText={text => setrBirthDate(text)} variant="underlined"></Input>
        <Text fontSize="xl">성별</Text>
        <Radio.Group
          name="GenderGroup"
          accessibilityLabel="Select Gender"
          value={rGender}
          defaultValue={rGender}
          onChange={nextValue => {setrGender(nextValue);}}
        >
          <HStack>
            <Radio value="man" colorScheme="red" size="sm" my={1}>
              남성
            </Radio>
            <Radio value="woman" colorScheme="green" size="sm" my={1}>
              여성
            </Radio>
          </HStack>
        </Radio.Group>
      </Box>
      <Box height="1"></Box>
      <Box width="200" alignSelf="center">
      <Button onPress={handleClick}>
          수정 완료
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
