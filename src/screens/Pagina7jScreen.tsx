import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

import { PaperSelect } from 'react-native-paper-select';

interface Props extends StackScreenProps<any, any>{}

export const Pagina7jScreen = ({navigation}: Props) => {

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


  return (
    <>
    
    <Background2 />
    
    <WhiteLogo2 />
         
        <View style={loginStyles.formContainer2j}>
            
               

        <Text style={loginStyles.title2}>Registro: Persona Jurídica</Text>

              

        </View>

        

        <View style={{ marginTop:10}}>
        <TextInput
        placeholder="Email"
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
        placeholder=""
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
        placeholder="# Celular"
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


          <View style={styles.rowj2}>

        <View style={[styles.box, styles.two]}>

        
        
        <TextInput
        placeholder=""
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
        placeholder="# Otro numero"
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

 





         {/* 
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button2}
             onPress={() => navigation.replace('Pagina7jScreen')}
          >
              <Text style={loginStyles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
    */}

        
         
        <View style={loginStyles.buttonContainer3j}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina6jScreen')}
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
    marginBottom: 10,
    marginTop:10
    
  },

  rowj2: {
    //flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop:-8
    
  },
  rowj: {
    //flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop:10
  },
  box: {
    flex: 2,
    height: 60,
    right: 2
  },
  box_1: {
    flex: 2,
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
