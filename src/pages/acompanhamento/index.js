import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialButtonTransparentHamburger1 from "../../components/MaterialButtonTransparentHamburger1";
import MaterialButtonWithShadow from "../../components/MaterialButtonWithShadow";
import MaterialButtonWithShadow1 from "../../components/MaterialButtonWithShadow1";
import style from "../acompanhamento/style"



export default function Formulario1(props) {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.backStack}>
          <View style={style.back}>
            <View style={style.logoRow}>
              <Text style={style.logo}>| FIAP</Text>
              <MaterialButtonTransparentHamburger1
                style={style.bTNexit}
              ></MaterialButtonTransparentHamburger1>
            </View>
            <View style={style.bTNformularioRow}>
              <MaterialButtonWithShadow
                button="Formulario"
                style={style.bTNformulario}
              ></MaterialButtonWithShadow>
              <MaterialButtonWithShadow1
                caption="Acompanhamento"
                style={style.bTNacompanhamento}
              ></MaterialButtonWithShadow1>
            </View>
          </View>
          <Image
            //source={require("../../../assets/images/logo.png")}
            resizeMode="contain"
            style={style.iMGsenai}
          ></Image>
        </View>
      </View>
    </View>
  );
}

