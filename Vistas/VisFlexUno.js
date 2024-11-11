import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecera}>
        <View style={styles.itemcabecera}>
          <Text style={{color:'black'}}>Practica</Text>
        </View>
        </View>
      <View style={styles.filas}>
        <View style={styles.elementos}>
        </View>
        <View style={styles.elementos}>
        </View>
        <View style={styles.elementos}>
        </View>

      </View>
      <View style={styles.filas}>
        <View style={styles.elementos}>
        </View>
        <View style={styles.elementos}>
        </View>
        <View style={styles.elementos}>
        </View>

      </View>
      <View style={styles.filas}>
        <View style={styles.elementos}>
        </View>
        <View style={styles.elementos}>
        </View>
        <View style={styles.elementos}>
        </View>

      </View>
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#127778',
    alignItems: 'center',
    justifyContent: 'center',
  },

  filas: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    alignContent:'center',
    width:350,
    height:200,
    backgroundColor:'#14a192',
  },

  elementos: {
    width: 100,
    height: 150,
    backgroundColor:'#686868',
    marginLeft:5,
    borderWidth:5,
    borderColor: 'black',
    borderStyle:'solid',
    borderRadius: 10,
    opacity:0.7,
  },
  cabecera:{
    width: 350,
    height: 100,
    backgroundColor: '#2c9d92',
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  itemcabecera:{
    width: 300,
    height: 80,
    backgroundColor:'#2d8171',
    borderWidth:5,
    borderStyle:'ridge',
    alignContent:'center',
    flexDirection:'row',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  

});