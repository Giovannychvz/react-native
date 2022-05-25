import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogo2 = () => {
  return (
    <View style={{
        alignItems:"center",
        paddingTop:50
    }}>
        <Image 
         source={require('../assets/plooy.png')}
          style={{
              width:130,
              height:43,
          }}
        />

    </View>
  )
}
