import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from './Inicio';
import Login from './Login';
import RecuperarSenha from './RecuperarSenha';
import RecuperarSenhaEmail from './RecuperarSenhaEmail';
import CriarNovaSenha from './CriarNovaSenha'
import NovaSenhaEmail from './NovaSenhaEmail'
import { styles } from './estilos';


const Stack = createStackNavigator();
export default function Routes(){
    

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Inicio" 
                component={Inicio}
                options={{header: ()=> null}}
                //options={{headerTitle: ""}}
                />

                <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{header: ()=> null}}
                />

                <Stack.Screen 
                name="RecuperarSenha" 
                component={RecuperarSenha} 
                options={{header: ()=> null}}

                />
                <Stack.Screen 
                name="RecuperarSenhaEmail" 
                component={RecuperarSenhaEmail} 
                options={{header: ()=> null}}

                />
         
                <Stack.Screen 
                name="CriarNovaSenha" 
                component={CriarNovaSenha} 
                options={{header: ()=> null}}
                

                />
                <Stack.Screen 
                name="NovaSenhaEmail" 
                component={NovaSenhaEmail} 
                options={{header: ()=> null}}
                
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}