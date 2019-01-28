import React from 'react';
import {StyleSheet,View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Nav = (props) =>{
    let bg = (props.backRed)?'red':'white'
    let iconColr = (props.backRed)?'white':'red'
    return(
        <View style={styles.bottom}>
            <TouchableOpacity 
            style={[styles.goBackKey,{backgroundColor:bg}]}
            onPress={props.onBackKeyPress}>
                <Icon name="md-arrow-back" size={25} color={iconColr}/>
            </TouchableOpacity>
            {!props.rightOff &&<TouchableOpacity>
                <Icon name="md-card" size={25} color="white"/>
            </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    bottom:{
        height:50,
        width:'100%',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'transparent',
        position:'absolute',
        alignSelf:'baseline',
        padding:10,
        zIndex:5,
    },
    goBackKey:{
        width:70,
        height:30,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
    },
})

export default Nav