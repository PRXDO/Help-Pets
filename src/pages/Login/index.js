import React from 'react';
import { Text, View, KeyboardAvoidingView, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function Login() {
  return (
      <KeyboardAvoidingView style={styles.background}>
          <View style={styles.containerLogo}>
          <Image
                source={require('./logo.png')}
                style={styles.imageStyleLabel}
                />
          </View>

          <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                onChangeText={()=>{}}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={()=>{}}
            />
            <TouchableOpacity style={styles.btnSubmit}>
                <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegister}>
                <Text style={styles.registerText}>Criar conta gratuita</Text>
            </TouchableOpacity>

          </View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    background:{
        alignItems: 'center',
        marginTop: '5%',
        paddingHorizontal: '5%',
        width: '100%',
        flex: 1,
        backgroundColor: '#035E73'
    },
    containerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%',
        marginTop: "30%",
    },
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 100,
        borderRadius: 5,
        paddingBottom: 10,
        marginTop: "-50%",
      },
    input:{
        backgroundColor: '#FFF',
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        width: '90%',
        marginBottom: 15,
        padding: 10,
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
      btnRegister:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#46B5B6',
        height: 45,
        width: '90%',
        borderRadius: 7,
        marginTop: 10,
      },
      registerText:{
        color: '#FFF',
        fontSize: 18
      }
})