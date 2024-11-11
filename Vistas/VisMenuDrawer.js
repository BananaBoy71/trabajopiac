import * as React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {NavigationContainer, useNavigation, DrawerActions} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon  from 'react-native-vector-icons/Entypo';

import VisInicio from './VisInicio';
import VisConsultaAlumno from './VisConsultaAlumno';
import VisGPS from './VisGPS';
import VisGrafica from './VisGrafica';
import VisAltaAlumno from './VisAltaAlumno';
import VisFoto from './VisFoto';
import VisMapa from './VisMapa';
import VisEditarAlumno from './VisEditarAlumno';


const DrawerApp=()=>{
  const Drawer=createDrawerNavigator();
  return(
    <Drawer.Navigator screenOptions={{
      statusBarcoloe: '#0163d2',
      headerStyle: {
        backgroundColor: '#0163d2'    
      },
      headerTintColor:'#fff',
      headerTitleAlign:'center',  
      headerTitle: 'App de Alumnos',
      headerShown:true,
      
    }}>

            <Drawer.Screen name="VisInicio" component={VisInicio} options={{
                title: 'Home',
                drawerIcon: config => <Icon
                size={23}
                name= "home"/>
            }} /> 

            <Drawer.Screen name="VAlta" component={VisAltaAlumno} options={{drawerItemStyle: {display: 'none'}}}/>
            
            <Drawer.Screen name="VisEditarAlumno" component={VisEditarAlumno} options={{drawerItemStyle: {display: 'none'}}}/>
            
            <Drawer.Screen name="Vmapa" component={VisMapa} options={{
                title: 'Mapa',
                drawerIcon: config => <Icon
                size={23}
                name= "compass"/>
              }} />
            <Drawer.Screen name="VGPS" component={VisGPS} options={{
                title: 'GPS',
                drawerIcon: config => <Icon
                size={23}
                name= "compass"/>
            }} />
            <Drawer.Screen name="VGrafica" component={VisGrafica} options={{
                title: 'Grafica',
                drawerIcon: config => <Icon
                size={23}
                name= "bar-graph"/>
            }} />
            <Drawer.Screen name="VConsulta" component={VisConsultaAlumno} options={{
                title: 'Consulta',
                drawerIcon: config => <Icon
                size={23}
                name= "app-store"/>
            }} />
            <Drawer.Screen name="VFoto" component={VisFoto} options={{
                title: 'Foto',
                drawerIcon: config => <Icon
                size={23}
                name= "camera"/>
            }} />
            

  </Drawer.Navigator>
  )
}

function VisMenuDrawer() {
        return(
            <DrawerApp/>
        );
}


export default VisMenuDrawer;