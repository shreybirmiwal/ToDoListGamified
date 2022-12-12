import React from 'react';
import ToDoScreen from './screens/todo.screen'
import TakePicture from './screens/takePicture';
import FeedScreen from './screens/FeedScreen'
import LoginScreen from './screens/LoginScreen';
import FeedScreen from './screens/FeedScreen';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="loginpage"
          component={LoginScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="feedscreen"
          component={FeedScreen}
          options={{headerShown: false}}
        />    

        <Stack.Screen
          name="todopage"
          component={ToDoScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="takepicturepage"
          component={TakePicture}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="feed"
          component={FeedScreen}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

