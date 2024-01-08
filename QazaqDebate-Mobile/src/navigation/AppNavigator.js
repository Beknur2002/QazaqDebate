import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import TimerScreen from "../screens/DebateKeeperScreens/TimerScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  const [signed, setSigned] = useState(true);
  return (
    <NavigationContainer>
      {signed ? (
        <Stack.Navigator>
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
        </Stack.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
