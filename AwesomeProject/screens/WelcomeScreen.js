import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to SmartCooler</Text>
      <Button
        title="Click to Start"
        onPress={() => navigation.navigate('Home')}
      />
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
    text:{
    fontFamily: 'JuliusSansOne',
    fontSize: 25
    }
});
  
export default WelcomeScreen;

