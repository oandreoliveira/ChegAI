import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Alert,
    KeyboardAvoidingView,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateCadastroVaga = ({ navigation, route }) => {
    const getDetails = (type) => {
        if (route.params) {
            switch (type) {
                case ' nameCompany':
                    return route.params.nameCompany;
                case 'email':
                    return route.params.email;
                case 'phone':
                    return route.params.phone;
                case 'description':
                    return route.params.description;
                case 'picture':
                    return route.params.picture;
                case 'vacancyCode':
                    return route.params.vacancyCode;
            }
        }
        return '';
    };

    const [nameCompany, setNameCompany] = useState(getDetails('nameCompany'));
    const [email, setEmail] = useState(getDetails('email'));
    const [phone, setPhone] = useState(getDetails('phone'));
    const [description, setDescription] = useState(getDetails('description'));
    const [vacancyCode, setVacancyCode] = useState(getDetails('vacancyCode'));
    const [picture, setPicture] = useState(getDetails('picture'));
    const [modal, setModal] = useState(false);
    const [enableshift, setenableShift] = useState(false);

    const submitData = () => {
        fetch('http://192.168.0.38:3000/cadastro-de-vaga', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nameCompany,
                email,
                phone,
                description,
                picture,
                vacancyCode,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                Alert.alert(`${data.nameCompany} foi cadastrado com sucesso!`);
                navigation.navigate('Home1');
            })
            .catch((err) => {
                Alert.alert('alguma coisas deu errado' + err);
            });
    };

    const updateDetails = () => {
        fetch('http://192.168.0.38:3000/atualizar', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: route.params._id,
                nameCompany,
                email,
                phone,
                description,
                picture,
                vacancyCode,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                Alert.alert(`${data.nameCompany} foi editado com sucesso!`);
                navigation.navigate('Home1');
            })
            .catch((err) => {
                Alert.alert('alguma coisa deu errado');
            });
    };

    const pickFromGallery = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5,
            });
            if (!data.cancelled) {
                let newfile = {
                    uri: data.uri,
                    type: `test/${data.uri.split('.')[1]}`,
                    name: `test.${data.uri.split('.')[1]}`,
                };
                handleUpload(newfile);
            }
        } else {
            Alert.alert('você precisa de permissão para isso');
        }
    };
    const pickFromCamera = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA);
        if (granted) {
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5,
            });
            if (!data.cancelled) {
                let newfile = {
                    uri: data.uri,
                    type: `test/${data.uri.split('.')[1]}`,
                    name: `test.${data.uri.split('.')[1]}`,
                };
                handleUpload(newfile);
            }
        } else {
            Alert.alert('você precisa de permissão para isso');
        }
    };

    const handleUpload = (image) => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'employeeApp');
        data.append('cloud_name', 'dxnoiuj66');

        fetch('https://api.cloudinary.com/v1_1/dxnoiuj66/image/upload', {
            method: 'post',
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                setPicture(data.url);
                setModal(false);
            })
            .catch((err) => {
                Alert.alert('erro durante o upload');
            });
    };

    return (
        <KeyboardAvoidingView
            behavior="position"
            style={styles.root}
            enabled={enableshift}
        >
            <View>
                <TextInput
                    label="Nome da Empresa"
                    style={styles.inputStyle}
                    value={nameCompany}
                    onFocus={() => setenableShift(false)}
                    theme={theme}
                    mode="outlined"
                    onChangeText={(text) => setNameCompany(text)}
                />
                <TextInput
                    label="E-mail"
                    style={styles.inputStyle}
                    value={email}
                    theme={theme}
                    onFocus={() => setenableShift(false)}
                    mode="outlined"
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    label="Telefone"
                    style={styles.inputStyle}
                    value={phone}
                    theme={theme}
                    onFocus={() => setenableShift(false)}
                    keyboardType="number-pad"
                    mode="outlined"
                    onChangeText={(text) => setPhone(text)}
                />

                <TextInput
                    label="Descrição da Vaga"
                    style={styles.inputStyle}
                    value={description}
                    theme={theme}
                    onFocus={() => setenableShift(true)}
                    mode="outlined"
                    onChangeText={(text) => setDescription(text)}
                />
                <TextInput
                    label="Código da Vaga"
                    style={styles.inputStyle}
                    value={vacancyCode}
                    theme={theme}
                    onFocus={() => setenableShift(true)}
                    mode="outlined"
                    onChangeText={(text) => setVacancyCode(text)}
                />
                <Button
                    style={styles.inputStyle}
                    icon={picture == '' ? 'upload' : 'check'}
                    mode="contained"
                    theme={theme}
                    onPress={() => setModal(true)}
                >
                    Upload de Imagem
                </Button>
                {route.params ? (
                    <Button
                        style={styles.inputStyle}
                        icon="content-save"
                        mode="contained"
                        theme={theme}
                        onPress={() => updateDetails()}
                    >
                        Atualizar Detalhes
                    </Button>
                ) : (
                    <Button
                        style={styles.inputStyle}
                        icon="content-save"
                        mode="contained"
                        theme={theme}
                        onPress={() => submitData()}
                    >
                        Salvar
                    </Button>
                )}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal}
                    onRequestClose={() => {
                        setModal(false);
                    }}
                >
                    <View style={styles.modalView}>
                        <View style={styles.modalButtonView}>
                            <Button
                                icon="camera"
                                theme={theme}
                                mode="contained"
                                onPress={() => pickFromCamera()}
                            >
                                Câmera
                            </Button>
                            <Button
                                icon="image-area"
                                mode="contained"
                                theme={theme}
                                onPress={() => pickFromGallery()}
                            >
                                Galeria
                            </Button>
                        </View>
                        <Button theme={theme} onPress={() => setModal(false)}>
                            Cancelar
                        </Button>
                    </View>
                </Modal>
            </View>
        </KeyboardAvoidingView>
    );
};

const theme = {
    colors: {
        primary: '#006aff',
    },
};
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    inputStyle: {
        margin: 5,
    },
    modalView: {
        position: 'absolute',
        bottom: 2,
        width: '100%',
        backgroundColor: '#2667ff',
    },
    modalButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

export default CreateCadastroVaga;
