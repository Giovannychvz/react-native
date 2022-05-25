import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo3 } from '../components/WhiteLogo3'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'
import { RadioButton } from 'react-native-paper';



interface Props extends StackScreenProps<any, any>{}

export const Pagina3Screen = ({navigation}: Props) => {

  const {email, password, name, onChange} = useForm({
    email:'',
    password:'',
    name:''
});

const onRegister = () =>{
    console.log({name, email, password});
    Keyboard.dismiss();
}

const [value, setValue] = React.useState('');



  return (

        <>

    
    
    <Background2 />
    
    <WhiteLogo3 />
         
        <View style={loginStyles.formContainer}>
            
        
   
        

        <Text style={loginStyles.title3}>

        Los Datos Suministrados en este 
Formulario, No Serán Públicos; 
Serán Utilizados Únicamente 
Como Datos Asociados A su 
Cuenta PLOOY 
</Text>
<Text></Text>



<View style={loginStyles.button_select}>
    <Text style={loginStyles.title_select}>Tipo de empresa</Text>

    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item label="Persona Natural" value="first" />
      <RadioButton.Item label="Persona Juridica" value="second"
                  />
           
    </RadioButton.Group>
    </View>

   
    {value === "first" && (
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button_green}
             
          onPress={() => navigation.replace('Pagina4Screen')}

             
          >
              <Text style={loginStyles.buttonText}>Guardar</Text>
          </TouchableOpacity>

        </View>

)}


{value === "second" && (
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button_green}
             
          onPress={() => navigation.replace('Pagina4jScreen')}

             
          >
              <Text style={loginStyles.buttonText}>Guardar</Text>
          </TouchableOpacity>

        </View>

)}
       
         
    
         
        <View style={loginStyles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina2Screen')}
          activeOpacity={0.8}
          style={loginStyles.button_black_3}
        >
          <Text style={loginStyles.buttonText}>X</Text>

        </TouchableOpacity>
        </View>

        

        </View>

       

    </>
  )
}
