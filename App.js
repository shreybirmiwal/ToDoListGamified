import React from 'react';
import ToDoScreen from './screens/todo.screen'
import TakePicture from './screens/takePicture';
import FeedScreen from './screens/feed.screen'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

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

