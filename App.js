import * as Rect from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack =createStackNavigator()


import VisFlexUno from './Vistas/VisFlexUno'
import VisGrafica from './Vistas/VisGrafica'
import VisMenuDrawer from './Vistas/VisMenuDrawer'
import VisLogin from './Vistas/VisLogin';


function  MyStack(){
  return(
    <Stack.Navigator>
        
        <Stack.Screen name="VL" component= {VisLogin} options ={{title: 'Login'}} />

        <Stack.Screen name="VMD" component= {VisMenuDrawer} options ={{title: 'Menu'}} />
        
        <Stack.Screen name="VF1" component= {VisFlexUno} options ={{title: 'Practica 1'}} />
          
        <Stack.Screen name="VG" component= {VisGrafica} options ={{title: 'Practica 2'}} />

        
    </Stack.Navigator>
  )
}

function App(){
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default App;