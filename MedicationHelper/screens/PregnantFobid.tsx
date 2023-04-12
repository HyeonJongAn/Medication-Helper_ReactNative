//PregnantForbid.tsx

import React from "react";
import { NativeBaseProvider, Text, Box, Input, Button } from "native-base";
import { FlatList } from "react-native";

const data = [];

export default function PregnantFobid({ navigation }: any) {
  // navigation.navigate("스택 네이게이션 컴포넌트 name")을 사용해, 화면 이동
  return (
    <NativeBaseProvider>
      <Box height="50"></Box>
      <Box width="100%" alignSelf="center">
        <Text alignSelf="center" fontSize="4xl">
          임부금기
        </Text>
      </Box>
      <Box height="50"></Box>
    </NativeBaseProvider>
  );
}
