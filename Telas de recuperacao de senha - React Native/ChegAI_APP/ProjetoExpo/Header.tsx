import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from "react-native"
import { styles } from './estilos';
import *  as Animatable from 'react-native-animatable'  
import {useNavigation} from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'; 
import { DrawerActions } from '@react-navigation/native';
//import {Material Icons } from '@expo/vector-icons';


export default function Header(){
    const navigation = useNavigation();
    const AbrirMenu = () => {
        ;
    }
    return(
        <View style={styles.header}>
            

        </View>
    )
}
