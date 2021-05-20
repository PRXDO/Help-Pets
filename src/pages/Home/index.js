import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";

// const list = [
//   {
//     name: "Valentina",
//     raca: "Felina - SRD",
//     dtanasc: "14/05/2019",
//     avatar_url:
//       "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",
//   },
//   {
//     name: "Zoe",
//     raca: "Felina - SRD",
//     dtanasc: "20/04/2020",
//     avatar_url:
//       "https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300582_960_720.png",
//   },
// ];

export default function Home(props) {
  const [pets, setPets] = useState([]);

  function keyExtractor(item) {
    return item.id;
  }
  function renderItem({ item }) {
    console.log(item);
    return (
      <ListItem bottomDivider>
        <Avatar source={{ uri: item.avatar_url }} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>Raça: {item.raca}</ListItem.Subtitle>
          <ListItem.Subtitle>
            Data de Nascimento: {item.dtanasc}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  useEffect(() => {
    async function getPets() {
      const key = "@help-pets:pets";
      // chama a função getItem do async storage
      const values = await AsyncStorage.getItem(key);
      console.log(values);
      // verificar se está values vazio, caso esteja, coloca os valores para a variavel pets
      if (values !== null) {
        setPets(JSON.parse(values));
      }
    }

    // chama useEffec com chave vazia para zerar os campos
    getPets();
  }, []);
  // sempre que a variavel pets for alterada, chama esse useEffect
  useEffect(() => {
    console.log(pets);
  }, [pets]);

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.openDrawer()}
          >
            <Entypo name="menu" size={28} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.text}>Meu Pets</Text>
        </View>
      </View>

      {/* <TouchableOpacity
        style={styles.btnadd}
        onPress={() => props.navigation.navigate("NewPet")}
      >
        <Text style={styles.submitText}>+</Text>
      </TouchableOpacity> */}
      {/* renderiza as informações que estão sendo colocar na variavel pets */}
      <FlatList
        data={pets}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#035E73",
  },
  titletext: {
    marginTop: 50,
    fontSize: 30,
    color: "#fff",
    marginLeft: "40%",
  },
  btnadd: {
    backgroundColor: "#F27052",
    height: 20,
    width: "5%",
    borderRadius: 7,
    marginBottom: 50,
  },
  btnteste: {
    backgroundColor: "#F27052",
    height: 50,
    width: "15%",
    borderRadius: 7,
    marginBottom: 50,
  },
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
