import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

interface Props extends StackScreenProps<any, any>{

}

export const LoginScreen = ({navigation}: Props) => {

  const {signIn, errorMessage, removeError} = useContext (AuthContext) ; 


    const {email, password, onChange} = useForm({
        email:'',
        password:''
    });

    useEffect(() => {
         if(errorMessage.length === 0) return;

         Alert.alert('Login incorrecto',
                      errorMessage,
                      [
                        {
                          text: 'Ok',
                          onPress: removeError
                        }
                      ]
                      );
    },[errorMessage])

    const onLogin = () =>{
        console.log({email, password});
        Keyboard.dismiss();
        signIn({correo: email, password: password});
    }

  return (
    <>
        <Background />

        <KeyboardAvoidingView
         style={{flex:1}}
         behavior={(Platform.OS === 'ios') ? 'padding': 'height'}
        >

        <View style={loginStyles.formContainer2b}>
            
              
   
        <WhiteLogo />

        <Text style={loginStyles.title}>EMPRESAS</Text>

        <Text style={loginStyles.label}>Email:</Text>
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

        onSubmitEditing={onLogin}

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
        onSubmitEditing={onLogin}

        autoCapitalize='none'
        autoCorrect={false}
        />

        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button}
             onPress={onLogin}
          >
              <Text style={loginStyles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>


        <View style={loginStyles.newUserContainer}>
         <TouchableOpacity
           activeOpacity={0.8}
           style={loginStyles.button_register}
           onPress={()=>navigation.replace('Pagina2Screen')}
         >
             <Text style={loginStyles.buttonText}>Registrar</Text>

         </TouchableOpacity>
        </View>

        <View style={loginStyles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.replace('LoginScreen0')}
          activeOpacity={0.8}
          style={loginStyles.button_black_3b}
        >
          <Text style={loginStyles.buttonText}>X</Text>

        </TouchableOpacity>
        </View>
        

        </View>

        </KeyboardAvoidingView>

    </>
  )
}
