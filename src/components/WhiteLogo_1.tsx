import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogo_1 = () => {
  return (
    <View style={{
        alignItems:"center"
    }}>
        <Image 
         source={require('../assets/logo.gif')}
          style={{
              width:200,
              height:160
          }}
        />

{/*<Image 
         source={require('../assets/deporte.gif')}
         style={{
            
              top:376,
              right:100,
              width:200,
              height:150
          }}
        /> */}

    </View>
  )
}
