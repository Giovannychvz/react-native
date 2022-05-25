import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogoColombia = () => {
  return (
    <View style={{
        alignItems:"center",
        paddingTop:-50
    }}>
        <Image 
         source={require('../assets/colombia.png')}
          style={{
              width:50,
              height:50,
          }}
        />

    </View>
  )
}
