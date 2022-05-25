import React, { useState } from 'react'
import {View, Text, Button, Image} from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const ImageScreen = () => {

    const [image, setImage] = useState('https://www.univision.com/proxy/api/cached/picture?href=https%3A%2F%2Fst1.uvnimg.com%2Fa3%2F46%2F016f3cc64219b3e7fe507c96087c%2Fcristiano-ronaldo.png&width=485&height=567&ratio_width=200&ratio_height=200&resize_option=Crop%20Image')
  
    const selectImage = () => {
    
        const options = {
            title : 'selecciona una imagen',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }

        launchImageLibrary(options, response => {
          
            if(response.errorCode) {
                console.log(response.errorMessage)
            }else if(response.didCancel){
                console.log('El usuario cancelo la selección')
            }else{
               const path =  response.assets[0].uri
               setImage(path)
            }

        })

    }

    const takePicture = () => {

        const options = {
            title : 'Tomar una imagen',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            includeBase64: true,
        }

        launchCamera(options, response => {
            if(response.errorCode){
                console.log(response.errorMessage)
            }else if(response.didCancel){
                console.log('El usuario cancelo la fotografia')
            }else{
                const uri = response.assets[0].uri
                setImage(uri)
            }
        })
    }


  return (
    <View style = {{flex:1, justifyContent: 'center', }}>
        <Button 
            title = "Seleccionar Imagen"
            onPress={selectImage}
        />

   
        

        <Image
             style= {{
                 alignSelf:'center',
                 height: 200,
                 width: 200,
                 borderRadius: 100
             }}
             source = {{uri: image}}
        />

<Button 
            title = "Tomar Fotografia"
            onPress={takePicture}
        />

        
    </View>
  )
}

export default ImageScreen