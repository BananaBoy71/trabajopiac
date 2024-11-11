import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VisInicio = () => {
  return (
    <ImageBackground
    source= {require ('../Imagenes/SISTI2021.jpeg')}
    style={styles.background}>    
        <View style={styles.container}>
        </View>
        </ImageBackground>
  )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', //ajusta la imagen para que cubra todo el fondo
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //agrega estilos adicionales segun lo necesites
    },
}
)

export default VisInicio