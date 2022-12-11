import {Camera} from 'expo-camera';
import {shareAsync} from 'expo-sharing'
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TakePicture = () =>{

    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaPermission, setHasMediaPermission] = useState();

    useEffect(() => {
        (async () => {
          const cameraPermission = await Camera.requestCameraPermissionsAsync();
          const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
          setHasCameraPermission(cameraPermission.status === "granted");
          setHasMediaPermission(mediaLibraryPermission.status === "granted");
        })();
      }, []);

    if(hasCameraPermission === undefined){
        return <Text> Requesting Permissions</Text>
    } else if(!hasCameraPermission){
        return <Text> Permissions for camera not granted. Please change in settings.</Text>
    }

        return(
            <Camera ref={cameraRef} style={styles.container}>
                <Text style={styles.topText}> Take a picture of your completed task</Text>
                <TouchableOpacity style={styles.picButton}/>
            </Camera>
        )
    

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
        alignSelf: 'stretch'
    },
    picButton:{
        height: 120,
        width: 120,
        borderRadius: 1000,
        backgroundColor: '#FFFF',
        position: 'absolute',
        bottom: 0,
        marginBottom: 75,
    },
    topText:{
        color: '#FFFF',
        flex: 1,
        marginTop: 100
    }
})



export default TakePicture;