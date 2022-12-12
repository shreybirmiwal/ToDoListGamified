import {Camera} from 'expo-camera';
import {shareAsync} from 'expo-sharing'
import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, ImageBackground } from 'react-native';

const TakePicture = ({navigation}) =>{

    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [photo, setPhoto] = useState();

    useEffect(() => {
        (async () => {
          const cameraPermission = await Camera.requestCameraPermissionsAsync();
          setHasCameraPermission(cameraPermission.status === "granted");
        })();
      }, []);

    if(hasCameraPermission === undefined){
        return <Text> Requesting Permissions</Text>
    } else if(!hasCameraPermission){
        return <Text> Permissions for camera not granted. Please change in settings.</Text>
    }

        let takePic = async () => {
            let options = {
            quality: 1,
            base64: true,
            exif: false
        };
    
        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
      };
    
      if (photo) {
        let sendPhoto = () => {
            setPhoto(undefined);
            navigation.navigate("todopage")
        };

        return (
            <ImageBackground style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }}>
                <Button title="X"  style={styles.cancelPic} onPress={() => setPhoto(undefined)} />
                <Button title="Send >" style={styles.sendPic} onPress={() => sendPhoto()} />
            </ImageBackground>
        );
      }

    return(
        <Camera ref={cameraRef} style={styles.container}>
            <Text style={styles.topText}> Take a picture of your completed task</Text>
            <TouchableOpacity style={styles.picButton} onPress={takePic}/>
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
    },
    preview:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    cancelPic:{

    },
    sendPic:{

    }
})

export default TakePicture

