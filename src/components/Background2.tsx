import React from 'react'
import { ImageBackground, View } from 'react-native'

export const Background2 = () => {
  return (
    <View
        style={{
            //position: 'absolute',
          // backgroundColor:'#89DEFB',
            //top: -440,
           // width: 1000,
            //height: 1200,
            /*transform: [
                {rotate:'-75deg'}
            ]*/
        }}
    >
      <ImageBackground 
     source={require('../assets/logos.jpg')}
     style={{
      position: 'absolute',
        top:-440,
         width:1000,
         height:1200,
     }} 
/>

      </View>

  )
}
