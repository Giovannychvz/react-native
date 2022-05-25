import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { Background2 } from '../components/Background2';

import { WhiteLogo3 } from '../components/WhiteLogo3'
import { WhiteLogo4 } from '../components/WhiteLogo4'
import { WhiteLogoColombia } from '../components/WhiteLogoColombia';
import { WhiteLogoEspanol } from '../components/WhiteLogoEspanol';
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

const [value, setValue] = React.useState('');

  return (
    <>
    
    <Background2 />
    
    <WhiteLogo3 />

    
    
         
        <View style={loginStyles.formContainer}>

        

        <View style={loginStyles.button_select1}>
        
    <Text style={loginStyles.title_select}>SELECCIONA EL PAIS PARA TU EMPRESA</Text>
    
    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
    <RadioButton.Item  label="COLOMBIA" value="first"  />
     <RadioButton.Item label="ECUADOR" value="second" disabled   />
     <RadioButton.Item label="BRASIL" value="second" disabled   />
     <RadioButton.Item label="FRANCIA" value="second" disabled   />
           
    </RadioButton.Group>
    </View>


    {value === "first" && (
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button_green2}
             
          onPress={() => navigation.replace('Pagina4Screen')}

             
          >
            <WhiteLogoColombia />  
          <Text style={loginStyles.buttonText}>CLIC</Text> 
          </TouchableOpacity>

        </View>

)}
  

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
