import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

interface Props extends StackScreenProps<any, any>{}

export const RegisterScreen = ({navigation}: Props) => {

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
         
        <View style={loginStyles.formContainer}>
            
        
   
        

        <Text style={loginStyles.title2}>Registro: Persona Natural</Text>

        <Text style={loginStyles.label}>Nombre Comercial:</Text>
        <TextInput
        placeholder="Ingrese el nombre"
        placeholderTextColor="gray"
        //keyboardType="email-address"
        //underlineColorAndroid="black"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        onChangeText={(value) => onChange(value,'name')}
        value={name}
        onSubmitEditing={onRegister}
        autoCapitalize='words'
        autoCorrect={false}
        />


        <Text style={loginStyles.label}>Email Asociado a la Cuenta – Recuperar Contraseña:</Text>
        <TextInput
        placeholder="Ingrese su email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        //underlineColorAndroid="black"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        onChangeText={(value) => onChange(value,'email')}
        value={email}

        onSubmitEditing={onRegister}

        autoCapitalize='none'
        autoCorrect={false}
        />

       <Text style={loginStyles.label}>Contraseña:</Text>
        <TextInput
        placeholder="******"
        placeholderTextColor="gray"
        secureTextEntry
        //underlineColorAndroid="black"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
         
        onChangeText={(value) => onChange(value,'password')}
        value={password}
        onSubmitEditing={onRegister}

        autoCapitalize='none'
        autoCorrect={false}
        />


        




        

       {/* <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button}
             onPress={onRegister}
          >
              <Text style={loginStyles.buttonText}>Registrar</Text>
          </TouchableOpacity>
      </View> */}

<View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button2}
             onPress={() => navigation.replace('Pagina8ssScreen')}
          >
              <Text style={loginStyles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>

        
         
        <View style={loginStyles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina7Screen')}
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
