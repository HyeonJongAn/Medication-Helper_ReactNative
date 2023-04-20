//.tsx

import React from "react";
import { NativeBaseProvider, Text, Box, Input, Button } from "native-base";
import { TextInput } from "react-native";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
/*
  스택 네이게이션으로 지정된 컴포넌트는, 여러가지 요소(props)가 주어지는데,
  navigation을 사용하면, 네비게이션으로 지정된 여러가지 화면으로 이동 할 수 있다.
*/
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
        <Text fontSize="3xl">접속 중 : 김철수</Text>
      </Box>
      <Box height="5" />

      <Box
        width="80%"
        alignSelf="center"
        borderColor="black"
        borderWidth="1"
        p="2"
        height="400"
      >
        <Text>사용자 주변 병원 & 약국</Text>

        <Image
          style={styles.image}
          source="https://ifh.cc/g/BjMyP9.jpg"
          placeholder={blurhash}
          contentFit="cover"
        />
      </Box>
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
