import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {auth} from '../firebase'

export default function SignupScreen() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("HomeTabs")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }
  const LogInScreen = () => {
    navigation.navigate("loginpage")
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
        
      <Text style={styles.sectionTitle}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.input}
          
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={LogInScreen} style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Login Instead</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '80%',
      marginTop: 40,
      marginBottom: 70,
    },
    button: {
      backgroundColor: '#55BCF6',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#55BCF6',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#55BCF6',
      fontWeight: '700',
      fontSize: 16,
    },
  
    sectionTitle: {
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 40
    },
  })
