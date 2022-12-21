import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { checkEmailValidity } from "../utils/checkEmailValidity";
import { CustomButton } from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { EmailInput } from "../components/EmailInput";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const onSendPressed = () => {
    const checkEmail = checkEmailValidity(email);
    if (checkEmail) {
      alert(checkEmail);
    } else {
      navigation.navigate("NewPassword");
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
        <Text style={styles.text1}>Your Email</Text>
        <EmailInput value={email} setEmail={setEmail} />
        <CustomButton text={"Send"} onPress={onSendPressed} />
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
