import { Medicine } from "./Medicine";
//import { View,Text,StyleSheet } from 'react-native';
import { Box, Text } from "native-base";

export default function MedicineCell({ item }: { item: Medicine }) {
  return (
    <Box>
      <Text>{item.ITEM_NAME}</Text>
    </Box>
  );
}
