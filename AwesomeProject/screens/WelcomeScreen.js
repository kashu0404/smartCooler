import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to SmartCooler</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Click to Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BBE8F7'
  },
  text: {
    fontFamily: 'JuliusSansOne',
    fontSize: 25
  },
  button: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  buttonText: {
    color:'blue',
    fontSize: 18,
    color: '#333'
  }
});

export default WelcomeScreen;
