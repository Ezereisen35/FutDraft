import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import stats from "../assets/stats.png";
import casa from "../assets/casa.png";
import lupa from "../assets/lupa.png";
import user from "../assets/user.png";

const NavBar = (props) => {

    const { onPress, text } = props

    return (
    
         <View >
              <Image style={styles.ButtonChats} source={stats}></Image>

              <Image style={styles.ButtonHome} source={casa}></Image>

              <Image style={styles.ButtonLupa} source={lupa}></Image>

              <Image style={styles.BotonProfile} source={user}></Image>

         </View>     
    )
}

export default NavBar


const styles = StyleSheet.create({

        ButtonChats: {
         width: 40,
         height: 40,
         padding: 10,
        top: '-270%',
        right: '-56%',
         },
        ButtonHome: {
         width: 40,
         height: 40,
        padding: 10,
         top: '-295%',
        right: '-12%',
                        
          },
        ButtonLupa: {
        width: 40,
         height: 40,
         padding: 10,
         top: '-320%',
         right: '-34%',
         },
        BotonProfile: {
         width: 40,
        height: 40,
        padding: 10,
         top: '-346%',
         right: '-78%',
         },

});