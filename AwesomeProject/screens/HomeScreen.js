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

export default function HomeScreen() {
  const batterylevel = 80;

  const [devices, setDevices] = useState(["Aamna's Phone", "Kashu's Phone"]);

  const handlePress = (device) => {
    Alert.alert("Disconnect Device", `Do you want to disconnect ${device}?`, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Disconnect",
        onPress: () =>
          setDevices((prevDevices) => prevDevices.filter((d) => d !== device)),
      },
    ]);
  };

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

        <View style={styles.batteryContainer}>
          <Text style={styles.batteryText}>Battery</Text>
          <View style={styles.batteryBorder}>
            <View style={{ ...styles.batteryLevel, width: `${batterylevel}%` }}>
              <Text style={styles.batteryLeveltext}>{batterylevel}%</Text>
            </View>
          </View>
        </View>

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

        <View style={styles.deviceContainer}>
          <Text style={styles.currentDevice}>Current Device</Text>
          <View style={styles.deviceWrap}>
            {devices.map((device, index) => (
              <TouchableOpacity key={index} onPress={() => handlePress(device)}>
                <View style={styles.deviceNameContainer}>
                  <Text style={styles.deviceName}>{device}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
              /* Handle press for first button */
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
              /* Handle press for third button */
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
}

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
    paddingBottom: 40,
    backgroundColor: "#BBE8F7",
    elevation: 3,
  },
  batteryContainer: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    width: "70%",
    marginTop: 200,
    paddingBottom: 50,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 20,
    alignItems: "center", // Center the text horizontally
    justifyContent: "center", // Center the text vertically
  },
  batteryText: {
    paddingTop: 40,
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "700",
  },
  batteryBorder: {
    borderWidth: 2,
    width: 150,
    height: 60,
    borderRadius: 30,
  },
  batteryLevel: {
    backgroundColor: "#B4CBD3",
    height: "100%",
    borderRadius: 30,
  },
  batteryLeveltext: {
    color: "black",
    fontWeight: "500",
    padding: 16,
    fontSize: 20,
  },

  temperatureContainer: {
    marginTop: 50,
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

  deviceContainer: {
    marginTop: 50,
    marginBottom: 55,
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
  currentDevice: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: "700",
  },
  deviceName: {
    fontSize: 18,
    fontWeight: "500",
  },
  deviceNameContainer: {
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 14,
    backgroundColor: "#B4CBD3",
    padding: 17,
    borderRadius: 50,
  },

  footer: {
    width: "100%",
    flexDirection: "row",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  // scrollViewContent: {
  //   flexGrow: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
