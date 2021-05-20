import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import Home from "../../pages/Home";
import NewPet from "../../pages/NewPet";

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={styles.drawerStyle}
      drawerContentOptions={{ labelStyle: { color: "#FFFFFF", fontSize: 18 } }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: (config) => (
            <Entypo name="home" size={30} color="#ffffff" />
          ),
        }}
      />
      <Drawer.Screen
        name="Novo Pet"
        component={NewPet}
        options={{
          drawerIcon: (config) => (
            <FontAwesome name="paw" size={30} color="#ffffff" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
//#FF4040

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <ProfileDrawer {...props} />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        labelStyle={{ color: "#ff4040", fontSize: 18 }}
        onPress={() => {
          props.navigation.popToTop();
        }}
        icon={() => <SimpleLineIcons name="logout" size={30} color="#ffffff" />}
      />
    </DrawerContentScrollView>
  );
}

function ProfileDrawer(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Home");
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/17.jpg" }}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.drawerText}>Username</Text>
          <Text style={styles.drawerTextSmall}>OpenProfile</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 165,
  },
  containerText: {
    alignItems: "center",
  },
  drawerStyle: {
    width: 250,
    backgroundColor: "#035E73",
  },
  drawerText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  drawerTextSmall: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#DDD",
    elevation: 6,
  },
});
