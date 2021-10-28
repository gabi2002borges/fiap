import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(40,40,47,1)",
      borderWidth: 1,
      borderColor: "#000000"
    },
    header: {
      width: 360,
      height: 95,
      backgroundColor: "#fff",
      marginTop: 18
    },
    back: {
      top: 84,
      left: 0,
      width: 360,
      height: 95,
      position: "absolute",
      backgroundColor: "rgba(208,2,27,1)"
    },
    logo: {
      fontFamily: "advent-pro-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      marginTop: 6
    },
    bTNexit: {
      height: 36,
      width: 36,
      marginLeft: 170
    },
    logoRow: {
      height: 36,
      flexDirection: "row",
      marginTop: 4,
      marginLeft: 96,
      marginRight: 12
    },
    bTNformulario: {
      height: 36,
      width: 100,
      backgroundColor: "rgba(208,2,27,1)"
    },
    bTNacompanhamento: {
      height: 36,
      width: 131,
      backgroundColor: "rgba(40,40,47,1)",
      marginLeft: 41
    },
    bTNformularioRow: {
      height: 36,
      flexDirection: "row",
      marginTop: 19,
      marginLeft: 46,
      marginRight: 42
    },
    iMGsenai: {
      top: 0,
      left: 6,
      width: 81,
      height: 212,
      position: "absolute"
    },
    backStack: {
      width: 360,
      height: 212,
      marginTop: -84
    }
  });

  export default style