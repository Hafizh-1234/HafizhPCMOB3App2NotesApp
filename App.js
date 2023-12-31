import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import NotesStack from "./components/NotesStack";
import AddScreen from "./components/AddScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Notes Stack"
          component={NotesStack}
          options={{ headerShown: false, headerMode: false }}
        />
        <Stack.Screen
          name="Add Note"
          component={AddScreen}
          options={{ presentation: "modal", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const db = SQLite.openDatabase("notes.db");

// function NotesScreen({ navigation }) {
//   const [notes, setNotes] = useState([
//     { title: "Walk the cat", done: false, id: "0" },
//     { title: "Feed the elephant", done: false, id: "1" },
//   ]);

//   useEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Pressable onPress={addNote}>
//           <Entypo
//             name="new-message"
//             size={24}
//             color="black"
//             style={{ marginRight: 20 }}
//           />
//         </Pressable>
//       ),
//     });
//   });

//   function addNote() {
//     navigation.navigate("Add Note");
//   }

//   function renderItem({ item }) {
//     return (
//       <View
//         style={{
//           padding: 10,
//           paddingTop: 20,
//           paddingBottom: 20,
//           borderBottomColor: "#ccc",
//           borderBottomWidth: 1,
//         }}
//       >
//         <Text style={{ textAlign: "left", fontSize: 16 }}>{item.title}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         style={{ width: "100%" }}
//         data={notes}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// }

// const InnerStack = createStackNavigator();

// function NotesStack() {
// return (
// <InnerStack.Navigator>
// <InnerStack.Screen
// name="Notes"
// component={NotesScreen}
// options={{
// headerTitle: "Notes App",
// headerTitleStyle: {
// fontWeight: "bold",
// fontSize: 30
// },
// headerStyle: {
// height: 120,
// backgroundColor: "yellow",
// borderBottomColor: "#ccc",
// borderBottomWidth: 1
// }
// }}
// />
// </InnerStack.Navigator>
// );
// }

// function AddScreen({ navigation }) {
// return (
// <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// <Text>This is the add screen</Text>
// <Pressable onPress={() => navigation.goBack()} style={{ padding: 10 }}>
// <Text style={{ color: "orange" }}>Dismiss</Text>
// </Pressable>
// </View>
// );
// }

// export default function App() {
// return (
// <NavigationContainer>
// <Stack.Navigator
// screenOptions={{ presentation: "modal", headerShown: false }}>
// <Stack.Screen
// name="Notes Stack"
// component={NotesStack}
// options={{ headerShown: false }}
// />
// <Stack.Screen name="Add Note" component={AddScreen} />
// </Stack.Navigator>
// </NavigationContainer>
// );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    alignItems: "center",
    justifyContent: "center",
  },
});
