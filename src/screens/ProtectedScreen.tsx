import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'


interface Props extends StackScreenProps<any, any>{}

export const ProtectedScreen = ({navigation}: Props) => {

  const {user, token} = useContext(AuthContext);

  const {email, password, name, onChange} = useForm({
    email:'',
    password:'',
    name:'',
  
});


  return (
    <>
    
         
        <View style={loginStyles.formContainer}>
            
        
        <Text>BIENVENIDO 
         Tipo usuario: {JSON.stringify(user.tipo_usuario, null, 50)}

        </Text>
           

        </View>

       

    </>
  )
}
