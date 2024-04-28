// SecondPage.js

import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackgroundImg from './MapView.jpeg';

// const image = {'./MapView.jpeg'};

const SecondPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImg} resizeMode="cover" style={styles.image}>
      {/* <Text style={styles.text}>Inside</Text> */}
    </ImageBackground>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%',
  },
  image: {
    height:'100%',
    width:'100%',
    justifyContent: 'center',
  },
});

export default SecondPage;
