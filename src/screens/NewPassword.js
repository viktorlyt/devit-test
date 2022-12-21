import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { PasswordInput } from "../components/PasswordInput";
import { checkPasswordValidity } from "../utils/checkPasswordValidity";

export default function NewPassword() {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    const checkPassword = checkPasswordValidity(newPassword);
    if (code === "") {
      alert("Please enter code");
    } else if (!checkPassword) {
      navigation.navigate("Home");
    } else {
      alert(checkPassword);
    }
  };

  const onLogInPressed = () => {
    navigation.navigate("LogIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
        <Text style={styles.text}>Reset Your Password</Text>
        <Text style={styles.text1}>Code</Text>
        <CustomInput
          placeholder={"Enter code from email"}
          value={code}
          onChangeText={setCode}
          secureTextEntry={false}
        />
        <Text style={styles.text1}>New Password</Text>
        <PasswordInput
          placeholder={"Enter your new password"}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <CustomButton text={"Submit"} onPress={onSubmitPressed} />
        <Text style={styles.text2}>
          Back to{" "}
          <Text style={styles.link} onPress={onLogInPressed}>
            Log In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 30,
  },
  scroll: {
    width: "100%",
  },
  logo: {
    top: 0,
    width: 68,
    height: 90,
    marginBottom: 70,
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
    color: "#1F1D1D",
  },
  text1: {
    alignSelf: "flex-start",
    marginTop: 45,
    fontSize: 14,
    color: "#9795A4",
  },
  text2: {
    color: "#9795A4",
  },
  link: {
    color: "#FFC612",
  },
});
