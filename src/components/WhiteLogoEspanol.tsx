import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogoEspanol = () => {
  return (
    <View style={{
        alignItems:"center",
        paddingTop:-50
    }}>
        <Image 
         source={require('../assets/espanol.png')}
          style={{
              width:50,
              height:50,
          }}
        />

    </View>
  )
}
