import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containertwo}>
      <Image
            source={require("../assets/cooler.png")}
            style={{ width: 55, height: 55, marginBottom: 15}}
            />
      <Text style={styles.text}>SmartCooler</Text></View>
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
  containertwo:{
    flexDirection: "row-reverse",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  text: {
    fontFamily: 'JuliusSansOne',
    fontWeight: "bold",
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
