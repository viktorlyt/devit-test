import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";

export const PasswordInput = ({ value, onChangeText, placeholder }) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecureEntry}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => {
          setIsSecureEntry((prev) => !prev);
        }}
      >
        <Image
          source={
            isSecureEntry
              ? require("../../assets/eye_open.png")
              : require("../../assets/eye_close.png")
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
