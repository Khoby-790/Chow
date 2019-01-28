import React from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";


const Button = (props) => {
    let bg = (props.black)?'black':'red'
    return(
        <TouchableOpacity 
        {...props}  
        style={[styles.btn,{backgroundColor:bg}]}>
            <Text style={styles.btnText}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        width:300,
        height:50,
        backgroundColor:"#F0352B",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:10,
        marginVertical:4,
        borderRadius:25,
    },
    btnText:{
        color:"white",
        fontWeight:"bold",
        
    }
})


export default Button