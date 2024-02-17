import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

const TempScreen = ({navigation}) => {
  const [temperature, setTemperature] = React.useState(0);

  const increaseTemperature = () => {
    setTemperature((prevTemperature) => prevTemperature + 1);
  };

  const decreaseTemperature = () => {
    setTemperature((prevTemperature) => prevTemperature - 1);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>SMARTCOOLER</Text>

        <View style={styles.temperatureContainer}>
          <Text style={styles.currentTemp}>Current Temperature</Text>
          <View style={styles.buttonsContainer}>
            <Text style={styles.temperatureText}>{temperature}°</Text>
            <View style={styles.updownContainer}>
              <TouchableOpacity
                onPress={increaseTemperature}
                style={styles.button}
              >
                <Text style={styles.buttonText}>▲</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={decreaseTemperature}
                style={styles.button}
              >
                <Text style={styles.buttonText}>▼</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.startContainer}>
          <TouchableOpacity
            onPress={() => {
                navigation.navigate('Cool')
            }}
            style={styles.button}
          >
            <Text style={styles.setCool}>Set to Cool</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
                navigation.navigate('Home')
            }}
          >
            <Image
              source={require("../assets/home.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              /* Handle press for second button */
            }}
          >
            <Image
              source={require("../assets/cold.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
                navigation.navigate('Setting')
            }}
          >
            <Image
              source={require("../assets/settings.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BBE8F7",
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    paddingTop: 100,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingBottom: 30,
    backgroundColor: "#BBE8F7",
    elevation: 3,
  },

  setCool: {
    fontSize: 20,
    fontWeight: "700",
  },

  startContainer: {
    marginTop: 30,
    marginBottom: 100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    width: 270,
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  temperatureContainer: {
    marginTop: 200,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    width: 300,
    paddingTop: 40,
    paddingBottom: 50,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  currentTemp: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "700",
  },
  temperatureText: {
    fontSize: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
  },

  footer: {
    width: "100%",
    flexDirection: "row",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default TempScreen;
