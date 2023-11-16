import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout.jsx';
import {Button} from 'react-native';
import {TouchableOpacity} from 'react-native';

function AboutScreen({navigation}) {
  const appName = 'My To Do List App';
  const authorName = 'Max Hui'; // Replace with your name
  const currentDate = new Date().toDateString();

  const handleAuthorNamePress = () => {
    alert(`Thanks for using this app, from ${authorName}`);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <Text>{appName}</Text>
        <TouchableOpacity onPress={handleAuthorNamePress}>
          <Text>Author: {authorName}</Text>
        </TouchableOpacity>
        <Text>Current Date: {currentDate}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
    </MainLayout>
  );
}

export default AboutScreen;
