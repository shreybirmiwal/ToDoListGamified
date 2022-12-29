import { KeyboardAvoidingView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import PostComponent from '../components/postComponent'

const FeedScreen = () => {

  return (
    <View style={styles.container}>
        <ScrollView content ContainerStyle={{flexGrow: 1}}keyboardShouldPersistTaps='handled'>        
            <View style={styles.Wrapper}>

                <PostComponent name={"Shrey Birmiwal"} task={"Math Homework"} numLikes={10}/>
                <PostComponent name={"SteveASDn ADSD"} task={"DISHES"} numLikes={1}/>

            </View>
        </ScrollView>
    </View>
  )
}

export default FeedScreen

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
    Wrapper: {
        paddingTop: 80,
      },
  })