import { View, TextInput, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { checkEmailValidity } from "../utils/checkEmailValidity";

export const EmailInput = ({ value, setEmail }) => {
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder={"Enter email"}
          value={value}
          style={styles.input}
          secureTextEntry={false}
          selectionColor={'gray'}
          onChangeText={(text) => {
            setEmail(text);
            checkEmailValidity(text)
              ? setCheckValidEmail(true)
              : setCheckValidEmail(false);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 12,

    color: "#1F1D1D",
    borderBottomWidth: 1,
    borderColor: "#D7D7D7",
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
  },
  textFailed: {
    alignSelf: "flex-end",
    color: "red",
  },
});
