//DuplicateForbid.tsx

import React from "react";
import { NativeBaseProvider, Text, Box, Input, Button } from "native-base";
import { FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

type DetailParams = {
  route: {
    params: {
      ITEM_NAME: string;
      ITEM_IMAGE: string;
      ENTP_NAME: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

const data = [];

export default function DuplicateFobid({ route }: Navigation) {
  // navigation.navigate("스택 네이게이션 컴포넌트 name")을 사용해, 화면 이동
  return (
    <NativeBaseProvider>
      <Box height="10"></Box>
      <Box width="100%" alignSelf="center">
        <Text alignSelf="center" fontSize="4xl">
          약물 디테일
        </Text>
      </Box>
      <Box height="5"></Box>

      <Box
        width="80%"
        alignSelf="center"
        borderColor="black"
        borderWidth="1"
        p="2"
        height="400"
      >
        <Text>{route.params.ITEM_NAME}</Text>
        <Text>{route.params.ITEM_IMAGE}</Text>
        <Text>{route.params.ENTP_NAME}</Text>
      </Box>
    </NativeBaseProvider>
  );
}
