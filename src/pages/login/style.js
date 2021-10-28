import { StyleSheet } from "react-native";
import { withOrientation } from "react-navigation";

const style = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 0,
      borderColor: "#000000",
      borderBottomWidth: 0,
      backgroundColor: "rgba(40,40,47,1)"
    },
    logo: {
      fontFamily: "advent-pro-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 50,
      marginTop: 50,
      marginLeft: 135
    },
    bTNlogin: {
      height: 46,
      width: 281,
      marginTop: 0,
      marginLeft: 40
    },
    lBLuser: {
      height: 43,
      width: 281,
      borderWidth: 1,
      borderColor: "rgba(255,255,255,1)",
      marginTop: 0,
      marginLeft: 40
    },
    lBLpassword: {
      height: 43,
      width: 281,
      borderWidth: 1,
      borderColor: "rgba(255,255,255,1)",
      marginTop: 10,
      marginLeft: 40
    }
  });
  
  export default style