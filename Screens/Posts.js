import React from 'react';
import {StyleSheet,View,ScrollView} from 'react-native';
import { NavBar,ListItem } from "../Components";
import Icon from "react-native-vector-icons/Ionicons";


class Posts extends React.Component{

    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-pizza" size={20} color={tintColor}/>
        ),
      };


      _handleMenuToggle = () =>{
          this.props.navigation.openDrawer();
      }

    _handleHandleItemSelect = () =>{
        this.props.navigation.navigate("Product");
    }


    render(){
        return(
            <View styles={styles.container}>
                <NavBar
                menuOnPress ={() => this._handleMenuToggle()}
                />
                <ScrollView style={{marginBottom:40}}>
                <ListItem onSelect={()=>this._handleHandleItemSelect()}/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})


export default Posts

