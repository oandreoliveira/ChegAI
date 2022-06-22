import { StyleSheet } from 'react-native';
import { and } from 'react-native-reanimated';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: 'black'
    },
    header:{
        backgroundColor: '#6060BF00',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop:5,
        flex:1

    },
    buttonHeader:{
        //marginTop:20,
        //marginTop: 1,
       // alignSelf: 'flex-end',
        //paddingVertical: 1,
       // color:  "white"
    },

    linha1: {
        flex: 1, 
        //backgroundColor: 'black'
    },
    containerLogo: {
        flex: 5,
       // backgroundColor: '#FFB578',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: { flex: 3 },
    containerImagem: {
        flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    imagem: {
        width: 300, height: 300, resizeMode: 'contain'
    },
    button:{
        // position: 'absolute',
         backgroundColor: '#6060BF00',
         borderRadius: 100, // estava 7 quadrado
         borderColor: '#FFB578',
        // borderLeftColor: '#FFB578',
         //borderRightColor:'#2667FF',
         //borderEndColor: 'green',
         borderWidth: 1, // 5 ficou legal perguntar
         paddingVertical: 2,
         width: '80%',
         alignSelf: 'center',
         //bottom: '5%',
         alignItems: 'center',
         justifyContent: 'center',
         //marginBottom: 20,
         margin: 10
     },
     buttonText:{
        fontSize: 15,
         color: '#F2F2f2',
         //fontWeight: 'bold'
         
     },
     buttonCadastro:{
        fontSize: 15,
         color: '#F2F2f2',
         //fontWeight: 'bold'
     },
    
    buttonEmpresa:{
        fontSize: 15,
        color: '#F2F2f2',
        //fontWeight: 'bold'
    },
    // Styles tela de Login======================================================
    containerHeader:{
        marginTop:'25%',  //54%
        marginBottom:'25%', //8%
        paddingStart:'5%'
    },
    message:{
        fontSize: 30,
        fontWeight: 'normal',
        color: '#2667FF',
        
           
    },
    messageDegrade:{
        fontSize: 30,
        fontWeight: 'normal',
        color: '#F2F2f2',

    },
    containerFormLogin:{

        //backgroundColor: '#FFB578',
        flex: 1,
        //borderTopLeftRadius: 25,
       // borderTopRightRadius: 25,
        paddingStart:'5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
        color: '#F2F2f2',
    },
    imput:{
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        height: 25,
        marginBottom:40, //12
        fontSize: 16,
        borderColor: '#FFB578',
        width: '80%',
        justifyContent: 'center',
        //borderLeftColor: 'white',
        //borderRightColor:'white',
        alignSelf: 'center'
        
    },
    buttonLogin:{
                // position: 'absolute',
         backgroundColor: '#6060BF00',
         borderRadius: 100, // estava 7 quadrado
         borderColor: '#FFB578',
        // borderLeftColor: '#FFB578',
         //borderRightColor:'#2667FF',
         //borderEndColor: 'green',
         borderWidth: 1, // 5 ficou legal perguntar
         paddingVertical: 2,
         width: '80%',
         alignSelf: 'center',
         //bottom: '5%',
         alignItems: 'center',
         justifyContent: 'center',
         //marginBottom: 20,
         margin: 10,
         marginTop: 100,


    },
    buttonTextLogin:{
        color: '#FFF',
        fontSize: 15,
        //fontWeight: 'bold'
    },
    buttonPasswordLogin:{
        marginTop:-20,
        //marginTop: 1,
        alignSelf: 'flex-end',
        paddingVertical: 1,
       // color:  "white"
    },
    passwordTextLogin:{
        color: '#F2F2f2',
        
    },
    // Styles tela de Recuperar======================================================
    buttonTextEnviar:{
        color: '#455A64',
        fontSize: 15,
     //fontWeight: 'bold'
    },

    container2: {
       flex: 1,
       backgroundColor: '#EFEFEF'
    },
    containerSuperior: {
       // flex: 3,
       // backgroundColor: '#FFB578',
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    imagemSuperior: {
        //width: 400, 
        //height: 300,
        backgroundColor: '#6060BF00',
        width: '100%', 
        height: 300,
        //resizeMode: 'contain'
    },
    containerImagemSuperior: {
        //flex: 1,
    // flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    containerHeaderRecuperar:{
        marginTop:'15%',  //54% //25%
        marginBottom:'25%', //8%
        paddingStart:'5%' // 5%
    },
    containerFormRecuperar:{

       

        //backgroundColor: '#FFB578',
       // flex: 1,
        //borderTopLeftRadius: 25,
       // borderTopRightRadius: 25,
        paddingStart:'5%',
        paddingEnd: '5%',
        paddingVertical: 40,
        
    },
    imputRecuperar:{
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        height: 25,
        marginBottom:40, //12
        fontSize: 16,
        borderColor: '#2667FF', //'#FFB578'
        width: '80%',
        justifyContent: 'center',
        //borderLeftColor: 'white',
        //borderRightColor:'white',
        alignSelf: 'center'
        
    },
    buttonRecuperar:{
        // position: 'absolute',
        backgroundColor: '#6060BF00',
        borderRadius: 100, // estava 7 quadrado
        borderColor: '#2667FF', //'#FFB578'
        // borderLeftColor: '#FFB578',
        //borderRightColor:'#2667FF',
        //borderEndColor: 'green',
        borderWidth: 1, // 5 ficou legal perguntar
        paddingVertical: 2,
        width: '80%',
        alignSelf: 'center',
        //bottom: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        //marginBottom: 20,
        margin: 10,
        marginTop: 40,
// Style Tela recuperar senha com email ============================

},
messageRecuperar:{
    fontSize: 17,
    //fontWeight: 'normal',
    color: '#585858',
    alignItems: 'center',
    justifyContent: 'center',
    //fontStyle: 'Montserrat'
    //paddingVertical: 10,
    //margin: 10,
    paddingStart:'10%',
    paddingEnd: '5%',
    
       
},
imputRecuperarEmail:{
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    height: 60,
    width: 60,
    marginBottom:20, //12
    fontSize: 40,
    borderColor: '#2667FF', //'#FFB578'
    justifyContent:'center',
    borderRadius: 5,
    alignSelf: 'center',
    paddingLeft: 2,
    
    
    
    
    
},
containerFormRecuperarEmail:{

       

    //backgroundColor: '#FFB578',
   //flex: 1,
    //borderTopLeftRadius: 25,
   // borderTopRightRadius: 25,
    //paddingStart:'5%',
    //paddingEnd: '5%',
   // paddingLeft: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    
     
    //paddingHorizontal: 50,
    paddingVertical: 30,
    
    
    
    
},
buttonRecuperarEmail:{
    // position: 'absolute',
    backgroundColor: '#6060BF00',
    borderRadius: 100, // estava 7 quadrado
    borderColor: '#2667FF', //'#FFB578'
    // borderLeftColor: '#FFB578',
    //borderRightColor:'#2667FF',
    //borderEndColor: 'green',
    borderWidth: 1, // 5 ficou legal perguntar
    paddingVertical: 2,
    width: '80%',
    alignSelf: 'center',
    //bottom: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    //marginBottom: 20,
    margin: 10,
    marginTop: 60,
},
messageRecuperarEmail:{
    fontSize: 17,
    //fontWeight: 'normal',
    color: '#585858',
    alignItems: 'center',
    justifyContent: 'center',
    //fontStyle: 'Montserrat'
    //paddingVertical: 10,
    //margin: 10,
    paddingStart:'5%',
    paddingEnd: '5%',
},
buttonTextReenviar:{
    color: '#585858',
    fontSize: 15,
    //fontWeight: 'bold'
},
buttonReenviar:{
    //marginBottom:10,
    marginTop: -40,
    alignSelf: 'center',
    paddingVertical: 0,
   // color:  "white"
},
    //style tela NovaSenhaOK ==============================
    imagemSuperiorSenhaOk: {
        //width: 400, 
        //height: 300,
        //backgroundColor: 'transparent',
        width: '100%', 
        height: 200,
        
        //resizeMode: 'contain',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    containerFormSenhaOk:{

       

        backgroundColor: '#F2F2f2',
        flex: 1,

        //paddingStart:'25%',
        //paddingEnd: '5%',
        marginLeft:'10%',
        marginRight:'10%',
        marginBottom: '80%',
        marginTop:'-25%',
        borderRadius: 10,
       // elevation: '18',
        //shadowColor:'# 171717', 
        //shadowOpacity: 2,
       // shadowRadius: 3,
        //shadowOffset: {largura:-2, altura: 4}, shadowOpa cidade: 0,2, shadowRadius: 3,},});,
        //borderTopLeftRadius: 25,
        //borderTopRightRadius: 25,

        //paddingVertical: -20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
    },    
    messageNovaSenha:{
        fontSize: 17,
        //fontWeight: 'normal',
        color: '#585858',
        alignItems: 'center',
        justifyContent: 'center',
        //fontStyle: 'Montserrat'
        //paddingVertical: 15,
        marginTop: 20,
        paddingStart:'5%',
        paddingEnd: '5%',

    },

});