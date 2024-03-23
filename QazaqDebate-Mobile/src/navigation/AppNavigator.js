import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import TimerScreen from "../screens/DebateKeeperScreens/TimerScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Tournament from "../screens/HomeScreens/Tournament";
import Coin from "../screens/ToolsScreens/Coin";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  const [signed, setSigned] = useState(true);

  useEffect(() => {
    const getid = async () => {
      let token = await AsyncStorage.getItem("id_token");
      if (token) {
        setSigned(false);
      } else {
        setSigned(false);
      }
    };
    getid();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={signed ? "Tab" : "Auth"}
      screenOptions={{
        cardStyle: { backgroundColor: "#FFFFFF" },
      }}
    >
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TimerScreen"
        component={TimerScreen}
        options={({ route }) => ({ title: route.params })}
      />
      <Stack.Screen
        name="Tournament"
        component={Tournament}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Coin"
        component={Coin}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
