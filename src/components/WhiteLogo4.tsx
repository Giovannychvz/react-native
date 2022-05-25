import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogo4 = () => {
  return (
    <View style={{
        alignItems:"center",
        paddingTop:50
    }}>
        <Image 
         source={require('../assets/validacion.png')}
          style={{
              width:200,
              height:200,
          }}
        />

    </View>
  )
}
