import React from 'react';
import {StyleSheet} from 'react-native';
import {View, ImageBackground,ScrollView, Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Nav , ProfileCard  } from "../Components";

class Profile extends React.Component{

    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-person" size={20} color={tintColor}/>
        ),
      };

      _handleGoback = () =>{
        this.props.navigation.navigate("Posts")
      }


    render(){
        return (
            <View style={styles.container}>
                <ImageBackground 
                style={styles.imgaeBackground}
                source={require('../assets/Images/food.jpg')}>
                   <View style={styles.overlay}>
                        <Image source={require('../assets/Images/avatar3.jpg')} style={styles.pro}/>
                   </View>
                </ImageBackground>
                <ScrollView style={styles.profileMeta}>
                <View style={styles.profileMeta}>
                    <ProfileCard name="Name" value="Emmanuel Baidoo"/>
                    <ProfileCard name="Email" value="ebaidoo79@gmail.com"/>
                    <ProfileCard name="Address" value="North legon"/>
                    <ProfileCard name="Work" value="Developer"/>
                    <ProfileCard name="Height" value="74'"/>
                </View>
                </ScrollView>
                <Nav onBackKeyPress={()=>this._handleGoback()}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imgaeBackground:{
        flex:1,
        width:'100%',
    },
    profileMeta:{
        backgroundColor:'#ccc',
        flex:1,
    },
    name:{
        fontWeight:'bold',
        fontSize:18,
    },
    pro:{
        width:150,
        height:150,
        borderRadius:75,
        zIndex:4,
    },
    overlay:{
        flex:1,
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor: 'rgba(255,0,0,.6)'
    }
})


export default Profile

