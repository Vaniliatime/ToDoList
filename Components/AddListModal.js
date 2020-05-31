import React from "react";
import {View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput, } from "react-native";
import {AntDesign} from '@expo/vector-icons'
import colors from "../colors";
import tempData from "../tempData";



export default class AddListModal extends React.Component {

    backgroundColors = ["#BD276C" , "#279EBD", "#E17936" , "#50BD41" ];
    state = 
    {
        name:"",
        color: this.backgroundColors[0]
    };

    createTodo = () => 
    {
        const {name, color} = this.state ;

        const list = {name,color}
      
        this.props.addList(list);

        this.setState({name:""});
        this.props.closeModal();

    }

    render()
    {
        return (
        
            <KeyboardAvoidingView style={styles.container} >
                <TouchableOpacity style={{position:"absolute", top:30, right: 25}} onPress={this.props.closeModal}>
                    <AntDesign name="close" size={24} color={colors.black} />
                </TouchableOpacity>

                <View style={{alignSelf:"stretch", marginHorizontal:32}}>
                    <Text style={styles.title}>Create New Task </Text>

                    <TextInput style={styles.input} placeholder="List Name?"
                    onChangeText={text => this.setState({ name: text })}
                    />

                    <TouchableOpacity style={[styles.create, {backgroundColor: this.state.color}]} onPress={this.createTodo}>
                        <Text style={{color: colors.white,fontWeight: "600",alignSelf:"center"}}>Create</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>


        );
    }
}


const styles = StyleSheet.create(
    {

    container:
     {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
      
    },

    title:
    {
        fontSize:30,
        fontWeight:"bold",
        color:colors.grey,
        alignSelf:"center",
        marginBottom:16
    },

    input:
    {
        borderWidth: 1,
        borderColor: colors.purple,
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    },

    create: 
    {
        marginTop:30,
        height:50,
        borderRadius:6,
        alignSelf:"center",
        justifyContent: "center",
        width:150,


    }
});