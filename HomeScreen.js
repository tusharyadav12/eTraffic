import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import { Button } from '@rneui/themed';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToFirstPage = () => {
    navigation.navigate('FirstPage');
  };

  const navigateToSecondPage = () => {
    navigation.navigate('SecondPage');
  };

  const navigateToThirdPage = () => {
    navigation.navigate('ThirdPage');
  };

  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <Button title="Call Ambulance" onPress={navigateToFirstPage} style={styles.topbuttonContainer} color={'red'}  />
      </View>

      <View style={styles.midContainer}>  
        <Button title="     Show  Maps     " onPress={navigateToSecondPage} style={styles.midbuttonContainer} color={'orange'} />
      </View>

      <View style={styles.bottContainer}>  
        <Button title="    Clear  Route    " onPress={navigateToThirdPage} style={styles.bottbuttonContainer} color={'green'}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  // buttonContainer: {
  //   flex: 1,
  //   height:'100%',
  //   width:'80%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#f0f0f0',
  // },
  topContainer :{
    flex: 1,
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  midContainer :{
    flex: 1,
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  bottContainer :{
    flex: 1,
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export default HomeScreen;
