import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithShadow(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.button}>{props.button || "BUTTON"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(40,40,47,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  button: {
    color: "rgba(255,255,255,1)",
    fontSize: 14
  }
});

export default MaterialButtonWithShadow;
