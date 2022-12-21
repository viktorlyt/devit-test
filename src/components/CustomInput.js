import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

export const CustomInput = ({
  value,
  placeholder,
  secureTextEntry,
  onChangeText,
  maxLength,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        cursorColor={'gray'}
        maxLength={maxLength}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 3,

    color: "#1F1D1D",
    borderBottomWidth: 1,
    borderColor: "#D7D7D7",
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
  },
});
