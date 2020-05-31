import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal, } from 'react-native';
import colors from '../colors';
import Modals from './Modals';

export default class ToDoList  extends React.Component {
    
    state = 
    {
        showListVisible: false
    }

    toggleListModal()
    {
        this.setState({showListVisible: !this.state.showListVisible})
    }
 
    render () 
    {

        const list = this.props.list;

        const CompletedCount = list.todos.filter(todo => todo.completed).length;
        const RemainingCount = list.todos.length - CompletedCount;


        return (
      
            <View>

             <Modal animationType="slide" visible={this.state.showListVisible} onRequestClose={() => this.toggleListModal()}>
               <Modals list={list} closeModal={() => this.toggleListModal} updateList={this.props.updateList} />
             </Modal>

            <TouchableOpacity style={[styles.listContainer,{backgroundColor: list.color}]} 
                onPress={() => this.toggleListModal()}>

                <Text style={styles.listTitle} numberOfLines={1}>
                    {list.name}
                </Text>
    
            <View>
                <View style={{alignItems:"center"}}>
                    <Text style={styles.count}>{RemainingCount}</Text>
                    <Text style={styles.subtitle}>Remaining</Text>
                </View>
    
                <View style={{alignItems:"center"}}>
                    <Text style={styles.count}>{CompletedCount}</Text>
                    <Text style={styles.subtitle}>Completed</Text>
                </View>
    
            
    
            </View>
    
    
            </TouchableOpacity>

            </View>

          
        );


    }
    
    
  

};

const styles = StyleSheet.create({

listContainer: {
    paddingVertical:32,
    paddingHorizontal:16,
    borderRadius:6,
    marginHorizontal:12,
    alignItems: "center",
    width: 160
},

listTitle: {
    fontSize:25,
    fontWeight:"700",
    color:colors.white,
    marginBottom:18
},

count: {
    fontSize: 38,
    color:colors.white,
    

},
subtitle: {
    fontSize:12,
    fontWeight:"700",
    color:colors.white,
},






});