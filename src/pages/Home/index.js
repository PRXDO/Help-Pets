import React, {useState} from 'react';
import { Text, View, Button, KeyboardAvoidingView, StyleSheet,
         TouchableOpacity, TextInput, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import NewPet from './pages/NewPet';

export default function Home({ navigation }) {

  return (
      <KeyboardAvoidingView style={styles.background}>  
      <Text style={styles.textitle}>Meus Pets</Text> 
            <TouchableOpacity 
            style={styles.btnadd} 
            onPress={() => navigation.navigate('NewPet')}
            >
            <Text style={styles.submitText}>+</Text>
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
      btnadd:{
        backgroundColor: '#FFF',
        height: '5%',
        width: '10%',
        borderRadius: 30,
        marginTop: -60,
        marginLeft: 290,
      },
      submitText:{
        color: '#035E73',
        fontSize: 50,
        marginTop: -4,
        marginLeft: 10,
      },
})