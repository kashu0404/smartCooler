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

export default function TempScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>SMARTCOOLER</Text>

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
  footer: {
    width: "100%",
    flexDirection: "row",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
