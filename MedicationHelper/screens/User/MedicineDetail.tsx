//MedicineDetail.tsx

import React from "react";
import { NativeBaseProvider, Text, Box, Input, Button } from "native-base";
import { FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

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

export default function MedicineDetail({ route }: Navigation) {
  // navigation.navigate("스택 네이게이션 컴포넌트 name")을 사용해, 화면 이동
  return (
    <NativeBaseProvider>
      <Box height="10"></Box>
      <Box width="100%" alignSelf="center">
        <Text alignSelf="center" fontSize="4xl">
          약물 세부사항
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

        <Image
          style={styles.image}
          source={route.params.ITEM_IMAGE}
          placeholder={blurhash}
          contentFit="cover"
        />
        <Text>{route.params.ENTP_NAME}</Text>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 0.5,
    width: "100%",
    backgroundColor: "#0553",
  },
});
