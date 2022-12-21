import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export const CustomButton = ({ onPress, text, type="PRIMARY", style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`], style]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    borderRadius: 20,
  },
  container_PRIMARY: {
    marginTop: 20,
    marginBottom: 35,
    paddingVertical: 18,
    backgroundColor: "#FFC612",
  },
  container_TERTIARY: {
    marginTop: 20,
    marginBottom: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  text_TERTIARY: {
    alignSelf: "flex-end",
    color: "#9795A4",
    fontSize: 14,
    fontWeight: "400",
  },
});
