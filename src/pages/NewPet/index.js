import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

const AddPet = () => {
  return (
    <KeyboardAvoidingView style={styles.background}>  
    <ScrollView style={styles.GeneralContainerView}>
      <View style={styles.TitleContainer}>
        <Text style={styles.TitleText}>Novo Pet</Text>
      </View>

            <Text style={styles.texsubtitle1}>Nome Pet</Text> 
            <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={()=>{}}
            />

<Text style={styles.texsubtitle1}>Raça</Text> 
            <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={()=>{}}
            />

<Text style={styles.texsubtitle1}>Peso(kg)</Text> 
            <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={()=>{}}
            />

<Text style={styles.texsubtitle1}>Data de Nascimento</Text> 
            <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={()=>{}}
            />

<Text style={styles.texsubtitle1}>Data do Último Banho</Text> 
            <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={()=>{}}
            />

<Text style={styles.texsubtitle2}>Data da Ultima Consulta</Text> 
            <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={()=>{}}
            />

      <Text style={styles.texsubtitle3}>Data da Ultima Aplicação de Vermifugo</Text> 
            <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={()=>{}}
            />


<Text style={styles.texsubtitle1}>Anotações</Text> 
            <TextInput
                style={styles.inputanotation}
                multiline={true}
                onChangeText={()=>{}}
            />

      <View>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnText}> Adicionar Imagem </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btnText}> Adicionar Vacina </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText}> Salvar </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#035E73',
  },
  GeneralContainerView:{
    marginLeft:30,
  },
  TitleText: {
    fontSize: 30,
    color: '#fff',
  },
  texsubtitle1:{
    color: '#fff',
    fontSize: 18,
    marginRight: 200,
    marginBottom:2,
  },
  
  texsubtitle2:{
    color: '#fff',
    fontSize: 18,
    marginRight: 200,
    marginBottom:2,
  },

  texsubtitle3:{
    color: '#fff',
    fontSize: 18,
    marginRight: 100,
    marginBottom:2,
  },

  input:{
    backgroundColor: '#FFF',
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    width: '90%',
    marginBottom: 10,
    padding: 11,
},

inputanotation:{
    backgroundColor: '#FFF',
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    width: '90%',
    marginBottom: 10,
    padding: 11,
    height: 85,
    textAlignVertical:'top',
},

  TitleContainer: {
    paddingTop: 50,
    paddingRight: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  TextContainer1: {
    marginTop: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 300,
    
  },

  TextContainer2: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 190,
  },
  TextContainer3: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 170,
  },
  TextContainer4: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 85,
  },

  NormalText: {
    fontSize: 18,
    color: '#fff',
  },

  InputContainer1: {
    backgroundColor: '#FFF',
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    width: '90%',
    marginBottom: 15,
    padding: 11,
    marginLeft: 20,
  },
  InputContainer2: {
    fontSize: 22,
    backgroundColor: "white",
    marginTop: 3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 100,
    margin: 15,
    marginLeft: 35,
    marginRight: 100,
    borderWidth: 1,
  },

  btn1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#46B5B6",
    height: 45,
    width: "90%",
    borderRadius: 7,
    marginTop: 1,
    marginBottom: 10,
  },

  btn2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F27052",
    height: 45,
    width: "90%",
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 50,
  },
  btnText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default AddPet;