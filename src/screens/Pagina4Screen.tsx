import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

import { PaperSelect } from 'react-native-paper-select';

interface Props extends StackScreenProps<any, any>{}

export const Pagina4Screen = ({navigation}: Props) => {

  const {signUp, errorMessage, removeError} = useContext(AuthContext);


 

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
},[errorMessage]);


const [colors, setColors] = useState({
  value: '',
  list: [
    { _id: '1', value: 'BLUE' },
    { _id: '2', value: 'RED' },
    { _id: '3', value: 'GREEN' },
    { _id: '4', value: 'YELLOW' },
    { _id: '5', value: 'BROWN' },
    { _id: '6', value: 'BLACK' },
    { _id: '7', value: 'WHITE' },
    { _id: '8', value: 'CYAN' },
  ],
  selectedList: [],
  error: '',
});

  return (
    <>
    
    <Background2 />
    
    <WhiteLogo2 />
         
        <View style={loginStyles.formContainer2}>
            
               

        <Text style={loginStyles.title2}>Registro: Persona Natural</Text>
        <Text style={loginStyles.label2}>Nombre Comercial de Tu Negocio - Empresa:</Text>
        <TextInput
        placeholder="Nombre comercial"
        placeholderTextColor="gray"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
       
        autoCapitalize='words'
        autoCorrect={false}
        />

        

        </View>

        <View style={styles.row}>

        <View style={[styles.box, styles.two]}>

        
        
        <TextInput
        placeholder="País"
        placeholderTextColor="gray"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
        />
        
        
         </View>
            <View style={[styles.box, styles.box2]}>


           
        <TextInput
        placeholder="Dpto."
        placeholderTextColor="gray"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
        />
            </View>
            <View style={[styles.box, styles.box3]}>

        
        <TextInput
        placeholder="Ciudad"
        placeholderTextColor="gray"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
        />

            </View>
          </View>

          
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button2}
             onPress={() => navigation.replace('Pagina5Screen')}
          >
              <Text style={loginStyles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>


        
         
        <View style={loginStyles.buttonContainer2}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina3Screen')}
          activeOpacity={0.8}
          style={loginStyles.button_black_2}
        >
          <Text style={loginStyles.buttonText}>X</Text>

        </TouchableOpacity>
        </View>

       

    </>
  )
}

const styles = StyleSheet.create({
  row: {
    //flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  box: {
    flex: 1,
    height: 60,
    right: 2
  },
  box2: {
    left: 2
  },
  box3: {
    left: 6
  },
  two: {
    flex: 1
   
  }
});
