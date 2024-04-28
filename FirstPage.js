import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';


const FirstPage = () => {
  const handleCallPress = () => {
    // Implement call functionality here
    console.log('Calling...');
  };

  const handleSpeakerPress = () => {
    // Implement speaker functionality here
    console.log('Speaker toggled');
  };

  const handleRecordPress = () => {
    // Implement call recording functionality here
    console.log('Call recording toggled');
  };

  const handleBluetoothPress = () => {
    // Implement Bluetooth functionality here
    console.log('Bluetooth toggled');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calling Ambulance...</Text>
      <TouchableOpacity style={styles.button} onPress={handleSpeakerPress}>
        {/* <MaterialIcons name="speaker-phone" size={24} color="black" /> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRecordPress}>
        {/* <MaterialIcons name="fiber-record" size={24} color="red" /> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleBluetoothPress}>
        {/* <MaterialIcons name="bluetooth" size={24} color="blue" /> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.callButton} onPress={handleCallPress}>
        <Text style={styles.callButtonText}>Send LIVE location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 25,
    marginBottom: 10,
    // height:20,
  },
  callButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  callButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default FirstPage;
