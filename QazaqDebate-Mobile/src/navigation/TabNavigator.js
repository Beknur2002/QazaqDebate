import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/HomeScreens/Home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Resources" component={Home} />
      <Tab.Screen name="Tools" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
