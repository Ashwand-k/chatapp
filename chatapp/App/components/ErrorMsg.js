import React from "react";
import { StyleSheet, View,Image,Text} from 'react-native';
import AppText from "./AppText";
import colors from "../Config/colors";
import DefaultStyle from "../Config/DefaultStyle";
const ErrorMsg = ({error}) => {
  if(!error) return null;
  return (
    <>
    
    <AppText style={styles.continer}>{error}</AppText>  
    </>
  );
};

const styles = StyleSheet.create({
  continer: {
 color:colors.primary
  },

});
export default ErrorMsg;
