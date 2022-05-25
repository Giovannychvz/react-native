import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

import  ImageScreen  from '../screens/ImageScreen'

//nterface Props extends StackScreenProps<any, any>{}

export const Pagina8ssScreen = ({navigation}) => {

  const {signUp, errorMessage, removeError} = useContext(AuthContext);


  const {email, password, name, tipousuario,  onChange} = useForm({
    email:'',
    password:'',
    name:'',
    tipousuario:'empresa'
});



useEffect(() => {
  if(errorMessage.length === 0) return;

  Alert.alert('Registro incorrecto',
               errorMessage,
               [
                 {
                   text: 'Ok',
                   onPress: removeError
                 }
               ]
               );
},[errorMessage])

const onRegister = () =>{
    console.log({name, email, password, tipousuario});
    Keyboard.dismiss();
    signUp({
        nombre: name,
        correo: email,
        password: password,
        tipousuario: tipousuario
    })
}
  return (
    <>
    
    <Background2 />
    
    <WhiteLogo2 />
         
        <View style={loginStyles.formContainerCamara}>
            
        
        
          <ImageScreen /> 
      


        

   <View style={loginStyles.buttonContainerCamara}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button2}
             onPress={() => navigation.replace('RegisterScreen')}
          >
              <Text style={loginStyles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>

        
         
        <View style={loginStyles.buttonCamara}>
        <TouchableOpacity
          onPress={() => navigation.replace('RegisterScreen')}
          activeOpacity={0.8}
          style={loginStyles.button_black_2}
        >
          <Text style={loginStyles.buttonText}>X</Text>

        </TouchableOpacity>
        </View>

        

        </View>

        

       

    </>
  )
}
