import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import logo from "../assets/b.png";

const LogoTextoInicio = () => {

    return (
        <View>
            <Image style={styles.logoInicio} source={logo}></Image>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginTop:'20%',}}>
         
                    <Text style={styles.tituloInicio}>FutDraft</Text>
          
                 </View>
        </View>
    )
}

export default LogoTextoInicio


const styles = StyleSheet.create({

    logoInicio: {
        width: '35%',
        height: '46%',
        position: 'absolute',
        top: '40%',
        left:'-19%',
        
    },
      tituloInicio: {
        left:'45%',
        top: '-14%',
        color: 'white',
        fontSize: 48,
        
      },
});