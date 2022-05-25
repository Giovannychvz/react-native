import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

import RNPickerSelect, { defaultStyles }  from 'react-native-picker-select';

import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background2 } from '../components/Background2'
import { WhiteLogo2 } from '../components/WhiteLogo2'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { loginStyles } from '../theme/LoginTheme'

//interface Props extends StackScreenProps<any, any>{}

export const Pagina6Screen = ({navigation}) => {

  const {signUp, errorMessage, removeError} = useContext(AuthContext);

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const placeholder = {
    label: 'Genero...',
    value: null,
    color: '#9EA0A4'
    
  };


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

  return (
    <>
    
    <Background2 />
    
    <WhiteLogo2 />
         
        <View style={loginStyles.formContainer3}>
            
               

        <Text style={loginStyles.title2}>Registro: Persona Natural</Text>
        <Text style={loginStyles.label2}>Fecha de nacimiento</Text>
      

        </View>


      
        <View style={styles.row}>

        <View style={[styles.box, styles.two]}>

        <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button2F}
             onPress={() => setOpen(true)}
          >
              <Text style={loginStyles.buttonTextF}>AGREGAR FECHA</Text>
          </TouchableOpacity>
        
       
       
        <DatePicker
         mode="date"
         title="FECHA DE NACIMIENTO"
         confirmText="Agregar"
         cancelText="Cancelar"
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      
      {/*  <TextInput
        placeholder="Día"
        placeholderTextColor="gray"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
      /> */}

         </View>
            {/*<View style={[styles.box, styles.box2]}>


           
        <TextInput
        placeholder="Mes"
        placeholderTextColor="gray"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
        />
      </View> */}


            <View style={[styles.box, styles.box3]}>
     
<TextInput
placeholder="14-05-1990"
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


          <View style={loginStyles.formContainer4}>
            
        <Text style={loginStyles.label2}>Nacionalidad y genero</Text>

        </View>




          <View style={styles.row}>

        <View style={[styles.box, styles.two]}>
        
        <TextInput
        placeholder="Nacionalidad"
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


           
        {/*<TextInput
        placeholder="Genero"
        placeholderTextColor="gray"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
        /> */}


<RNPickerSelect  
            onValueChange={(value) => console.log(value)}
            placeholder={placeholder}
            
            items={[
                { label: 'Masculino', value: 'Masculino' },
                { label: 'Femenino', value: 'Femenino' },
                { label: 'Otro', value: 'Otro' },
            ]}
            style={{
              inputAndroid: {
                backgroundColor: 'white',
                
                
              }}}
        />


            </View>

           
          </View>



          <View style={loginStyles.formContainer4}>
            
            <Text style={loginStyles.label2}>Datos del documento</Text>
    
            </View>


          <View style={styles.row}>

        <View style={[styles.box_1, styles.two]}>
        
        <TextInput
        placeholder="Nacionalidad"
        placeholderTextColor="gray"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
        />

         </View>
            <View style={[styles.box_1, styles.box2]}>


           
        <TextInput
        placeholder="Genero"
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

          <View style={styles.row}>

        <View style={[styles.box_1, styles.box2]}>
        
        <TextInput
        placeholder="Adjuntar RUT"
        editable={false}
        placeholderTextColor="gray"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
        />

         </View>

         <View style={[styles.box_1, styles.two]}>
         <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button3}
            // onPress={onRegister}
          >

<Image 
         source={require('../assets/adjuntar.png')}
          style={{
              marginLeft:-15,
              width:45,
              height:45,
          }}
        />
              <Text style={loginStyles.buttonText2}>Cargar</Text>
          </TouchableOpacity>
        
            </View>
            
 
          </View>



          <View style={styles.row}>

        <View style={[styles.box_1, styles.box2]}>
        
        <TextInput
        placeholder="Adjuntar Documento"
        editable={false}
        placeholderTextColor="gray"
        style={[loginStyles.inputField,
        (Platform.OS == 'ios') && loginStyles.inputFieldIOS
        ]}
        selectionColor="orange"
        autoCapitalize='none'
        autoCorrect={false}
        />

         </View>

         <View style={[styles.box_1, styles.two]}>
         <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button3}
            // onPress={onRegister}
          >

<Image 
         source={require('../assets/adjuntar.png')}
          style={{
              marginLeft:-15,
              width:45,
              height:45,
          }}
        />
              <Text style={loginStyles.buttonText2}>Cargar</Text>
          </TouchableOpacity>
        
            </View>
            
 
          </View>

          
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyles.button2}
             onPress={() => navigation.replace('Pagina7Screen')}
          >
              <Text style={loginStyles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>


        
         
        <View style={loginStyles.buttonContainer4}>
        <TouchableOpacity
          onPress={() => navigation.replace('Pagina5Screen')}
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
