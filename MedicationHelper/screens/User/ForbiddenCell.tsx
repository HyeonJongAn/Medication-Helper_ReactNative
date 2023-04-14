import { Forbidden } from "./Forbidden";
import { Box, Text } from "native-base";
import { View, StyleSheet } from "react-native";

export default function ForbiddenCell({ item }: { item: Forbidden }) {
  return (
    <View style={styles.container}>
      <Text color="white">{item.ITEM_NAME}</Text>
      <Text color="white">{item.ClASS_NAME}</Text>
      <Text color="white">{item.ENTP_NAME}</Text>
      <Text color="white">{item.ING_KOR}</Text>
      <Text color="white">{item.PROHBT_CONTENT}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    color: "white",
    backgroundColor: "rgba(50,50,50,1)",
  },
});
