import * as React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React native</Text>
      <TextInput 
       placeholder='Type your name'
       style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Click</Text>
      </TouchableOpacity>
      <Image 
       source={require('./react.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  input:{
    borderWidth: 1,
    borderRadius: 30,
    width: '40%',
    paddingLeft: 10
  },
  button:{
    backgroundColor: 'red',
    width: '40%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }

});
