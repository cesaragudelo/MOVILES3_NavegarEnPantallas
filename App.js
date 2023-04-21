import { StyleSheet, Text, View, Button } from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import Contacts from './screens/Contacts';
//crear constante para generar las rutas de los sceens

let users = [
  {username:'cagudelo', name:'cesar', pasword:'11', role:1},
  {username:'lcar', name:'leidy cardona', pasword:'15', role:1}
  ]

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='HomeTabs'
    >
      
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{title:'sistema prueba'}} />
      
    </Stack.Navigator>
   </NavigationContainer>
  );
}

function HomeScreen({navigation}){
  return(
  <View style={styles.container}>
    <Text style={{marginBottom:20}}>Inicio de sesion</Text>
   
  </View>
  );
}

function ProductScreen({navigation}){
  let title="este es el titulo"
  let fullname="cesar"
  return(
    <View style={styles.container}>
    <Text style={{marginBottom:10}}>Estamos en Productos</Text>
  </View>
  );
}

function HomeTabs(){
  return(
    <Tab.Navigator
     screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor:'gray',
      tabBarActiveBackgroundColor:'aqua',
      tabBarInactiveBackgroundColor:'powderblue'
     }}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarStyle:{display:'none'},
        tabBarIcon: (tabInfo) =>(<MaterialIcons name="home" size={22}/>)
      }} />
      <Tab.Screen name='Products' component={ProductScreen}
      options={{
        tabBarIcon: (tabInfo) =>(<MaterialIcons name="apps" size={22}/>)
      }}
      />
      <Tab.Screen name='Contacts' component={Contacts}
       options={{
        tabBarIcon: (tabInfo) =>(<MaterialIcons name="chat" size={22}/>)
      }} 
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
