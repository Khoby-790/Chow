import React from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";


const Reminder = (props) =>{
    return(
        <TouchableOpacity 
        onPress ={props.onSubmit}
        style={styles.btn}>
            <Text style={styles.btnText}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        width:150,
        height:20,
        backgroundColor:"#3D6183",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:10,
        marginVertical:20,
        borderRadius:25,
    },
    btnText:{
        color:"white",
        fontSize:10,
    }
})


export default Reminder