import {View, TextInput, ScrollView,Button,StyleSheet,Alert,Text,SafeAreaView} from 'react-native'
import {useEffect ,useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import {ListItem, Avatar} from 'react-native-elements'
import firebase from '../Control/FireBase';
import { Divider } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import VisFoto from './VisFoto';


const VisEditarAlumno = (props) => {
  const [alumno,setAlumno] = useState({
    aluNC: '',
    aluNombre: '',
    aluApellido: '',
    aluCorreo: '',
    aluTel: '',
    aluSexo: '',
    aluCarrera: '',
  });

  const handlerChangeText = (aluNombre,x) => {
    setAlumno({...alumno, [aluNombre]:x})
  }
  const data = [
    {label: 'Ingeneria en sistemas',value:'1'},
      {label: 'Ingeneria en Gestion',value:'2'},
      {label: 'Licenciatura en Turismo',value:'3'},
      {label: 'Ingeneria en Electromecanica',value:'4'},
      {label: 'Arquitectura',value:'5'},
      {label: 'Licenciatura en Gastronomia',value:'6'},
  ];
  const [resetFoto, setResetFoto] = useState(false);

  const actualizarAlumno = async (Id) => {
    try {
      await conexion
      .collection('tblAlumnos') 
      .doc(Id)
      .update({
        aluNC: alumno.aluNC,
        aluNombre: alumno.aluNombre,
        aluApellido: alumno.aluApellido,
        aluCorreo: alumno.aluCorreo,
        aluTel: alumno.aluTel,
        //aluFNac:date.toLocaleString([], {dateStyle: 'medium' }),
        aluCarrera:alumno.aluCarrera,
        aluSexo:alumno.aluSexo,
      })
      .then(() => {
            console.log('Alumno actualizado!');
        });

      } catch (e) {
        alert(e);
      }
      props.navigation.navigate('VConsulta');
  };

useEffect(()=>{
  obtenerAlumnoporId(props.route.params.id);
},[props])

const obtenerAlumnoporId = async(Id)=>{
  try{
    await conexion
    .collection('tblAlumnos')
    .doc(Id)
    .get()
    .then((documentSnapshot)=>{
      if(documentSnapshot.exists){
        setAlumno({...alumno,
          aluNC:documentSnapshot.data().aluNC,
          aluNombre:documentSnapshot.data().aluNombre,
          aluApellido:documentSnapshot.data().aluApellido,
          aluCorreo:documentSnapshot.data().aluCorreo,
          aluTel:documentSnapshot.data().aluTel,
          aluSexo:documentSnapshot.data().aluSexo,
          aluCarrera:documentSnapshot.data().aluCarrera,
        })
      }
    })
  }catch(e){
    alert(e)
  }
}

return(
  <ScrollView style={styles.container}>
    <View style={styles.inputGroup}>
      <Text style={styles.textos}>Número de Control</Text>
      <TextInput styles={styles.entradas} 
      placeholder='Escribe tu NC'
      value={alumno.aluNC}
      onChangeText={(Val)=> handlerChangeText('aluNC',Val)}/>
    </View>

    <View style={styles.inputGroup}>
      <Text style={styles.textos}>Nombre</Text>
      <TextInput styles={styles.entradas} 
      placeholder='Escribe tu Nombre'
      value={alumno.aluNombre}
      onChangeText={(Val)=> handlerChangeText('aluNombre',Val)}/>
    </View>

    <View style={styles.inputGroup}>
      <Text style={styles.textos}>Apellido</Text>
      <TextInput styles={styles.entradas} 
      placeholder='Escribe tu apellido'
      value={alumno.aluApellido}
      onChangeText={(Val)=> handlerChangeText('aluApellido',Val)}/>
    </View>

    <View style={styles.inputGroup}>
      <Text style={styles.textos}>Correo</Text>
      <TextInput styles={styles.entradas} 
      placeholder='Escribe tu Correo'
      value={alumno.aluCorreo}
      onChangeText={(Val)=> handlerChangeText('aluCorreo',Val)}/>
    </View>

    <View style={styles.inputGroup}>
      <Text style={styles.textos}>Telefono</Text>
      <TextInput styles={styles.entradas} 
      placeholder='Escribe tu Telefono'
      value={alumno.aluTel}
      onChangeText={(Val)=> handlerChangeText('aluTel',Val)}/>
    </View>

        {/* RadioButton para seleccionar el género */}
        <View style={styles.inputGroup}>
        <Text style={styles.textos}>Género</Text>
        <RadioButtonGroup
          containerStyle={{ flexDirection: "row" }}
          selected={alumno.aluSexo}  // Muestra el valor seleccionado que viene de la base de datos
          onSelected={(value) => handlerChangeText('aluSexo', value)}  // Actualiza el valor en el estado
          radioBackground="blue"   // Color del radio button seleccionado
        >
          <RadioButtonItem value="Masculino" label="Masculino" />
          <RadioButtonItem value="Femenino" label="Femenino" />
          
        </RadioButtonGroup>
      </View>

      <View style={styles.inputGroup}>
  <Text style={styles.textos}>Carrera</Text>
  <Dropdown
    style={styles.entradas} // Asegúrate de que las propiedades sean las adecuadas para Dropdown
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    inputSearchStyle={styles.inputSearchStyle}
    iconStyle={styles.iconStyle}
    data={data}
    search
    maxHeight={400}
    labelField="label"
    valueField="value"
    placeholder={alumno.aluCarrera} // Similar a como se hace con TextInput
    searchPlaceholder="Selecciona tu Carrera"
    onChange={(item) => handlerChangeText('aluCarrera', item.label)}
    renderLeftIcon={() => (
      <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
    )}
  />
</View>
          <View style={{ width: 360, height: 250 }}>
              <VisFoto nc={alumno.aluNC} resetImage={resetFoto} />
        </View>

    <View style={{marginBottom:10}}>
                <Button  title="Actualizar" color="#348D68" 
                onPress= {()=> actualizarAlumno(props.route.params.id) }
                />
        </View>
  </ScrollView>
)}


export default VisEditarAlumno

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  inputGroup: {
    marginBottom: 20,
  },
  textos: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  entradas: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  dropdown: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#333',
  },
  inputSearchStyle: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  icon: {
    marginRight: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  },
});