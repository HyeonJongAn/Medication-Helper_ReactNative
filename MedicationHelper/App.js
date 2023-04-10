import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NativeBaseProvider, Box, Input } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Text>Medication Helper</Text>
      <Box alignItems="center">
        <Input mx="3" placeholder="ID" w="100%" />
        <Input mx="3" placeholder="PW" w="100%" />
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
