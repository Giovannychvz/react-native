import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


import { WhiteLogo3 } from '../components/WhiteLogo3'
import { WhiteLogo4 } from '../components/WhiteLogo4'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

interface Props extends StackScreenProps<any, any>{}

export const ProtectedScreen = ({navigation}: Props) => {

  const {user, token, logOut} = useContext(AuthContext);

  //const {tipousuario} = user;

  const {email, password, name, onChange} = useForm({
    email:'',
    password:'',
    name:'',
  
});

const onRegister = () =>{
    console.log({name, email, password});
    Keyboard.dismiss();
}
  return (
    <>
    
    
    
    <WhiteLogo3 />
         
        <View style={loginStyles.formContainer}>
            
        
        <Text style={loginStyles.title3}>{"\n"}{"\n"}{"\n"}BIENVENIDO 
        {/* 
        {"\n"}{"\n"} Tipo usuario: {JSON.stringify(user.tipousuario, null, 50)}{"\n"} */ }
       {"\n"}{"\n"} Tipo usuario: EMPRESA{"\n"}
        Su cuenta se en cuentra en proceso de validación. {"\n"}
        API CONECTADA CORRECTAMENTE
        </Text>
           
           

        <WhiteLogo4 />
         
        <Text>{"\n"}</Text>
        <Button 
           title="Cerrar sesión"
           color="red"
           onPress={logOut}
        />

        </View>

       

    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  title:{
    fontSize: 20,
    marginBottom:20
  }
})
