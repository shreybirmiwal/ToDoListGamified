import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from '../components/task';
import Completed from '../components/completed';

const ToDoScreen = ({navigation})=> {
  
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [finishedItems, setFinishedItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {

    let itemsCopy = [...taskItems];
    let holder = itemsCopy[index];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)

    let finishedItemsCopy = [...finishedItems];
    finishedItemsCopy.push(holder);
    setFinishedItems(finishedItemsCopy);

    navigation.replace("takepicturepage")

  }

  const DestroyTask = (index) =>{
    let itemsCopy = [...finishedItems];
    itemsCopy.splice(index, 1);
    setFinishedItems(itemsCopy);
  }

  return (

    <View style={styles.container}>

    <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
            
          }
          {
            finishedItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => DestroyTask(index)}>
                  <Completed text={item} /> 
                </TouchableOpacity>              )
            })
            
          }
        </View>
      </View>
        
      </ScrollView>


      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 270,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});

export default ToDoScreen