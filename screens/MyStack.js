import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoScreen from './todo.screen';
import TakePicture from './takePicture';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="todo" component={ToDoScreen} />
        <Stack.Screen name="takePicture" component={TakePicture} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};