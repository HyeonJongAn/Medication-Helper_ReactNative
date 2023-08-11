//Welcome.tsx

import React, { useState } from "react";
import {
  NativeBaseProvider,
  Text,
  Box,
  Button,
} from "native-base";
import { TextInput, Alert } from "react-native";
import firebase from "../../firebase";
import { currentUser } from "../../user";

const database = firebase.database();
/*
  스택 네이게이션으로 지정된 컴포넌트는, 여러가지 요소(props)가 주어지는데,
  navigation을 사용하면, 네비게이션으로 지정된 여러가지 화면으로 이동 할 수 있다.
*/

export default function Welcome({ navigation }: any) {  
  const [uID, setuID] = useState('');
  const [uPW, setuPW] = useState('');

  const login = async (tag : number) => {
    const getID = await database.ref('User/' + uID).once('value');
    const getPW = await database.ref('User/' + uID + '/uPW').once('value');
    const getName = await database.ref('User/' + uID + '/uName').once('value');
    const getGender = await database.ref('User/' + uID + '/uGender').once('value');
    const getbirthDate = await database.ref('User/' + uID + '/birthDate').once('value');
    const gettag = await database.ref('User/' + uID + '/tag').once('value');
    if (!uID || !uPW) {
      Alert.alert('오류', '비어있는 항목이 있습니다.');
    } else if (!getID.exists()) {
      Alert.alert('오류', 'ID가 존재하지 않습니다.');
    } else if (uPW != getPW.val()) {
      Alert.alert('오류', '비밀번호가 일치하지 않습니다.');
    } else if (gettag.val() != tag) {
      switch(tag) {
        case 0:
          Alert.alert('오류', '사용자용 계정이 아닙니다. 사용자로 로그인하려면 UserLogin 버튼을 사용해 주십시오.');
          break;
        case 1:
          Alert.alert('오류', '관리자용 계정이 아닙니다. 관리자로 로그인하려면 ManagerLogin 버튼을 사용해 주십시오.');
          break;
        default:
          Alert.alert('오류', '알 수 없는 오류입니다.');
          break;
      }
    } else {
      currentUser.uID = uID;
      currentUser.uPW = getPW.val();
      currentUser.uName = getName.val();
      currentUser.uGender = getGender.val();
      currentUser.birthDate = getbirthDate.val();
      currentUser.tag = gettag.val();
      Alert.alert('알림', '로그인 성공');
      setuID("");
      setuPW("");
      switch(tag) {
        case 0:
          navigation.navigate("UserMain");
          break;
        case 1:
          navigation.navigate("ManagerMain");
          break;
        default:
          break;
      }
    }
  }

  // navigation.navigate("스택 네이게이션 컴포넌트 name")을 사용해, 화면 이동
  return (
    <NativeBaseProvider>
      <Box height="100"></Box>
      <Box width="100%" alignSelf="center">
        <Text alignSelf="center" fontSize="4xl">
          Medication-Helper
        </Text>
      </Box>
      <Box height="100"></Box>
      <Box
        width="200"
        alignSelf="center"
        borderColor="black"
        borderWidth="1"
        p="1"
      >
        <TextInput value={uID} onChangeText={text => setuID(text)} placeholder="ID"></TextInput>
      </Box>
      <Box height="5"></Box>
      <Box
        width="200"
        alignSelf="center"
        borderColor="black"
        borderWidth="1"
        p="1"
      >
        <TextInput value={uPW} secureTextEntry={true} onChangeText={text => setuPW(text)} placeholder="PW"></TextInput>
      </Box>
      <Box height="30"></Box>
      <Box width="200" alignSelf="center">
        <Button onPress={() => login(0)}>
          UserLogin
        </Button>
        <Button onPress={() => login(1)}>
          ManagerLogin
        </Button>
      </Box>
      <Box height="1"></Box>
      <Box width="200" alignSelf="center">
        <Button onPress={() => navigation.navigate("Register")}>
          Register
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
