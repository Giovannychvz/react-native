import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

import { RadioButton } from 'react-native-paper';
import { WhiteLogoEspanol } from '../components/WhiteLogoEspanol'
import { WhiteLogo_1 } from '../components/WhiteLogo_1'

interface Props extends StackScreenProps<any, any>{

}

export const LoginScreen0 = ({navigation}: Props) => {

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


    const [value, setValue] = React.useState('');

  return (
    <>
        <Background />

        <KeyboardAvoidingView
         style={{flex:1}}
         behavior={(Platform.OS === 'ios') ? 'padding': 'height'}
        >

        <View style={loginStyles.formContainer}>
            
              
   
        <WhiteLogo_1 />


        <View style={loginStyles.button_select1}>
        
        <Text style={loginStyles.title_select}>IDIOMA / LANGUAGE</Text>
        
        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <RadioButton.Item  label="ESPAÑOL" value="first"  />
         <RadioButton.Item label="INGLES" value="second" disabled   />
         <RadioButton.Item label="PORTUGÚES" value="second" disabled   />
         <RadioButton.Item label="ITALIANO" value="second" disabled   />
               
        </RadioButton.Group>
        </View>
    

        {value === "first" && (
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button_green2}
             
          onPress={() => navigation.replace('LoginScreen')}

             
          >
            <WhiteLogoEspanol />  
          <Text style={loginStyles.buttonText}>CLIC</Text> 
          </TouchableOpacity>

        </View>

)}



       


       
        </View>

        </KeyboardAvoidingView>

    </>
  )
}
