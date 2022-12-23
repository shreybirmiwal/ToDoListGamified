import React from 'react';
import ToDoScreen from './screens/todo.screen'
import TakePicture from './screens/takePicture';
import AccountScreen from './screens/AccountScreen'
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import SignupScreen from './screens/SignupScreen';
import FeedScreen from './screens/FeedScreen';

import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (

      <Tab.Navigator
      screenOptions={({ route }) => ({
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused
              ? 'md-home'
              : 'ios-home-outline';
          } else if (route.name === 'todopage') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }
          else if (route.name === 'accountpage') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
        tabBarShowLabel:false,
      })}
      >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="todopage" component={ToDoScreen} />
      <Tab.Screen name="accountpage" component={AccountScreen} options={{ tabBarBadge: 3 }} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="splashpage"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="signuppage"
          component={SignupScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="loginpage"
          component={LoginScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="takepicturepage"
          component={TakePicture}
          options={{headerShown: false}}
        />    

      </Stack.Navigator>
    </NavigationContainer>
  );
}


