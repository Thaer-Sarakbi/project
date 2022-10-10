import * as React from 'react';
import { StyleSheet, View, Text, StatusBar, Platform } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Result</Text>
      <Text>Hello React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Platform.OS = 'android' ? 20 : 40
  }
});
