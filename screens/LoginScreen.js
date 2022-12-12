import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Email"
                //value= {}
                //onChangeText={text =>}
                style={styles.input}
            />
            <TextInput
                placeholder="Email"
                //value= {}
                //onChangeText={text =>}
                style={styles.input}
                secureTextEntry
            />

        </View>



    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    }

})