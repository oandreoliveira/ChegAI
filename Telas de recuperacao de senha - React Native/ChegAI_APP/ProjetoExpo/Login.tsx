import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import { styles } from './estilos';
import *  as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import Routes from "./Routes";
import Inicio from "./Inicio";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#FFB578', '#2667FF', '#FFB578']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <SafeAreaView>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Inicio' as any)}
                        >
                            <Image
                                source={require('./assets/voltar.png')}
                                style={{ width: 20, height: 20 }}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Inicio' as any)}
                        >
                            <Image
                                source={require('./assets/logo2.png')}
                                style={{ width: 140, height: 40 }}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Inicio' as any)}
                        >
                            <Image
                                source={require('./assets/fechar.png')}
                                style={{ width: 15, height: 15 }}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>

                <Animatable.View animation="fadeInLeft" delay={550} style={styles.containerHeader}>
                    <Text style={styles.messageDegrade}>Faça o seu</Text>
                    <Text style={styles.messageDegrade}>Login</Text>

                </Animatable.View>

                <Animatable.View animation="fadeInUp" style={styles.containerFormLogin}>

                    <TextInput
                        placeholderTextColor="white"
                        placeholder=" Digite o seu email"
                        style={styles.imput}

                    />

                    <TextInput
                        placeholderTextColor="white"
                        placeholder=" Digite a sua senha"
                        style={styles.imput}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.buttonPasswordLogin}
                        onPress={() => navigation.navigate('RecuperarSenha' as any)}
                    >
                        <Text style={styles.passwordTextLogin}>Esqueceu sua senha?         </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonLogin}
                        onPress={() => navigation.navigate('Perfil' as any)}
                    >
                        <Text style={styles.buttonTextLogin}>Entrar</Text>
                    </TouchableOpacity>




                </Animatable.View>
            </LinearGradient>
        </View>
    );
}