import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MeetingRoom from "./src/screens/MeetingRoom";
import Home from "./src/screens/Home";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MeetingRoom"
            component={MeetingRoom}
            options={{
              // headerShown: false,
              title:"Start A Meeting",
              headerStyle: {
                backgroundColor:"#1c1c1c",
              },
              headerTintColor:"white",
              headerTitleAlign:"center"
            }}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
