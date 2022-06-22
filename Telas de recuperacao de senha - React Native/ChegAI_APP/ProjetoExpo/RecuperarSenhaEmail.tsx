import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image} from "react-native"
import { styles } from './estilos';
import *  as Animatable from 'react-native-animatable'  
import {useNavigation} from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'; 
import { SafeAreaView } from 'react-native-safe-area-context';


export default function RecuperarSenhaEmail() {
    const navigation = useNavigation();
    return (
    <View style={styles.container2}>

                    <ImageBackground 
                        source = { require ('./assets/superior.png') }
                        style = {styles.imagemSuperior}>
                            <SafeAreaView>
                            <View style={styles.header}>
                            <TouchableOpacity 
                            onPress={()=> navigation.navigate('RecuperarSenha' as any)}
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
                            <Text style={styles.message}>Verifique seu</Text>
                            <Text style={styles.message}>E-mail</Text>
                        </Animatable.View>
    
                    </ImageBackground>
                    <View>
                    <Text style={styles.messageRecuperarEmail}>Digite o código de 4 digitos que enviamos para o seu e-mail.</Text>
                                        
                    
                    </View>

                    <View style={styles.containerFormRecuperarEmail}>
                    <TextInput 
                    style= {styles.imputRecuperarEmail }
                    />
                    <TextInput 
                    style= {styles.imputRecuperarEmail}
                    />            
                    <TextInput 
                    style= {styles.imputRecuperarEmail}
                    />            
                    <TextInput 
                    style= {styles.imputRecuperarEmail}
                    />

                    </View>
                    <TouchableOpacity style = {styles.buttonReenviar}
             onPress={()=> navigation.navigate('ReenviodeCodigo' as any)}
             >
                <Text style = {styles.buttonTextReenviar}>Reenviar Código</Text>
             </TouchableOpacity>  



        <Animatable.View animation="fadeInUp" style={styles.containerFormRecuperar}>
            

           
            
            <TouchableOpacity style = {styles.buttonRecuperarEmail}
             onPress={()=> navigation.navigate('CriarNovaSenha' as any)}
             >
                <Text style = {styles.buttonTextEnviar}>Enviar</Text>
                
             </TouchableOpacity>  

            


        </Animatable.View>
    
    </View>
    );


}