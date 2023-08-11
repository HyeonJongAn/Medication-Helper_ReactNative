//Register.tsx

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

const database = firebase.database();

export default function Register({ navigation }: any) {
  const [uID, setuID] = useState('');
  const [uPW, setuPW] = useState('');
  const [PWCheck, setPWCheck] = useState('')
  const [uName, setuName] = useState('');
  const [uGender, setuGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [tag, setTag] = useState('');

  var IDCheck: number = 0;

  // 데이터 확인
  const checkData = async ()=> { 
    const snapshot = await database.ref('User/' + uID).once('value');
    if (uID.trim() === '' ) {
      Alert.alert('오류', '입력된 내용이 없습니다.');
      IDCheck = 0;
    } else if (snapshot.exists()) {
      Alert.alert('오류', '이미 존재하는 ID입니다.');
      IDCheck = 0;
    } else {
      Alert.alert('안내', '사용 가능한 ID입니다.');
      IDCheck = 1;
    }
  };
  
  const handleClick = () => {
    // 새로운 하위 항목의 이름 지정
    if (!uID || !uPW || !uName || !uGender || !birthDate || !tag) {
      Alert.alert('오류', '비어있는 내용이 있습니다.')
    } else if (uPW != PWCheck) {
      Alert.alert('오류', '비밀번호 확인란이 일치하지 않습니다.')
    } else if (IDCheck == 0) {
      Alert.alert('오류', 'ID 중복확인을 하지 않았습니다. 중복확인을 해 주세요.');
    } else {
      const ref = database.ref('User/' + uID);

      ref.set({
        uPW: uPW,
        uName: uName,
        uGender: uGender,
        birthDate: birthDate,
        tag: tag
      });
  
      Alert.alert('안내', '회원가입이 완료되었습니다.')
      navigation.navigate("Welcome");
    }
  };

  return (
    <NativeBaseProvider>
      <Box height="30"></Box>
      <Box width="100" alignSelf="flex-start" marginLeft="10%" marginTop="5%">
      <Button onPress={() => navigation.navigate("Welcome")}>
          메인으로
      </Button>
      </Box>
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
        <Input type="text" onChangeText={text => setuID(text)} width="75%" variant="underlined" placeholder="ID"></Input>
          <Button onPress={checkData}>중복확인</Button>
        </HStack>

        <Text fontSize="xl">비밀번호</Text>
        <Input type="text" onChangeText={text => setuPW(text)} variant="underlined" placeholder="PW"></Input>
        <Text fontSize="xl">비밀번호 확인</Text>
        <Input type="text" onChangeText={text => setPWCheck(text)} variant="underlined" placeholder="PW 재입력"></Input>

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
        <Input type="text" onChangeText={text => setuName(text)} variant="underlined" placeholder="NAME"></Input>
        <Text fontSize="xl">생년월일</Text>
        <Input type="text" onChangeText={text => setBirthDate(text)} variant="underlined" placeholder="BIRTHDATE"></Input>
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
}
