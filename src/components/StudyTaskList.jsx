import React from 'react';
import { Pressable, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

function StudyTaskList({ tasks, onCompleteTask }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <Text style={styles.taskText}>Subject: {task.subject}</Text>
          <Text style={styles.taskText}>Title: {task.title}</Text>
          <Text style={styles.taskText}>Detail: {task.detail}</Text>
          <Text style={styles.taskText}>Deadline: {task.deadline}</Text>

          {/* Add a button to indicate completion and delete the task */}
          <TouchableOpacity onPress={() => onCompleteTask(index)}>
            <View style={styles.completeButton}>
              <Text style={{ color: 'white' }}>Complete and deleted</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'column',
  },
  taskText: {
    fontSize: 16,
  },
  completeButton: {
    backgroundColor: 'green',
    padding: 8,
    marginTop: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default StudyTaskList;
