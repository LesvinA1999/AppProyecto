import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import RootStack from './navigators/RootStack';

export default function App() {
  return (
    <RootStack></RootStack>
  );
}