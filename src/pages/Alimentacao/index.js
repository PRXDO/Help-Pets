import React, { useReducer, useState } from "react";
import {
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

export default function Alimentacao(props) {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState();

  const conta = () => {
    setResultado((parseInt(valor1) * 1000 * parseInt(valor2)) / 100);
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <Text style={styles.textitle}>Alimentação</Text>
      {/* Vezes 1000 */}
      <Text style={styles.texsubtitle1}>Insira o peso do pet(kg):</Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={String(valor1)}
        onChangeText={(texto) => {
          setValor1(texto);
        }}
      />
      {/* Divide por 100 */}
      <Text style={styles.texsubtitle1}>Insira o porte do pet:</Text>

      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={String(valor2)}
        onChangeText={(texto) => {
          setValor2(texto);
        }}
      />

      <Text style={styles.texsubtitle1}>Digite 7 para porte pequeno</Text>
      <Text style={styles.texsubtitle1}>Digite 5 para porte medio</Text>
      <Text style={styles.texsubtitle1}>Digite 3 para porte grande</Text>

      <Text style={styles.texsubtitle2}>
        A quantida de comida recomendada para o seu pet é:
      </Text>
      <Text style={styles.input2}>{resultado}                                                                                 gramas</Text>

      <Text style={styles.texsubtitle3}>
        Recomendamos dar essa quantia dividida em duas porções, uma entre as 9h
        e 12h e outra entre as 18h e 21h.
      </Text>

      <TouchableOpacity style={styles.btnSubmit} onPress={() => conta()}>
        <Text style={styles.submitText}> Calcular </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnSubmit2}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text style={styles.submitText}>Voltar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    backgroundColor: "#035E73",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 70,
  },
  textitle: {
    color: "#fff",
    fontSize: 30,
    marginTop: 50,
    marginBottom: 25,
  },
  texsubtitle1: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 25,
  },
  texsubtitle2: {
    color: "#fff",
    fontSize: 20,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    // marginRight: 240,
    marginBottom: 10,
  },
  texsubtitle3: {
    color: "#fff",
    fontSize: 20,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#FFF",
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    width: "90%",
    marginBottom: 10,
    padding: 11,
  },
  input2: {
    backgroundColor: "#FFF",
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    width: "90%",
    marginBottom: 10,
    padding: 11,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  containerResult: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F27052",
    height: 45,
    width: "90%",
    borderRadius: 7,
    marginTop: 10,
  },
  btnSubmit: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F27052",
    height: 45,
    width: "90%",
    borderRadius: 7,
    marginTop: 10,
  },
  btnSubmit2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#46B5B6",
    height: 45,
    width: "90%",
    borderRadius: 7,
    marginTop: 10,
  },
  submitText: {
    color: "#FFF",
    fontSize: 18,
  },
});