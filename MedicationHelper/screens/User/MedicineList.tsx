//MedicineList.tsx

import React, { useEffect, useState, useRef } from "react";
import {
  NativeBaseProvider,
  Text,
  Box,
  Input,
  Button,
  HStack,
} from "native-base";
import { TextInput } from "react-native";
import PregnantFobid from "./PregnantForbid";

import {
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
  Pressable,
} from "react-native";

import { Medicine } from "./Medicine";
import MedicineCell from "./MedicineCell";
import MedicineData from "./MedicineData.json";

/*
  스택 네이게이션으로 지정된 컴포넌트는, 여러가지 요소(props)가 주어지는데,
  navigation을 사용하면, 네비게이션으로 지정된 여러가지 화면으로 이동 할 수 있다.
*/

export default function MedicineList({ navigation }: any) {
  // navigation.navigate("스택 네이게이션 컴포넌트 name")을 사용해, 화면 이동
  return (
    <NativeBaseProvider>
      <Box height="10"></Box>
      <Box width="100%" alignSelf="center">
        <Text alignSelf="center" fontSize="4xl">
          약물 목록
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
        <FlatList
          data={MedicineData as Array<Medicine>}
          renderItem={({ item }: { item: Medicine }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("MedicineDetail", {
                    ITEM_NAME: item.ITEM_NAME,
                    ITEM_IMAGE: item.ITEM_IMAGE,
                    ENTP_NAME: item.ENTP_NAME,
                  })
                }
              >
                <MedicineCell item={item}></MedicineCell>
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.ITEM_NAME}
        />
      </Box>
      <Box height="5"></Box>
      <Box width="300" alignSelf="center">
        <HStack alignSelf="center">
          <Button onPress={() => navigation.navigate("DuplicateForbid")}>
            병용금기
          </Button>
          <Button onPress={() => navigation.navigate("PregnantFobid")}>
            임부금기
          </Button>
          <Button onPress={() => navigation.navigate("SameEffect")}>
            효능중복
          </Button>
        </HStack>
      </Box>
      <Box height="5"></Box>
      <Box width="100" alignSelf="center">
        <Button>목록 삭제</Button>
      </Box>
    </NativeBaseProvider>
  );
}
