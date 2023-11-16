import React from "react";
import { useState , useEffect} from 'react';


import {
    View,
    TextInput,
    Button,
    StyleSheet
  } from 'react-native';

  
function ToDoForm({addTask}) {

  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText('');
  }

  useEffect(() => {
    // Function to fetch tasks from 'tasks.json'
    const fetchTasks = async () => {
      try {
        const data = require('../data/tasks.json');
        setTasks(data.tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    

    // Call the fetchTasks function when the component mounts
    fetchTasks();
  }, []);

  // randomly select a task from the fetched tasks when the user clicks the "Generate Random Task" button.
  const handleAddRandomTask = () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    addTask(randomTask);
    setTaskText(randomTask);
  }

    return(
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add" onPress={handleAddTask}/>
        <Button title="Generate Random Task" onPress={handleAddRandomTask}/>
      </View>
    )
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

export default ToDoForm;