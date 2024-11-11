import { StyleSheet, Text, View, Button, TextInput, ScrollView, SafeAreaView,} from 'react-native'
import React from 'react'
import { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioButtonGroup, {RadioButtonItem} from 'expo-radio-button';
import {Dropdown} from 'react-native-element-dropdown'
import AntDesign from '@expo/vector-icons/AntDesign';
import VisFoto from './VisFoto';

const VisAltaAlumno = () => {
  const[state,setState]=useState({
    aluNC:"",
    aluNombre:"",
    aluApellido:"",
    aluCorreo:"",
    aluTel:"",
    aluFNac:"",
    aluSexo:'Femenino',
  })

const [date,setDate]=useState(new Date());
const [mode,setMode]=useState('date');
const [show,setShow]=useState(false);

const [resetFoto, setResetFoto] = useState(false);

const onChange=(event, seleectedDate)=>{
  const currentDate = seleectedDate;
  setShow(false);
  setDate(currentDate);
}

const showMode=(currentMode)=>{
  setShow(true);
  setMode(currentMode);
}

const showDatepicker=()=>{
  showMode('date');
}

//radio button sellecionar texto
const [sexo,setSexo]=useState('Femenino');

const handlerChangeGenero=(value)=>{
setSexo(value)
}
//useState para el manejo de las carreras
const[carrera,setCarrera]=useState({
  aluCarrera:"Seleccionar carrera..."
})

const handlerChangeCarrera=(aluCarrera,value)=>{
     setCarrera({...carrera,[aluCarrera]:value})
}

const data=[
  {label:'Ingeniería en Sistemas',value:'1'},
  {label:'Ingeniería en Gestión',value:'2'},
  {label:'Licenciatura en Turismo',value:'3'},
  {label:'Ingeniería en Electromecánica',value:'4'},
  {label:'Arquitectura',value:'5'},
  {label:'Licenciatura en Gastronomía',value:'6'}
]

  const guardarAlumno=async()=>{
    if(state.aluNC=='' || state.aluNombre===''){
      alert("Favor de llenar todos los datos")
    }else{
      await conexion
      .collection('tblAlumnos')
      .add({
        aluNC:state.aluNC,
        aluNombre:state.aluNombre,
        aluApellidos:state.aluApellidos,
        aluCorreo:state.aluCorreo,
        aluTel:state.aluTel,
        aluFNac:date.toLocaleDateString ([], {dateStyle:'medium'}),
        aluSexo:sexo,
      })
      alert('Alumno guardado exitosamente')
      props.navigation.navigate('VConsulta')
    }
  }

  const handleChangeText=(aluNC, value)=>{
setState({...state, [aluNC]:value})
  }
  
  return (
    <ScrollView>
      <View style= {styles.container}>
        <View>
          <Text style ={styles.text}>Numero de Control</Text>
          <TextInput style={styles.inputText}
          placeholder='Escribe tu numero de control'
          onChangeText={(Value)=>handleChangeText('aluNC', Value)}
          />
        </View>
        <View>
          <Text style ={styles.text}>Nombre</Text>
          <TextInput style={styles.inputText}
          placeholder='Escribe tu nombre'
          onChangeText={(Value)=>handleChangeText('aluNombre', Value)}
          />
        </View>
        <View>
          <Text style ={styles.text}>Apeliidos</Text>
          <TextInput style={styles.inputText}
          placeholder='Escribe tus apellidos'
          onChangeText={(Value)=>handleChangeText('aluApellidos', Value)}
          />
        </View>
        <View>
          <Text style ={styles.text}>Correo</Text>
          <TextInput style={styles.inputText}
          placeholder='Escribe tu numero correo'
          onChangeText={(Value)=>handleChangeText('aluCorreo', Value)}
          />
        </View>
        <View>
          <Text style ={styles.text}>Telefono</Text>
          <TextInput style={styles.inputText}
          placeholder='Escribe tu numero de telefono'
          onChangeText={(Value)=>handleChangeText('aluTel', Value)}
          />
        </View>
        <View>
              <Text style={styles.text}>Seleccione uno</Text>
                <View>
                  <RadioButtonGroup 
                      selected={sexo}
                      onSelected={(Value) => handlerChangeGenero(Value)}
                      radioBackground="white">

                      <RadioButtonItem value="Masculino" 
                        label={<Text style={styles.rb} >Masculino</Text>} />
                      <RadioButtonItem value="Femenino"
                        label={<Text style={styles.rb}>Femenino</Text>} />
                  </RadioButtonGroup>
                  <View style={{width:'80%' }}>
            </View>
                </View>   
                <View style={{width:'80%' }}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={400}
              labelField="label"
              valueField="value"
              placeholder={carrera.aluCarrera}
              searchPlaceholder="Search..."
              onChange={(item) => handlerChangeCarrera('aluCarrera',item.label)}      
              renderLeftIcon={() => (
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
              )}
            />
       
            </View>
            </View>
        <SafeAreaView>
                  <View>
                    <Button title='Fecha de nacimiento' onPress={showDatepicker}/>
                    </View>
                    <Text style={styles.fecha}> Fecha: 
                      {date.toLocaleString([], {dateStyle: 'medium' })}
                    </Text>
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={mode}
                      is24Hour={true}
                      onChange={onChange}
                    />
                  )} 
              </SafeAreaView>

              <View style={{ width: 360, height: 250 }}>
          <VisFoto nc={state.alunc} resetImage={resetFoto} />
        </View>
        <View>
          <Button style= {{margin:80}} title='Guardar Alumnos'
          onPress={()=>guardarAlumno()}>
          </Button>
        </View>
      </View>
    </ScrollView>
    
  )
}

export default VisAltaAlumno
const styles = StyleSheet.create({
  container:{
    width:'80%',
    padding:10,
    alignContent:'center',
    backgroundColor:'#8E9AE7',
    alignItems:'center',
    alignSelf: 'center',
  },
  inputText:{
    borderBottomWidth: 0.5, 
    height: 28, 
    width: 280,
    fontSize: 20, 
    alignSelf: 'center',
    borderBottomColor: '#8e93a1',
    textAlign: 'center', 
    marginBottom: 15,
    backgroundColor:'#727777',
  },
  text:{
    borderBottomWidth: 0.5, 
    height: 35, 
    width: 280,
    fontSize: 20, 
    alignSelf: 'center',
    borderBottomColor: '#8e93a1',
    textAlign: 'center', 
    marginBottom: 10,
    backgroundColor:'blue',
    color:'white',
  },
  fecha:{
    borderBottomWidth: 0.5, 
    height: 28, 
    width: 275,
    fontSize: 15, 
    alignSelf: 'center',
    borderBottomColor: '#8e93a1',
    textAlign: 'center', 
    marginBottom: 15,
    backgroundColor:'#727777',
  },
  rb:{
    width: '85%',
    fontWeight:'bold',
    height:30,
    fontSize:20, 
    marginBottom:10, 
    backgroundColor:'#727777',
  },
  dropdown: {
    backgroundColor:'blue',
    margin: 5,
    height: 60,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 12,
    color:'white',
  },
  selectedTextStyle: {
    fontSize: 12,
    color:'white',
  },
  iconStyle: {
    width: 20,
    height: 20,
},
inputSearchStyle: {
  height: 40,
  fontSize: 16,
},
})