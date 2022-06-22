import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './estilos';
import *  as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Inicio() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#FFB578', '#2667FF', '#FFB578']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >


                <View style={styles.containerLogo}>
                    <View style={styles.containerImagem}>
                        <Animatable.Image
                            animation="flipInY"
                            source=
                            {require('./assets/logo2.png')}
                            style=
                            {styles.imagem}>
                        </Animatable.Image>
                    </View>
                </View>
                <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                    <TouchableOpacity

                        style={styles.button}
                        onPress={() => navigation.navigate('Login' as any)}
                    >

                        <Text style={styles.buttonText}>Entrar</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonCadastro}>Cadastar</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonEmpresa}>Empresa</Text>

                    </TouchableOpacity>
                </Animatable.View>
            </LinearGradient>
        </View >
    );
}