//UserList.tsx

import React, { useEffect, useState } from "react";
import { NativeBaseProvider, Text, Box, Input, Button } from "native-base";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native";

import { Person } from "./Person";
import PersonCell from "./Personcell";

import firebase from "../../firebase";

const database = firebase.database();

export default function UserList({ navigation }: any) {
  const [userData, setUserData] = useState<Person[]>([]);

  const handleAddUser = (uID: string, uName: string, birthDate: string, uGender: string) => {
    const newUser: Person = {uID, uName, birthDate, uGender};
    setUserData(prevUserData => [...prevUserData, newUser]);
  };

  useEffect(() => {
    const dbRef = database.ref();

    dbRef.once('value', (snapshot) => {
      const jsonDBData = snapshot.val();
      const users = jsonDBData.User;
      const keys = Object.keys(users);
  
      for (const key of keys) {
        const user = users[key];
        handleAddUser(key, user.uName, user.birthDate, user.uGender);
      }
    });
  }, []);

  return (
    <NativeBaseProvider>
      <Box height="10"></Box>
      <Box width="100%" alignSelf="center">
        <Text alignSelf="center" fontSize="4xl">
          사용자목록
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
            data={userData as Person[]}
            renderItem={PersonCell}
            keyExtractor={(item) => item.uID}
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
