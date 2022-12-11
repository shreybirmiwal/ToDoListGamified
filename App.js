import React from 'react';
import ToDoScreen from './screens/todo.screen'
import TakePicture from './screens/takePicture';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <ToDoScreen/>
    </NavigationContainer>
  );
}

