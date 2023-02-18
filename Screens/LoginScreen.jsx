import React, { useState, useEffect} from "react";
import { StyleSheet, View, ImageBackground, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from "react-native";
import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

const initialState = {
    email: "",
    password: "",
   
  
};

export default LoginScreen = () => {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setstate] = useState(initialState);

      const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setstate(initialState);
    console.log(state)
      };
    
    const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    });
    
    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();    
},[])

if (!fontsLoaded) {
    return undefined;
} else {
    SplashScreen.hideAsync();
}

    return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
   
            <ImageBackground style={styles.imageLogo} source={require('../assets/images/Logo-bg.jpg')}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> 
                    <View style={{ ...styles.form, marginBottom: isShowKeyboard ? -200 : -405}}>
                        <Text style={{...styles.formTitle, fontFamily:"Roboto-Medium", fontSize: 30}}>Sign in</Text>
                        <View style={{ marginBottom: 16 }}><TextInput style={{...styles.input,fontFamily:"Roboto-Regular", fontSize: 16 }} textAlign={'left'} placeholder={"E-mail address"} onFocus={() => setIsShowKeyboard(true)} value={state.email} onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, email: value }))
                  }onSubmitEditing={keyboardHide}  />
                        </View>
                        <View style={{ marginBottom: 43 }}><TextInput style={{...styles.input,fontFamily:"Roboto-Regular", fontSize: 16 }} textAlign={'left'} placeholder={"Password"} secureTextEntry={true} onFocus={() => setIsShowKeyboard(true)} value={state.password}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, password: value }))
                  }onSubmitEditing={keyboardHide}/>
                        </View>
                    
                        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={keyboardHide}>
                            <Text style={{...styles.btnTitle, fontFamily:"Roboto-Regular", fontSize: 16}}>Sign in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} ><Text style={{...styles.already,fontFamily:"Roboto-Regular", fontSize: 16 }}>Don't have an account? Register</Text></TouchableOpacity>
                        
                    </View>
                        </KeyboardAvoidingView>
                </ImageBackground>

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLogo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    
    },
    input: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        marginHorizontal: 16,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#F6F6F6',
        color: '#212121',
        textAlign: 'center',
        padding: 16,
        placeholderTextColor: "#BDBDBD",
    },
    form: {
        backgroundColor: '#ffffff',
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    formTitle: {
        textAlign: 'center',
        color: '#212121',
        marginTop: 32,
        marginBottom: 33,
        fontWeight: 'Medium',
        
    },
    button: {
        marginHorizontal: 16,
        backgroundColor: '#FF6C00',
        color: '#FFFFFF',
        height: 51,
        borderRadius: 100,
        marginBottom: 16,
        
    },
    btnTitle: {
        color: '#FFFFFF',
        textAlign: 'center',
        paddingTop: 16,
    },
    already: {
        color: '#1B4371',
        textAlign: 'center',
        marginBottom: 144,
     
    }

});