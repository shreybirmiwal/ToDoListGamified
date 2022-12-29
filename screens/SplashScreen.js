import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const SplashScreen = ({navigation}) => {

    const LogInScreen = () => {
        navigation.navigate("loginpage")
    }
    const SignUpScreen = () => {
        navigation.navigate("signuppage")
    }


  return (
    <View style={styles.container}>
            <View style={styles.CenterHeading}>
                <Text style={styles.sectionTitle}>Taskr</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={LogInScreen} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={SignUpScreen} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Create an account</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
      alignItems: 'center'
    },
    CenterHeading: {
      paddingTop: 80,
      alignItems: 'center'
    },
    sectionTitle: {
      fontSize: 50,
      fontWeight: 'bold'
    },
    buttonContainer: {
        width: '80%',
        marginTop: 40,
        marginBottom: 70,
        position: 'absolute',
        bottom: 0
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
  });

export default SplashScreen