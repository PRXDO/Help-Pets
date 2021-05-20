import { NavigationContainer } from '@react-navigation/native';
import React, { useState ,useEffect } from 'react';
import { Text, View, KeyboardAvoidingView, Button, StyleSheet, TouchableOpacity, TextInput, Animated, Keyboard } from 'react-native';
console.disableYellowBox = true;

export default function Login(props) {

    const [offset] =  useState(new Animated.ValueXY({x: 0, y: 80}));
    const [opacity] =  useState(new Animated.Value(0));
    const [logo] =  useState(new Animated.ValueXY({x: 230, y: 230}));
  
    useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);  

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
      })
    ]).start();
      
    }, []);
  
    //Teclado Aberto
    function keyboardDidShow () {
      Animated.parallel([
        Animated.timing(logo.y, {
          toValue: 130,
          duration: 150,
        }),
        Animated.timing(logo.x, {
          toValue: 130,
          duration: 150,
        }),
      ]).start();
    }
  
    //Teclado Fechado
    function keyboardDidHide () {
      Animated.parallel([
        Animated.timing(logo.y, {
          toValue: 230,
          duration: 150,
        }),
        Animated.timing(logo.x, {
          toValue: 230,
          duration: 150,
        }),
      ]).start();
    }  

  return (
      <KeyboardAvoidingView style={styles.background}>
     <View style={styles.imagelogo}>
      <Animated.Image 
      style={[
        styles.logo,
        {
          width: logo.x,
          height: logo.y
        }
        ]} 
                source={require('./logo.png')}
                />
                </View>
           
                 <Animated.View 
                 style={[
                    styles.container,
                   {
                     opacity: opacity,
                     transform: [
                       { translateY: offset.y}
                     ],
                   },
                   ]}
                 >
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                onChangeText={()=>{}}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                icon="locked"
                secureTextEntry
                autoCorrect={false}
                onChangeText={()=>{}}
            />
            <TouchableOpacity 
            style={styles.btnSubmit}
            onPress={() => props.navigation.navigate('Menu')}>
                <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btnRegister}
            onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>Criar conta gratuita</Text>
            </TouchableOpacity>

          </Animated.View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    background:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#035E73'
    },
    imagelogo:{
        alignItems: 'center',
        justifyContent: 'center',
        flex:2,
    },
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 70,
      },
    input:{
        backgroundColor: '#FFF',
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        width: '90%',
        marginBottom: 15,
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
      btnRegister:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#46B5B6',
        height: 45,
        width: '90%',
        borderRadius: 7,
        marginTop: 15,
        marginBottom:80,
      },
      registerText:{
        color: '#FFF',
        fontSize: 18
      }
})