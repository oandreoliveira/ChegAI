import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper'
import { MaterialIcons, Entypo } from '@expo/vector-icons'

const Vagas = (props) => {

    const { _id, nameCompany, picture, phone, description, email, vacancyCode } = props.route.params.item
    const deleteCadastroVagas = () => {
        fetch("http://192.168.0.38:3000/delete", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: _id
            })
        })
            .then(res => res.json())
            .then(deletedEmp => {
                Alert.alert(`${deletedEmp.nameCompany} foi deletado!`)
                props.navigation.navigate("Home1")
            })
            .catch(err => {
                Alert.alert("alguma coisa deu errado")
            })
    }
    const openDial = () => {
        if (Platform.OS === "android") {
            Linking.openURL(`tel:${phone}`)
        } else {
            Linking.openURL(`telprompt:${phone}`)
        }
    }
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={["#0033ff", "#6bc1ff"]}
                style={{ height: "20%" }}
            />
            <View style={{ alignItems: "center" }}>
                <Image
                    style={{ width: 140, height: 140, borderRadius: 140 / 2, marginTop: -50 }}
                    source={{ uri: picture }}
                />
            </View>
            <View style={{ alignItems: "center", margin: 15 }}>
                <Title>{nameCompany}</Title>
                <Text style={{ fontSize: 15 }}>Código da Vaga:{vacancyCode}</Text>
            </View>
            <Card style={styles.mycard} onPress={() => {
                Linking.openURL(`mailto:${email}`)
            }}>
                <View style={styles.cardContent}>
                    <MaterialIcons nameCompany="email" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{email}</Text>
                </View>
            </Card>
            <Card style={styles.mycard} onPress={() => openDial()}>
                <View style={styles.cardContent}>
                    <Entypo nameCompany="phone" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{phone}</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <MaterialIcons nameCompany="attach-money" size={32} color="#006aff" />
                    <Text style={styles.mytext}>{description}</Text>
                </View>
            </Card>
            <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
                <Button
                    icon="account-edit"
                    mode="contained"
                    theme={theme}
                    onPress={() => {
                        props.navigation.navigate("Create",
                            { _id, nameCompany, picture, phone, description, email, vacancyCode }
                        )
                    }}>
                    Editar
                </Button>
                <Button
                    icon="delete"
                    mode="contained"
                    theme={theme}
                    onPress={() => deleteCadastroVagas()}>
                    Deletar
                </Button>
            </View>


        </View>
    )
}

const theme = {
    colors: {
        primary: "#2667ff"
    }
}


const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    mycard: {
        margin: 3
    },
    cardContent: {
        flexDirection: "row",
        padding: 8
    },
    mytext: {
        fontSize: 18,
        marginTop: 3,
        marginLeft: 5
    }
})
export default Vagas