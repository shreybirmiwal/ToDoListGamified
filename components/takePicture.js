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
    if(hasCameraPermission){
        return(
            <View style={styles.container}>
                <Text> has permissions</Text>
                <Camera
                ref={cameraRef}
                captureAudio={false}
                style={{flex: 1}}
                ></Camera>
            </View>
        )
    }

    return(
        <Camera ref={cameraRef}>
        </Camera>

    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})



export default TakePicture;