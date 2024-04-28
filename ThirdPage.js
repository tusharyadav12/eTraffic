import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThirdPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>All Lights Go Green!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ///height:'33%',
    fontSize:80,
  },
});

export default ThirdPage;
