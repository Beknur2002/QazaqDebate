import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTabs} />
        <Tab.Screen name="Tools" component={Tools} />
        <Tab.Screen name="Services" component={Services} />
        <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})