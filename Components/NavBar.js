import React from 'react';
import { View,StyleSheet ,Text,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const NavBar = (props) =>{
    return(
        <View style={styles.navbar}>
            <View style={styles.Left}>
                <TouchableOpacity onPress={props.menuOnPress}>
                    <Icon name="md-menu" color="white" size={30}/>
                </TouchableOpacity>
            </View>
            <View style={styles.Body}>
                <Text styles={styles.navbarTitle}>Dishes</Text>
            </View>
            <View style={styles.Right}>
                <Icon name="md-search" size={28}/>
                <Icon name="md-cart" size={28}/>
                <Icon name="md-star" size={28}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    navbar:{
        // position:"absolute",
        flexDirection:'row',
        height:50,
        width:'100%',
        // zIndex:1,
        backgroundColor:'#ccc'
    },
    Left:{
        flex:1,
        backgroundColor:'#F0352B',
        justifyContent:'center',
        alignItems:'center'
    },
    Body:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    Right:{
        flex:2,
        padding:15,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    navbarTitle:{
        fontWeight:'bold',
        fontSize:50,
    }
})


export default NavBar