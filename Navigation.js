import React from "react";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MeetingRoom from "./src/screens/MeetingRoom";


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
          <Stack.Screen name="MeetingRoom" component={MeetingRoom}  options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    
  );
};

export default Navigation;


