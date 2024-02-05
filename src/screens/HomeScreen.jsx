import React, { useState, useEffect } from 'react';
import { SafeAreaView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import StudyTaskList from '../components/StudyTaskList.jsx';
import MainLayout from '../layouts/MainLayout.jsx';

function HomeScreen({ navigation, route }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (route.params && route.params.addedTask) {
      const newTask = route.params.addedTask;

      setTasks((prevTasks) => [...prevTasks, newTask]);
      navigation.setParams({ addedTask: null });

      // Save tasks to AsyncStorage
      saveTasksToAsyncStorage([...tasks, newTask]);
    }
  }, [route.params]);

  const onCompleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    // Save updated tasks to AsyncStorage
    saveTasksToAsyncStorage(updatedTasks);
  };

  const saveTasksToAsyncStorage = async (tasksArray) => {
    try {
      // Convert tasksArray to JSON-formatted string
      const tasksJson = JSON.stringify(tasksArray);

      // Save the JSON string to AsyncStorage
      await AsyncStorage.setItem('tasks', tasksJson);

      console.log('Tasks saved to AsyncStorage');
    } catch (error) {
      console.error('Error saving tasks to AsyncStorage:', error);
    }
  };

  useEffect(() => {
    // Load tasks from AsyncStorage when the component mounts
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          // Parse the JSON string to get the tasks array
          const parsedTasks = JSON.parse(storedTasks);
          setTasks(parsedTasks);
        }
      } catch (error) {
        console.error('Error loading tasks from AsyncStorage:', error);
      }
    };

    loadTasks();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <MainLayout>
      <SafeAreaView>
        <StudyTaskList tasks={tasks} onCompleteTask={onCompleteTask} />
        <Button title="Add Study Task" onPress={() => navigation.navigate('Add')} />
      </SafeAreaView>
    </MainLayout>
  );
}

export default HomeScreen;
