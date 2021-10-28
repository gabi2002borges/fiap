import React, { useState, useEffect, Component } from "react";
import { StyleSheet, TouchableOpacity, View,  Text, Platform, KeyboardAvoidingView } from "react-native";
import style from "./style"
import firebase from "../../config/firebaseconfig";
import MaterialIconTextbox from "../../components/MaterialIconTextbox";
import MaterialIconTextbox1 from "../../components/MaterialIconTextbox1";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const LoginFirebase = () => {
      firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
          let user = userCredential.user;
          navigation.navigate("Formulario")
      })
          .catch((error) => {
              setErrorLogin(true)
              let errorCode = error.code;
              let errorMessage = error.message;
          });
  }

  useEffect(() => {
      firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
              navigation.navigate("Formulario", { idUser: user.uid })
          }
      });
  }, []);

  return (
    <View style={style.container}>
      <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "paddingTop" : "height"}
                    style={style.container}
      >
        <Text style={style.logo}>FIAP</Text>

        <MaterialIconTextbox 
          style={style.lBLuser}
          placeholder="EMAIL"
          placeholderTextColor = "white"
          type="text"
          onChangeText={(text) => setEmail(text)}
          value={email}>
        </MaterialIconTextbox>

        <MaterialIconTextbox1 
        style={style.lBLpassword}
        secureTextEntry={true}
        placeholder="SENHA"
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
        >
        </MaterialIconTextbox1>

        {errorLogin === true
            ?
            <View style={style.contentAlert}>
              <MaterialCommunityIcons
              name="alert-circle"
              size={24}
              color="#bdbdbd"
              />
              <Text style={style.warningAlert}> Email ou senha invalido</Text>
            </View>
            :
            <View />
        }

        {email === "" || password === ""
            ?
            <TouchableOpacity
            disabled={true}
            style={style.bTNlogin}
            >
              <Text style={style.bTNlogin}>Login</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
            style={style.bTNlogin}
            onPress={LoginFirebase}
            >
              <Text style={style.bTNlogin}>Login</Text>
            </TouchableOpacity>
        }
      </KeyboardAvoidingView>
    </View>
  );
}

