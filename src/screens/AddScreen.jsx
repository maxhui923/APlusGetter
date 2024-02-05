// AddScreen.jsx
import React from 'react';
import { SafeAreaView, Button, View } from 'react-native';
import MainLayout from '../layouts/MainLayout.jsx';
import AddForm from '../components/AddForm.jsx';

function AddScreen({ navigation }) {
  const addTask = task => {
    // Pass the added task back to HomeScreen
    navigation.navigate('Home', { addedTask: task });
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <AddForm addTask={addTask} />
        {/* Add some space between AddForm and the button */}
        <View style={{ marginTop: 20 }}>
          <Button title="Back Home" onPress={() => navigation.navigate('Home')} />
        </View>
      </SafeAreaView>
    </MainLayout>
  );
}

export default AddScreen;
