import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


//NEEDS: props.name, props.task, props.text, props.numLikes, ADD: props.image (TBD)
const PostComponent = (props) => {
  return (
    <TouchableOpacity style = {styles.feedOutline}>

      <View style={styles.center}>
        <Text style={styles.OPText}>{props.name} completed {props.task}</Text>
        <Text>{props.text}</Text>
        <Image style={styles.pic} source={require('../mathhw.jpg')} />
      </View>

      <View style={styles.likes}>
        <Ionicons name='md-thumbs-up' color={'#55BCF6'} size={30} /> 
        <Text style={styles.likecount}> {props.numLikes} </Text>
      </View>
     
    </TouchableOpacity>
  )
}

export default PostComponent

const styles = StyleSheet.create({
    feedOutline: {
        backgroundColor: '#e3e3e3',
        width: 370,
        borderRadius: 10,
        marginBottom: 20,
        //alignItems: 'center'
      },
      OPText:{
        paddingTop: 15,
        fontSize: 18,
        alignContent: 'center',
        //backgroundColor: '#FFFF'
      },
      pic:{
        width: 350,
        height: 280,
        resizeMode: 'stretch',
      },
      likes:{
        flexDirection: 'row' ,
        margin:10,
      },
      likecount:{
        fontSize: 30,
        color: '#55BCF6'
      },
      center:{
        alignItems:'center',
      }
})