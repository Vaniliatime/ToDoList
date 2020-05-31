import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, FlatList, Modal} from 'react-native';

import {AntDesign} from "@expo/vector-icons";
import colors from "./colors";
import tempData from './tempData';
import ToDoList from './Components/Lists';
import AddListModal from './Components/AddListModal';

export default class App extends React.Component {

  state =
  {
    addTodoVisible: false,
    lists:tempData
  };

  toggleAddTodoModal()
  {
      this.setState({addTodoVisible: !this.state.addTodoVisible});
    
  }



  renderList = list => 
  {
    return  <ToDoList list={list} updateList={this.updateList} />;
  };

  addList = list => {
      this.setState({lists: [...this.state.lists,{ ...list, id: this.state.lists.lenght + 1, todos: [] }]});
  };

  updateList = list => {
    this.setState({
      lists: this.state.lists.map(item => {
        return item.id === list.id ? list : item;
      })
    });
  };

  render() 
  {
  return (
    <View style={styles.container}>

      <Modal  animationType="slide" visible={this.state.addTodoVisible} onRequestClose={() => this.toggleAddTodoModal()}>
  
           <AddListModal closeModal={() => this.toggleAddTodoModal()} addList={this.addList}/>

      </Modal>

       <View style={{flexDirection: "row"}}>
            <View style={styles.divider} />

            <Text style={styles.title}>
              Vanilia<Text style={{fontWeight: "bold",color: colors.purple2}}>Time</Text>
            </Text>

            <View style={styles.divider} />
      </View>

      <View style={{marginVertical: 48}}>

        <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
         <AntDesign name="plus" size={16} color={colors.ocean}/>
        </TouchableOpacity>

          <Text style={styles.add}>New List</Text>
      </View>

        <View style={{height: 275, paddingLeft: 32}} > 
          <FlatList data={this.state.lists}
           keyExtractor={item => item.name} 
           horizontal={true} 
           showsHorizontalScrollIndicator={false} 
           renderItem={({item}) => this.renderList(item)}     
           keyboardShouldPersistTaps="always"
           />
        </View>

    </View>
  );
  }
}

const styles = StyleSheet.create(
  {
  container:
   {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divider: 
  {    //line
    backgroundColor: colors.lightPurple,
    height: 1,
    flex: 1,
    alignSelf: "center"

  },

  title: 
  {
    fontSize:38,
    fontWeight: "bold",  
    color: colors.lightGrey,
    paddingHorizontal:64
  },

  addList: 
  {
    borderWidth:2,
    borderColor:colors.purple,
    borderRadius: 4,
    padding: 16,
    alignItems:"center",
    justifyContent:"center"
  },

  add:
   {
    color:colors.grey,
    fontWeight: "600",
    fontSize:14,
    marginTop:8,
    
  }

});
