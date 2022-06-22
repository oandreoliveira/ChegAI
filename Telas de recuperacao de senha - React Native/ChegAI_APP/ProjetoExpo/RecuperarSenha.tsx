import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image} from "react-native"
import { styles } from './estilos';
import *  as Animatable from 'react-native-animatable'  
import {useNavigation} from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'; 
import { SafeAreaView } from 'react-native-safe-area-context';


export default function RecuperarSenha() {
    const navigation = useNavigation();
    return (
    <View style={styles.container2}>


                    <ImageBackground 
                    
                        source = { require ('./assets/superior.png') }
                        style = {styles.imagemSuperior}>
                            <SafeAreaView>
                            <View style={styles.header}>
                            <TouchableOpacity 
                            onPress={()=> navigation.navigate('Login' as any)}
                            >
                            <Image  
                            source = { require ('./assets/voltarAzul.png')}
                            style={{width: 20, height: 20}}
                            resizeMode= 'contain'
                            /> 
                            </TouchableOpacity> 

                            <TouchableOpacity
                            onPress={()=> navigation.navigate('Inicio' as any)}
                            >
                            <Image  
                            source = { require ('./assets/logo2Azul.png')}
                            style={{width: 140, height: 40}}
                            resizeMode= 'contain'
                            />
                            </TouchableOpacity>
                                
                            <TouchableOpacity 
                            onPress={()=> navigation.navigate('Inicio' as any)}
                            >
                            <Image  
                            source = { require ('./assets/fecharAzul.png')}
                            style={{width: 15, height: 15}}
                            resizeMode= 'contain'
                            />
                            </TouchableOpacity>  
                            </View>   
                            </SafeAreaView>   
                        <Animatable.View animation = "fadeInLeft" delay={550} style={styles.containerHeaderRecuperar}>
                            <Text style={styles.message}>Recuperar</Text>
                            <Text style={styles.message}>Senha</Text>
                        </Animatable.View>
                        
    
                        </ImageBackground>

                        <View>
                             <Text style={styles.messageRecuperar}>Insira o seu e-mail ou o número do celular
                            para enviarmos um código de verificação.</Text>
                    
                        </View>

                        <Animatable.View animation="fadeInUp" style={styles.containerFormRecuperar}>
            
            <TextInput 
            //placeholderTextColor = "white"
            placeholder=" Digite o seu email"
            style= {styles.imputRecuperar}
             
            />

            <TextInput 
            //placeholderTextColor = "white"
            placeholder=" Digite o número do seu celular"
             style= {styles.imputRecuperar}
             
            />
            
            <TouchableOpacity style = {styles.buttonRecuperar}
             onPress={()=> navigation.navigate('RecuperarSenhaEmail' as any)}
             >
                <Text style = {styles.buttonTextEnviar}>Enviar</Text>
                
             </TouchableOpacity>  

            


        </Animatable.View>
    
    </View>
    );


}