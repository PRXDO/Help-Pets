import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import NewPet from './pages/NewPet';
import Vacinas from './pages/Vacinas';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="NewPet"
                    component={NewPet}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;