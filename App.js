import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CounterComponent from './Components/CounterComponent';
import CalendarComponent from './Components/CalendarComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <CounterComponent/>
      <CalendarComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
