//DuplicateForbid.tsx

import React from "react";
import { NativeBaseProvider, Text, Box, Input, Button } from "native-base";
import { FlatList } from "react-native";
import { View, StyleSheet } from "react-native";

import DuplicateData from "./DuplicateData.json";
import { Forbidden } from "./Forbidden";
import ForbiddenCell from "./ForbiddenCell";

const data = [];

export default function DuplicateFobid({ navigation }: any) {
  // navigation.navigate("스택 네비게이션 컴포넌트 name")을 사용해, 화면 이동
  return (
    <NativeBaseProvider>
      <Box height="10"></Box>
      <Box width="100%" alignSelf="center">
        <Text alignSelf="center" fontSize="4xl">
          병용금기
        </Text>
      </Box>
      <Box height="5"></Box>

      <Box
        width="80%"
        alignSelf="center"
        borderColor="black"
        borderWidth="1"
        height="80%"
      >
        <View style={styles.container}>
          <FlatList
            data={DuplicateData as Forbidden[]}
            renderItem={ForbiddenCell}
            keyExtractor={(item) => item.ITEM_NAME}
          />
        </View>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "rgba(50,50,50,1)",
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: "white",
  },
});
