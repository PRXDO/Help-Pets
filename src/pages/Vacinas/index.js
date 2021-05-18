import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';

const list = [
    {
    namevac: 'Felocell',
    datavac: '10/04/2020',
    },
    ];

    function getActions(vacines){
      return (
        <>
        <Button 
        onPress={()=>props.navigation.navigate('CadastrarVacinas', vacines)}
        />
        </>
      )
    }

    export default props => {
      return (
          <View style={styles.background}>
              <Text style={styles.titletext}>Vacinas</Text>
          <View>
          
          {
          list.map((l, i) => (
              <ListItem 
              key={i} 
              bottomDivider
              rightElement={getActions(vacines)}
              onPress={()=>props.navigation.navigate('CadastrarVacinas', vacines)}
              >
                  <Avatar source={{uri: l.avatar_url}} />
                  <ListItem.Content>
                  <ListItem.Title>{l.namevac}</ListItem.Title>
                  <ListItem.Subtitle>Data de Aplicação: {l.datavac}</ListItem.Subtitle>
              </ListItem.Content>
        </ListItem>
      ))
    }
  </View>
          </View>
      )
  }

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#035E73',
      },
      titletext:{
          marginTop:50,
          fontSize: 30,
          color: '#fff',
          marginLeft: '40%',
      },
})