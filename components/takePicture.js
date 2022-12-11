import {Camera} from 'expo-camera';
import {shareAsync} from 'expo-sharing'
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useRef, useState } from 'react';

export default function takePicture(){

    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaPermission, setHasMediaPermission] = useState();

    useEffect(() => {
        (async () =>{
            const cameraPermissions = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermissions = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermissions.status === "granted");
            setHasMediaPermission(mediaLibraryPermissions.status === "granted");
        })
    }, [])

    if(hasCameraPermission === undefined){
        return <Text> Requesting Permissions</Text>
    } else if(!hasCameraPermission){
        return <Text> Permissions for camera not granted. Please change in settings.</Text>
    }

    return(
        <Camera>
            
        </Camera>
    );


}
