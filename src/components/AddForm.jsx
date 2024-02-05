import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

function AddForm({ addTask }) {
  const [subject, setSubject] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDetail, setTaskDetail] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddTask = () => {
    // Create an object with the task details
    const newTask = {
      subject,
      title: taskTitle,
      detail: taskDetail,
      deadline: deadline.toLocaleDateString(),
    };

    // Pass the new task to the addTask function
    addTask(newTask);

    // Clear the input fields
    setSubject("");
    setTaskTitle("");
    setTaskDetail("");
    setDeadline(new Date());
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios'); // Hide the date picker on iOS immediately

    if (selectedDate !== undefined) {
      setDeadline(selectedDate);
    }
  };

  return (
    <View style={styles.form}>
      {/* Additional input fields */}
      <TextInput
        style={styles.input}
        placeholder="Subject"
        onChangeText={(text) => setSubject(text)}
        value={subject}
      />
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        onChangeText={(text) => setTaskTitle(text)}
        value={taskTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Task Detail"
        onChangeText={(text) => setTaskDetail(text)}
        value={taskDetail}
      />
      <TextInput
        style={styles.input}
        placeholder="Deadline"
        onFocus={showDatePickerModal}
        value={deadline.toLocaleDateString()}
      />

      {showDatePicker && (
        <DateTimePicker
          value={deadline}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default AddForm;
