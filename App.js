import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <View>는<div>와 비슷
    <View style={styles.container}> 
      {/* <Text style={styles.text}>Hello~</Text>
      <Text style={styles.text}>Hello~</Text> */}
      <View style={styles.yellowView}>
        <Text style={styles.text}></Text>
      </View>
      <View style={styles.blueView}>
       <Text style={styles.text}></Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // flex 잘 활용 핸드폰 크기 달라도 맞춰질꺼야
  container: {
    flex: 1,
    // flexDirection:'row', //줄바꾸기 안함
    // alignItems: 'center',
    justifyContent: 'center',
  },
  // text: {
  //   color: 'black',
  // },
  yellowView: {
    flex: 1,
    backgroundColor:'yellow'
  },
  blueView: {
    flex: 2,
    backgroundColor:'blue'
  }
});
