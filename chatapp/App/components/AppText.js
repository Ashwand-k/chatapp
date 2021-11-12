import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
// import colors from "../config/colors";
// import DefaultStyle from "../config/DefaultStyle";
const AppText = ({ children, text, style }) => {
  return (
    <Text>
      {children}
      {text}
    </Text>
  );
};

export default AppText;
const styles = StyleSheet.create({
 
});
