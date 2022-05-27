import React,{ createContext, useEffect, useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SafeAreaView, StyleSheet, TextInput, View, Alert, TouchableOpacity, Text } from "react-native";

import cafeApi from "../api/cafeApi";
import { LoginData, LoginResponse, RegisterData, Usuarios } from "../interfaces/appinterfaces";
import { authReducer, AuthState } from "./AuthReducer";

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuarios | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: (RegisterData: RegisterData) => void;
    signIn: (loginData : LoginData) => void;
    logOut: () => void;
    removeError: () => void;

}

const authInicialState: AuthState = {
    status:'checking',
    token: null,
    user: null,
    errorMessage:''


}


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) =>{

    const[state, dispatch] = useReducer(authReducer,authInicialState);

    useEffect(() =>{
        checkToken();
    }, [])

    const checkToken = async () =>{
       const token = await AsyncStorage.getItem('token');

       //No token, no autenticado
       if (!token) return dispatch({ type:'notAuthenticated'});
    
       //hay token
       const resp = await cafeApi.get('/usuarios/middlewares/Auth.php');
       if(resp.status !== 200){
          return dispatch({type:'notAuthenticated'});
       }

       await AsyncStorage.setItem('token', resp.data.token)

       dispatch({
           type: 'signUp',
           payload:{
               token: resp.data.token,
               user: resp.data.usuarios
           }
       })

    }


   const signIn = async({correo, password}: LoginData) => {
       
        try {

         
      /*   const {data} = await cafeApi.post<LoginResponse>('/auth/login',{correo,password});
          dispatch({
              type: 'signUp',
              payload: {
                  token: data.token,
                  user: data.usuario
              }
          });

          await AsyncStorage.setItem('token', data.token);
          
        } catch (error) {
          dispatch({type: 'addError',
                     payload: error.response.data.msg || 'Información incorrecta'})
        }

        */


        


        


    await  fetch('https://www.miweb.com/apiPlooy/usuarios/login.php',
    {
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'content-Type': 'application/json'
 
      },
      body: JSON.stringify({"email":correo, "password" : password})
    }).then(res => res.json())
    .then(resData => {
       if(resData.message == "Ha iniciado sesión correctamente.") {

        dispatch({
            type: 'signUp',
            payload: {
                token: resData.token,
                user: resData.usuarios
            }
            
        });      
        
       }else{
        Alert.alert(resData.message)
       }
       
    });

     

            
           }catch (error) {
            dispatch({type: 'addError',
            payload: error.response.data.msg || 'Información incorrecta'})
           }
    };


   /* const signUp = async ({nombre, correo, password, tipousuario}: RegisterData) => {

        try {

            const {data} = await cafeApi.post<LoginResponse>('/usuarios',{correo,password,nombre,tipousuario});
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            });
  
            await AsyncStorage.setItem('token', data.token);
            
          } catch (error) {
            dispatch({type: 'addError',
                       payload: error.response.data.errors[0].msg || 'Revise la información'})
          }
    };*/


    


    const signUp = async ({name, email, password, tipo_usuario}: RegisterData) => {

        try { /*

            const {data} = await cafeApi.post<LoginResponse>('/usuarios/register.php',{name,email,password,tipo_usuario});
            
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            });
  
            await AsyncStorage.setItem('token', data.token);
           
            */


            await  fetch('https://www.miweb.com/apiPlooy/usuarios/register.php',
    {
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'content-Type': 'application/json'
 
      },
      body: JSON.stringify({"email":email, "password" : password, "name" : name,  "tipo_usuario" : tipo_usuario})
    }).then(res => res.json())
    .then(resData => {
       if(resData.message == "Se ha registrado exitosamente.") {

        dispatch({
            type: 'signUp',
            payload: {
                token: resData.token,
                user: resData.usuarios
            }
            
        });  
        
        Alert.alert(resData.message)
       }else{
        Alert.alert(resData.message)
       }
      
    
    });



          } catch (error) {
            dispatch({type: 'addError',
                       payload: error.response.data.errors[0].msg || 'Revise la información'})
          }
    };



    const logOut = async () => {
       await AsyncStorage.removeItem('token');
       dispatch({type:'logout'});
    };

    const removeError = () => {

     dispatch({type: 'removeError'});

    };

    return(
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
        }}>
           {children}
        </AuthContext.Provider>
    )

}
