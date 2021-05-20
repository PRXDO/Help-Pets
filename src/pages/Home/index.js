import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";

/* const list = [
    {
    name: 'Valentina',
    raca: 'Felina - SRD',
    dtanasc: '14/05/2019',
    avatar_url: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
    },
    {
    name: 'Zoe',
    raca: 'Felina - SRD',
    dtanasc: '20/04/2020',
    avatar_url:'https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300582_960_720.png',
    },
    ]; */

export default function Home(props) {
  const [pets, setPets] = useState([]);
  const [flag, setFlag] = useState(false);

  function expandItem() {
    if (flag) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  }

  function confirmUserDeletion(keyExtractor) {
    Alert.alert("Excluir Usuário", "Deseja excluir o usuário?", [
      {
        text: "Sim",
        onPress() {
          dispatch({
            type: "deleteUser",
            payload: item,
          });
        },
      },
      {
        text: "Não",
      },
    ]);
  }

  // function confirmUserDeletion(item) {
  //   Alert.alert("Excluir Usuário", "Deseja excluir o usuário?", [
  //     {
  //       text: "Sim",
  //       onPress() {
  //         remove_user = async (item) => {
  //           try {
  //             let usersJSON = await AsyncStorage.getItem("users");
  //             let usersArray = JSON.parse(usersJSON);
  //             alteredUsers = usersArray.filter(function (e) {
  //               return e.id !== item.id;
  //             });
  //             AsyncStorage.setItem("users", JSON.stringify(alteredUsers));
  //             this.setState({
  //               users: alteredUsers,
  //             });
  //           } catch (error) {
  //             console.log(error);
  //           }
  //         };
  //       },
  //     },
  //     {
  //       text: "Não",
  //     },
  //   ]);
  // }

  // removeValue = async (item) => {
  //   try {
  //     await AsyncStorage.removeItem(item);
  //   } catch (e) {
  //     // remove error
  //   }

  //   console.log("Done.");
  // };

  function keyExtractor(item) {
    return item.id;
  }
  function renderItem({ item }) {
    console.log(item);

    return (
      <>
        <ListItem onPress={expandItem}>
          <Avatar source={{ uri: item.avatar_url }} />
          <ListItem.Content>
            <View style={styles.containerCard}>
              <View>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>Raça: {item.raca}</ListItem.Subtitle>
                <ListItem.Subtitle>
                  Data de Nascimento: {item.dtanasc}
                </ListItem.Subtitle>
              </View>
              <View style={{ justifyContent: "space-between" }}>
                <TouchableOpacity onPress={confirmUserDeletion}>
                  <Entypo name="trash" size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Entypo name="edit" size={24} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
            {flag ? (
              <>
                <ListItem.Title>Peso (kg): {item.peso}</ListItem.Title>
                <ListItem.Title>
                  Data da Ultima Aplicação de Vermifugo: {item.dtavermifugo}
                </ListItem.Title>
                <ListItem.Title>
                  Data do Ultimo Banho: {item.dtabanho}
                </ListItem.Title>
                <ListItem.Title>
                  Data da Ultima Consulta: {item.dtaconsulta}
                </ListItem.Title>
                <ListItem.Title>Vacinas: {item.vacina}</ListItem.Title>
                <ListItem.Title>Anotações: {item.anotacao}</ListItem.Title>
              </>
            ) : null}
            <View
              style={{ backgroundColor: "#D76E33", height: 3, width: "100%" }}
            />
          </ListItem.Content>
        </ListItem>
      </>
    );
  }

  useEffect(() => {
    async function getPets() {
      const key = "@help-pets:pets";
      // chama a função getItem do async storare
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
    paddingHorizontal: "3%",
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
  containerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  content: {
    flexDirection: "column",
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
  container: {
    flexDirection: "row",
    marginTop: 55,
  },
});
