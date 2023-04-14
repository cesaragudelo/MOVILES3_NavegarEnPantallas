import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from './screens/Contacts';



//crear constante para generar las rutas de los sceens

const Stack = createNativeStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='Home'
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{title:"Inicio"}}/>
      <Stack.Screen name="Products" component={ProductScreen} options={{title:"Productos"}}/>
      <Stack.Screen name="Contacts" component={Contacts} options={{title:"Contactenos"}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

function HomeScreen({navigation}){
  return(
  <View style={styles.container}>
    <Text style={{marginBottom:20}}>Estamos en inicio</Text>
    <Button
    title="Ir a productos"
    onPress={()=>{
     navigation.navigate('Products')
    }}
    />
  </View>
  )
}

function ProductScreen({navigation}){
  let title="este es el titulo"
  let fullname="cesar"
  return(
    <View style={styles.container}>
    <Text style={{marginBottom:10}}>Estamos en Productos</Text>
    <Button
    title="Ir a contactenos"
    onPress={()=>{
     navigation.navigate('Contacts',{title:title,name:fullname})
    }}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
