import { Person } from "./Person";
import { Box, Text } from "native-base";
import { View, StyleSheet } from "react-native";

export default function PersonCell({ item }: { item: Person }) {
  return (
    <View style={styles.container}>
      <Text color="white">{item.uID}</Text>
      <Text color="white">{item.uName}</Text>
      <Text color="white">{item.birthDate}</Text>
      <Text color="white">{item.uGender}</Text>
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
