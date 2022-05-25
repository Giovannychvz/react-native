import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { ProtectedScreen } from "../screens/ProtectedScreen";
import { Pagina2Screen } from "../screens/Pagina2Screen";
import { Pagina3Screen } from "../screens/Pagina3Screen";
import { AuthContext } from "../context/AuthContext";
import { LoadingScreen } from "../screens/LoadingScreen";
import { Pagina4Screen } from "../screens/Pagina4Screen";
import { Pagina5Screen } from "../screens/Pagina5Screen";
import { Pagina6Screen } from "../screens/Pagina6Screen";
import { Pagina7Screen } from "../screens/Pagina7Screen";
import { Pagina8ssScreen } from "../screens/Pagina8ssScreen";
import { Pagina4jScreen } from "../screens/Pagina4jScreen";
import { Pagina5jScreen } from "../screens/Pagina5jScreen";
import { Pagina6jScreen } from "../screens/Pagina6jScreen";
import { Pagina7jScreen } from "../screens/Pagina7jScreen";
import { LoginScreen0 } from "../screens/LoginScreen0";

const Stack = createStackNavigator();

export const Navigator = () => {

  const {status} = useContext(AuthContext);

  if(status === 'checking') return <LoadingScreen/>

  return (
     <Stack.Navigator
     screenOptions={{
     headerShown:false,
     cardStyle:{
       backgroundColor: 'white'
     }
     }}>

{
  (status !== 'authenticated')
  ?(
    <>
      <Stack.Screen name="LoginScreen0" component={LoginScreen0} />
       <Stack.Screen name="LoginScreen" component={LoginScreen} />
       <Stack.Screen name="Pagina2Screen" component={Pagina2Screen} />
       <Stack.Screen name="Pagina3Screen" component={Pagina3Screen} />
       <Stack.Screen name="Pagina4Screen" component={Pagina4Screen} />
       <Stack.Screen name="Pagina5Screen" component={Pagina5Screen} />
       <Stack.Screen name="Pagina6Screen" component={Pagina6Screen} />
       <Stack.Screen name="Pagina7Screen" component={Pagina7Screen} />
       <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
       <Stack.Screen name="Pagina8ssScreen" component={Pagina8ssScreen} />

       <Stack.Screen name="Pagina4jScreen" component={Pagina4jScreen} />
       <Stack.Screen name="Pagina5jScreen" component={Pagina5jScreen} />
       <Stack.Screen name="Pagina6jScreen" component={Pagina6jScreen} />
       <Stack.Screen name="Pagina7jScreen" component={Pagina7jScreen} />
       
    </>

  ):
  (
    <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
  )
}

       
        
      </Stack.Navigator>
  );
}
