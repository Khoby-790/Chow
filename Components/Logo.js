import React from 'react';
import { View, StyleSheet,Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Logo = (props) =>{
    return(
        <View style={styles.logoHolder}>
            <View style={styles.logo}>
                <Icon name="md-person" size={80} color="white"/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    logoHolder:{
        backgroundColor:"#F0352B",
        width: 110,
        height:110,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginVertical:10,
        rotation:50,
    },
    logo:{
        rotation:-50,
        zIndex:2,
    }
})

export default Logo