import React, {useReducer, useState} from 'react';
import { Text, View, Button, KeyboardAvoidingView, StyleSheet,
         TouchableOpacity, TextInput, FlatList} from 'react-native';

export default function Alimentacao() {

  return (
      <KeyboardAvoidingView style={styles.background}>  
            <Text style={styles.textitle}>Alimentação Canina</Text> 
            <Text style={styles.texsubtitle1}>Peso do Pet</Text> 
            <TextInput
                style={styles.input}
                autoCorrect={false}
            />

            <TouchableOpacity style={styles.btnSubmit}>
                <Text style={styles.submitText}>Calcular</Text>
            </TouchableOpacity>

      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    background:{
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: '#035E73'
    },
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 70,
      },
    textitle:{
        color: '#fff',
        fontSize: 30,
        marginTop:50,
        marginBottom:25,
      },
      texsubtitle1:{
        color: '#fff',
        fontSize: 18,
        marginRight: 270,
        marginBottom:2,
      },
      texsubtitle2:{
        color: '#fff',
        fontSize: 18,
        marginRight: 240,
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
    btnSubmit:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F27052',
        height: 45,
        width: '90%',
        borderRadius: 7,
        marginTop: 10,
      },
      submitText:{
        color: '#FFF',
        fontSize: 18,
      },
})