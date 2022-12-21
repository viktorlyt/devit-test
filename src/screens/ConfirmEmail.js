import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";

export default function ConfirmEmail() {
  const [code, setCode] = useState("");
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    // validate user

    navigation.navigate("Home");
  };

  const onResendCodePressed = () => {
    console.warn("ReSend");
  };

  const onBackToSignInPressed = () => {
    navigation.navigate("LogIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
        <Text style={styles.text}>Confirm Your Email</Text>
        <Text style={styles.text1}>Your code</Text>
        <CustomInput
          placeholder={"Enter your confirmation code here"}
          value={code}
          setValue={setCode}
          secureTextEntry={false}
        />

        <CustomButton text={"Confirm"} onPress={onConfirmPressed} />

        <View style={styles.text2}>
          <Text style={styles.link} onPress={onResendCodePressed}>
            Resend Code
          </Text>
          <Text style={styles.link} onPress={onBackToSignInPressed}>
            Back to Sign In
          </Text>
        </View>
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
    flex: 0,
    width: '100%',
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-between",
    color: "#9795A4",
  },
  link: {
    color: "#FFC612",
  },
});
