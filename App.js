import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./src/containers/HomeScreen";
import DetailsScreen from "./src/containers/DetailsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
        {/* need to rename details to something else */}
        {/* <Drawer.Screen name="Details" component={DetailsScreen} /> */}
        {/* <Drawer.Screen name="Details" component={DetailsScreen} /> */}
      </Drawer.Navigator>
      {/* <View style={styles.container}>
          <StatusBar backgroundColor="plum" barStyle="dark-content" />
          <Text style={styles.text}>Open up App.js to start working on your new app!</Text>
        </View> */}
      {/* <Stack.Navigator> */}
      {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: "deez nuts" }} /> */}
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C566A",
    // color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
