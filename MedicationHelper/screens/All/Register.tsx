//Register.tsx

import React, { useEffect, useState } from "react";
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
import { TextInput, Alert } from "react-native";
import firebase from "./firebase";

// 데이터베이스 참조 생성
const database = firebase.database();
const ref = database.ref('User');

export default function Register({ navigation }: any) {
  const [uID, setuID] = useState('');
  const [uPW, setuPW] = useState('');
  const [PWCheck, setPWCheck] = useState('')
  const [uName, setuName] = useState('');
  const [uGender, setuGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [tag, setTag] = useState('');

  const uIDhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuID(event.target.value);
  }
  const uPWhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuPW(event.target.value);
  }
  const uPWCheckhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPWCheck(event.target.value);
  }
  const uNamehandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuName(event.target.value);
  }
  const birthDatehandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(event.target.value);
  }
  
  const handleClick = () => {
    // 새로운 하위 항목의 이름 지정
    if (!uID || !uPW || !uName || !uGender || !birthDate || !tag) {
      //Alert.alert('비어있는 내용이 있습니다.') // 모바일 환경에서는 이 코드를 사용
      window.alert('비어있는 내용이 있습니다.'); // Web 환경에서는 이 코드를 사용
      return;
    } else if (uPW != PWCheck) {
      //Alert.alert('비밀번호 확인란이 일치하지 않습니다.') // 모바일 환경에서는 이 코드를 사용
      window.alert('비밀번호 확인란이 일치하지 않습니다.') // Web 환경에서는 이 코드를 사용
    } else {
      const childRef = ref.child(uID);
      
      childRef.set({
        uID: uID,
        uPW: uPW,
        uName: uName,
        uGender: uGender,
        birthDate: birthDate,
        tag: tag
      });
  
      navigation.navigate("Welcome");
    }
  };

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
          <Input type="text" onChange={uIDhandleChange} width="75%" variant="underlined" placeholder="ID"></Input>
          <Button>중복확인</Button>
        </HStack>

        <Text fontSize="xl">비밀번호</Text>
        <Input type="text" onChange={uPWhandleChange} variant="underlined" placeholder="PW"></Input>
        <Text fontSize="xl">비밀번호 확인</Text>
        <Input type="text" onChange={uPWCheckhandleChange} variant="underlined" placeholder="PW 재입력"></Input>

        <Text fontSize="xl">사용자 선택</Text>
        <Radio.Group
          name="tagGroup"
          defaultValue="0"
          accessibilityLabel="Select Tag"
          value={tag}
          onChange={nextValue => {setTag(nextValue);}}
        >
          <HStack>
            <Radio value="0" colorScheme="red" size="sm" my={1}>
              일반
            </Radio>
            <Radio value="1" colorScheme="green" size="sm" my={1}>
              관리자
            </Radio>
          </HStack>
        </Radio.Group>
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
        <Input type="text" onChange={uNamehandleChange} variant="underlined" placeholder="NAME"></Input>
        <Text fontSize="xl">생년월일</Text>
        <Input type="text" onChange={birthDatehandleChange} variant="underlined" placeholder="BIRTHDATE"></Input>
        <Text fontSize="xl">성별</Text>
        <Radio.Group
          name="GenderGroup"
          accessibilityLabel="Select Gender"
          value={uGender}
          onChange={nextValue => {setuGender(nextValue);}}
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
          회원가입하기
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};