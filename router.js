import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
import RegistrationScreen from './Screens/authorization/RegistrationScreen';
import PostsScreen from './Screens/main/PostsScreen';
import ProfileScreen from './Screens/main/ProfileScreen';
import CreatePostsScreen from './Screens/main/CreatePostsScreen';
import LoginScreen from './Screens/authorization/LoginScreen';
//icons import 
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default useRoute = (isAuth) => {
  if (!isAuth) {
    return <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen options={{headerShown:false}} name="Registration" component={RegistrationScreen} />
        <MainStack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
      </MainStack.Navigator> 
      
  }
  return <MainTab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FF6C00',

                    "tabBarStyle": [
                        {
                        "justifyContent": "space-between",
                        "alignItems": "center",
                        },
                        null
                    ]
                    }}>
    <MainTab.Screen options={{
      headerShown: false,
      tabBarIcon: ({ focus, size, color }) => <Entypo name="news" size={size} color={color} />
    }} name="Post" component={PostsScreen}/>

           <MainTab.Screen options={{
          tabBarIcon: ({ focused, size, color }) => <AntDesign name="pluscircleo" size={size} color={color} />
      }} name="Create a post" component={CreatePostsScreen} />

        <MainTab.Screen options={{
          tabBarIcon:({focused,size, color}) => <FontAwesome5 name="user" size={size} color={color} />
      }} name="Profile" component={ProfileScreen} />
      </MainTab.Navigator>
}

