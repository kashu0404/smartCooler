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

const SettingsScreen = ({navigation}) => {
  
    const [options] = useState(["Connect Cooler", "Disconnect Cooler", "Usage Statistics"]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Settings</Text>

        {/* new info */}

        <View style={styles.deviceContainer}>
          <Text style={styles.currentDevice}>Select One</Text>
          <View style={styles.deviceWrap}>
            {options.map((device, index) => (
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
                navigation.navigate('Temp')
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

  deviceContainer: {
    marginTop: 200,
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
    marginBottom: 40,
    fontWeight: "700",
  },
 
  deviceName: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    justifyContent: "center",
  },
  deviceNameContainer: {
    
    marginBottom: 25,
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
});

export default SettingsScreen;
