import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    'MontserratAlternates-Medium': require('./assets/Fonts/MontserratAlternates-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <AppNavigator />
}


