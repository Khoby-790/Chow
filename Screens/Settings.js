import React from 'react';
import {StyleSheet, View,TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Nav } from "../Components";

class Setiings extends React.Component{

    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-cog" size={20} color={tintColor}/>
        ),
      };

      _handleLogout = () =>{
          this.props.navigation.navigate('LoginRegisterTabs')
      }

      _handleGoback = () =>{
        this.props.navigation.navigate('Posts')
      }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                onPress ={()=>this._handleLogout()}
                style={styles.logout}>
                    <Icon name="md-log-out" color="red" size={45}/>
                    <Text>Logout</Text>
                </TouchableOpacity>
                <Nav rightOff onBackKeyPress={()=>this._handleGoback()}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex:1,
        alignItems:'center',
    },
    logout:{
        padding:20,
        backgroundColor:'white',
        borderRadius:12,
        marginVertical:50,
    }
})


export default Setiings

