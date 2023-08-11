//ManagerMain.tsx

import React from "react";
import { NativeBaseProvider, Text, Box, Input, Button } from "native-base";
import { TextInput } from "react-native";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { currentUser } from "../../user";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function UserMain({ navigation }: any) {
  // navigation.navigate("스택 네이게이션 컴포넌트 name")을 사용해, 화면 이동
  return (
    <NativeBaseProvider>
      <Box height="30"></Box>

      <Box
        width="80%"
        alignSelf="center"
        borderColor="black"
        borderWidth="1"
        p="2"
      >
        <Text fontSize="xl">반갑습니다!</Text>
        <Text></Text>
        <Text fontSize="3xl">접속 중 : {currentUser.uName}</Text>
      </Box>
      <Box height="5" />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "700",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
});
