import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Header({ title, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Entypo
            name="menu"
            size={28}
            color="#FFFFFF"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 55,
  },
  button: {
    backgroundColor: "#035E73",
  },
  text: {
    color: "white",
    padding: 5,
    fontSize: 25,
  },
  containerTitle: {
    backgroundColor: "#035E73",
    width: "100%",
    paddingLeft: 90,
  },
  containerButton: {
    justifyContent: "center",
    backgroundColor: "#035E73",
    paddingHorizontal: 25,
  },
});
