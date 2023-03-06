import React, { useState, useEffect } from "react";
import { View, StyleSheet,Text, Image, TextInput} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
const CreateScreen = ({ navigation }) => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [type, setType] = useState(CameraType.back);
    

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    setPhoto(uri);
    const location = await Location.getCurrentPositionAsync();
    setPhoto(photo.uri);
  };
    const sendPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("Posts", { photo });
  };
    
  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

    useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);


  return (
    <View style={styles.container}>
          <Camera style={styles.camera} ref={setCamera} type={type}>
           {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 100, width: 100}}
            />
          </View>
              )}
              <View style={styles.cameraRevers}>
                  <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}><Ionicons name="camera-reverse-outline" size={24} color="grey" /></Text>
          </TouchableOpacity>
            </View>
        <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
             <Text><Feather name="camera" size={24} color="grey" /></Text>        
              </TouchableOpacity>

          </Camera>
          <View>      
             <Text style={styles.textPhoto}>Upload a photo</Text>        
          </View>
          <View>
            <TextInput style={styles.nameText} placeholder="Name..."></TextInput>
          </View>
          <View>
            <View style={styles.localText}>
            <Feather name="map-pin" size={24} color='#E8E8E8' />
            <TextInput style={{marginLeft:8}} placeholder="Localization" />
            </View>
              <View>
                  <TouchableOpacity onPress={sendPhoto} style={styles.btnPublish}>
                      <Text style={styles.textPublish}>Publish</Text>
                </TouchableOpacity>
            </View>
             <View style={{alignItems: 'center'}}>
                  <TouchableOpacity onPress={sendPhoto} style={styles.btnTrash}>
                      <Text style={styles.textPublish}><Feather name="trash-2" size={24} color="#BDBDBD" /></Text>
                </TouchableOpacity>
            </View>
                  
              
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    height: 240,
    marginTop: 32,
    alignItems: "center",
    marginHorizontal: 16,
    borderRadius: 8,
   
  },

    snapContainer: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "#FFFF",
        width: 70,
        height: 70,
        marginTop:50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFFF',
    },
    takePhotoContainer: {
        position: "absolute",
        borderColor: "#E8E8E8",
        borderWidth: 1,
        borderRadius: 8,
        top: 10,
        left:10,
  },

    textPhoto: {
        color: '#BDBDBD',
        fontSize: 16,
        marginLeft:16,
       marginTop: 8,
    },
    nameText: {
        marginHorizontal: 16,
        marginTop: 48, 
        fontSize: 16,
        borderBottomWidth: 1,
        paddingBottom: 15,
        borderColor: '#E8E8E8',
    },
    localText: {
        marginHorizontal: 16,
        marginTop: 32, 
        fontSize: 16,
        borderBottomWidth: 1,
        paddingBottom: 15,
        borderColor: '#E8E8E8',
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnPublish: {
        borderWidth: 1,
        paddingTop: 16,
        paddingBottom: 16,
        marginHorizontal: 16,
        borderRadius: 100,
        backgroundColor: '#FF6C00',
        borderColor: '#FF6C00',
        marginTop: 32,   
    },
    textPublish: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
        opacity: 0.8,
        
    },
    btnTrash: {
        marginTop: 45,
        borderWidth: 1,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 23,
        paddingRight:23,
        borderRadius: 20,
        width: 70,
        backgroundColor: '#F6F6F6',
        borderColor: '#F6F6F6',
        alignItems: 'center',
    },
    cameraRevers: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#FFFF",
        width: 40,
        height: 40,
        backgroundColor: '#FFFF',
        alignItems: 'center',
        justifyContent: 'center',
        top: 5,
        left: 165,
        opacity:0.8,
    }




});

    export default CreateScreen;