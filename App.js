import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

//for customizing start button:
const StartButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.btnStart}>
    <Text style={styles.startBtnText}>{title}</Text>
  </TouchableOpacity>
);


export default function App() {
  return (
    <View style={styles.container}>
   <StartButton title="START"  size = "sm"  ></StartButton>
    </View>
  );
}

const styles = StyleSheet.create({
  //for main view
  container: {
    flex: 1,
    backgroundColor:'pink' ,
    justifyContent: 'center',
   // padding:16 ,
    alignContent:'center' ,
    flexDirection:'column' ,
  },
  //for button
  btnStart:{
   elevation: 19,    //means shadow for btn 
   paddingVertical:10 ,
   paddingHorizontal:12 ,
   backgroundColor:'orange' ,
   borderRadius:68,
   alignItems:'center',
   justifyContent: 'center',
  } ,
  //text in btn
  startBtnText:{
    fontSize:25 ,
    color:'white' ,
    fontWeight:'bold' ,
    alignSelf:'center'
  } ,
  
 
});
