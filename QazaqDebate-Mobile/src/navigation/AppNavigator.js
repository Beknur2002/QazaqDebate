import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const AppNavigator = () => {
const [signed, setSigned] = useState(true)
    return (
        <NavigationContainer>
            {signed ? <TabNavigator /> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})