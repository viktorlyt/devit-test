import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { PasswordInput } from "../components/PasswordInput";
import { EmailInput } from "../components/EmailInput";
import { checkPasswordValidity } from "../utils/checkPasswordValidity";
import { checkEmailValidity } from "../utils/checkEmailValidity";
import * as SQLite from "expo-sqlite";
import { createTable } from "../utils/createTable";

export default function LogIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profiles, setProfiles] = useState([]);

  const navigation = useNavigation();

  const db = SQLite.openDatabase("MainDB.db");

  useEffect(() => {
    createTable();

    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM profiles", [], (txObj, resultSet) => {
        setProfiles(resultSet.rows._array);
      });
    });
  }, []);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM profiles", [], (txObj, resultSet) => {
        setProfiles(resultSet.rows._array);
      });
    });
  }, [email]);

  const onLogInPressed = () => {
    const checkPassword = checkPasswordValidity(password);
    const checkEmail = checkEmailValidity(email);

    if (!checkPassword & !checkEmail) {
      if (
        !profiles.some((profile) => {
          return profile.email === email;
        })
      ) {
        alert("User does not exists.");
      } else {
        const index = profiles.findIndex((profile) => profile.email === email);
        if (profiles[index].password !== password) {
          alert("Wrong password");
        } else {
          navigation.navigate("Home");
        }
      }
    } else if (checkEmail) {
      alert(checkEmail);
    } else if (checkPassword) {
      alert(checkPassword);
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onCreateAccountPressed = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
        <Text style={styles.text}>Log In To Woorkroom</Text>
        <Text style={styles.text1}>Your Email</Text>
        <EmailInput value={email} setEmail={setEmail} />
        <Text style={styles.text1}>Password</Text>
        <PasswordInput
          placeholder={"Enter password"}
          value={password}
          onChangeText={setPassword}
        />
        <CustomButton
          text={"Forgot password?"}
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton text={"Log In"} onPress={onLogInPressed} />
        <Text style={styles.text2}>
          New User?{" "}
          <Text style={styles.link} onPress={onCreateAccountPressed}>
            Create Account
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
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "500",
    color: "#1F1D1D",
  },
  text1: {
    alignSelf: "flex-start",
    marginTop: 24,
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
