import React from 'react';
import { View ,StyleSheet, ImageBackground, Image, TouchableOpacity,Text, TouchableHighlight} from 'react-native';
import AppButton from '../components/AppButton';


const WelcomeScreen = ({navigation}) =>
{
   return(
       
    <ImageBackground  style = { styles.backgroundImage}source = {
      require('../../assets/index.png') 
   
    } > 
   <View style={styles.logoandtext}>
    
            <Text style={styles.textclr}>Chating-App</Text>
            </View>

          
<AppButton title="Get started" color= "primary" mypress={()=>navigation.navigate('LoginScreen1')} ></AppButton>
       </ImageBackground>
 
    );
 
 }

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    padding:50,
    marginBottom:50 
  },
  logo:{
width:"100%",
height:40,
backgroundColor:'#fc5c65',
borderRadius:35,
margin:30,
justifyContent:'center',
alignItems:'center',
top:150,

  },
  register:{
    width:"100%",
    height:40,
    backgroundColor:'#4ECDC4',
    borderRadius:35,
   marginBottom:50,
   justifyContent:'center',
   alignItems:'center'
  },
  lom:{
    width:50,
    height:50,
   alignItems:'center',
   justifyContent:'center',
   left:40
  },
  backgroundImage:{

    flex:1,
    justifyContent:'flex-end',
    alignItems:"center",
 width:"100%",
 height:"100%"
  },

  logoandtext:{
       
    position:"absolute",
    top:380,
    color:"red",
    fontSize:45,
   
},
text :{
  color:'#539adb',
  fontSize:25,
  
 
  padding:10,
  
  
        },
        textclr:{
          fontSize:20,
          color:"#fcfcfc",
          top:80,
        }
        
});
export default WelcomeScreen;

