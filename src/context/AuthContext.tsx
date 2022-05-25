import React,{ createContext, useEffect, useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SafeAreaView, StyleSheet, TextInput, View, Alert, TouchableOpacity, Text } from "react-native";

import cafeApi from "../api/cafeApi";
import { LoginData, LoginResponse, RegisterData, Usuario } from "../interfaces/appinterfaces";
import { authReducer, AuthState } from "./AuthReducer";

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
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
       const resp = await cafeApi.get('/auth');
       if(resp.status !== 200){
          return dispatch({type:'notAuthenticated'});
       }

       await AsyncStorage.setItem('token', resp.data.token)

       dispatch({
           type: 'signUp',
           payload:{
               token: resp.data.token,
               user: resp.data.usuario
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

       
            await fetch('https://www.deportes.controlsas.com/apiPlooy/usuarios/login.php',
            {
              method:'POST',
              headers:{
                'Accept': 'application/json',
                'content-Type': 'application/json'
         
              },
              body: JSON.stringify({"email":correo, "password" : password})
            }).then(res => res.json())
            .then(resData => {

             Alert.alert(resData.message)
             console.log(resData);
             
            
            });
            
           }catch (error) {
            dispatch({type: 'addError',
            payload: error.response.data.msg || 'Información incorrecta'})
           }
    };

    const signUp = async ({nombre, correo, password, tipousuario}: RegisterData) => {

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