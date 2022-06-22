import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image} from "react-native"
import { styles } from './estilos';
import *  as Animatable from 'react-native-animatable'  
import {useNavigation} from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'; 
import { SafeAreaView } from 'react-native-safe-area-context';


export default function NovaSenhaEmail() {
    const navigation = useNavigation();
    return (
    <View style={styles.container2}>

                    <ImageBackground 
                        source = { require ('./assets/superior.png') }
                        style = {styles.imagemSuperior}> 
                              <SafeAreaView>
                            <View style={styles.header}>
                            <TouchableOpacity 
                            onPress={()=> navigation.navigate('CriarNovaSenha' as any)}
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
                        <View  style={styles.containerHeaderRecuperar}>
                            <Text style={styles.messageDegrade}>Criar nova</Text>
                            <Text style={styles.messageDegrade}>Senha</Text>
                        </View>
    
                    </ImageBackground>
      

        <Animatable.View animation="fadeInUp" style={styles.containerFormSenhaOk}>
            
                    <Image 
                        source = { require ('./assets/NovaSenhaOk.png') }
                        style = {styles.imagemSuperiorSenhaOk}>   

    
                    </Image>

            
            <Text style={styles.messageNovaSenha}>Nova senha criada com sucesso!</Text>
            <TouchableOpacity style = {styles.buttonRecuperar}
             onPress={()=> navigation.navigate('Login' as any)}
             >
                <Text style = {styles.buttonTextEnviar}>OK</Text>
                
             </TouchableOpacity>  

            


        </Animatable.View>
    
    </View>
    );


}