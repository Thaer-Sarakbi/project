import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <TextInput 
          placeholder='Put your name'
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textBtn}>Click</Text>
        </TouchableOpacity>
      </View>
      <Image 
        source={ require('./react.png') }
      />

      <TouchableOpacity style={styles.floatButton}>
        <Text style={styles.textFloatBtn}>+</Text>
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  input:{
    borderWidth: 1,
    borderRadius: 30,
    width: '60%',
    paddingLeft: 15
  },
  button: {
    backgroundColor: 'red',
    marginTop: 10,
    width: '30%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10
  },
  textBtn:{
    color: 'white'
  },
  floatButton:{
    backgroundColor: 'red',
    width: 50,
    height: 50,
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  textFloatBtn:{
    textAlign: 'center'
  }
});
