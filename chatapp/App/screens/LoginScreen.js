

import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet,Text,Button, ImageBackground, TouchableOpacity} from 'react-native';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import SubmitButton from '../components/SubmitButton';
import AppButton from '../components/AppButton';
import * as yup from 'yup'
// import AppButton from '../app/component/AppButton';
// import colors from '../app/component/config/colors';
const loginValidationSchema =yup.object().shape ({ 
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required')
    .matches("@gmail.com"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .matches(
      /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required('Password is required'),
})
function LoginScreen1({navigation}) {
  return (
   
  
    <View style={styles.container}>
        
<Text style={styles.text}> Welcome !</Text>
<Formik 
initialValues={{email:"",password:""}}
onSubmit={values=>console.log(values)}
validationSchema={loginValidationSchema}>
 {({handleChange, handleBlur, handleSubmit,values,errors,isValid,touched,setFieldTouched})=>(
       <>
       <View style={styles.APP}>
         <AppText style={styles.addtext}>EMAIL</AppText>
<AppTextInput placeholder="Email" keyboardType="email-address"

autoCorrect={false}
onChangeText={handleChange("email")}>
</AppTextInput>
{(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>}
                    <AppText style={styles.addtext}>PASSWORD</AppText>
                  <AppTextInput placeholder="password" keyboardType="default"

autoCorrect={false} 
secureTextEntry={true}
onChangeText={handleChange("password")}
onBlur= { ()=>setFieldTouched("password")}>
 
</AppTextInput>
{(errors.password && touched.password) &&

                  <Text style={styles.errorText}>{errors.password}</Text>}
       {/* <Button onPress={()=>navigation.navigate('RegisterScreen')}/>            */}

  <AppButton title="LOGIN " color= "primary" mypress= {()=>navigation.navigate('Chat')}  ></AppButton> 

{/* <Button title="signin"  color="#F46B6B" onPress={() =>navigation.push('Profile')}></Button> */}
{/* <AppButton title="LOGIN " color= "primary" mypress= {()=>{console.log('on login')}}  ></AppButton> */}
</View>
       </>
          )}
</Formik>
  <TouchableOpacity onPress={()=>navigation.navigate('RegisterScreen')} style={{top:380,justifyContent:"center",alignItems:"center"}} ><Text>Need Account</Text></TouchableOpacity>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#F7C9C9",
    flex:1,
 
  },
  text:{
    fontSize:35,
    color:"red",
    justifyContent:"center",
    alignSelf:"center",
    top:120
  },
  APP:{
    top:180,
width:"100%",
height:70,
borderRadius:50,

  },
  errorText:{
    color:"red",
    fontSize:15,
    fontWeight:"bold"
},
add:{
  justifyContent:"center",
  alignSelf:"center",
  fontSize:10,
  top:440

},addtext:{
  fontSize:15,

}

});

export default LoginScreen1;