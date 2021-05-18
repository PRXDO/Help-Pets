import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';

const list = [
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
    ];

export default props => {
    return (
        <View style={styles.background}>
            <Text style={styles.titletext}>Meus Pets</Text>
        <View>
        
        {
        list.map((l, i) => (
            <ListItem key={i} bottomDivider>
                <Avatar source={{uri: l.avatar_url}} />
                <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>Raça: {l.raca}</ListItem.Subtitle>
                <ListItem.Subtitle>Data de Nascimento: {l.dtanasc}</ListItem.Subtitle>
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