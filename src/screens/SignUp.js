import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { PasswordInput } from "../components/PasswordInput";
import { EmailInput } from "../components/EmailInput";
import { checkCountryValidity } from "../utils/checkCountryValidity";
import { checkPhoneNumberValidity } from "../utils/checkPhoneNumberValidity";
import { checkCodeValidity } from "../utils/checkCodeValidity";
import { checkNameValidity } from "../utils/checkNameValidity";
import { checkEmailValidity } from "../utils/checkEmailValidity";
import { checkPasswordValidity } from "../utils/checkPasswordValidity";
import * as SQLite from "expo-sqlite";
import { deleteTable } from "../utils/deleteTable";

export default function SignUp() {
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [position, setPosition] = useState("");
  const [skype, setSkype] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [profile, setProfile] = useState(null);
  const navigation = useNavigation();

  const db = SQLite.openDatabase("MainDB.db");

  useEffect(() => {
    // deleteTable();

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM profiles",
        [],
        (txObj, resultSet) => {
          setProfiles(resultSet.rows._array);
        },
        (txObj, error) => console.log("Error", error)
      );
    });
  }, []);

  const onNextPressed = () => {
    const checkCountry = checkCountryValidity(countryCode);
    const checkPhone = checkPhoneNumberValidity(phone);
    const codeEntered = code1 + code2 + code3 + code4;
    setCode(codeEntered);
    const checkCode = checkCodeValidity(codeEntered);
    const checkName = checkNameValidity(name);
    const checkEmail = checkEmailValidity(email);
    const checkPassword = checkPasswordValidity(password);

    if (checkCountry) {
      alert(checkCountry);
    } else if (checkPhone) {
      alert(checkPhone);
    } else if (checkCode) {
      alert(checkCode);
    } else if (checkName) {
      alert(checkName);
    } else if (checkEmail) {
      alert(checkEmail);
    } else if (checkPassword) {
      alert(checkPassword);
    } else if (passwordRepeat !== password) {
      alert("Your passwords do not match.");
    } else if (profiles.some((profile) => profile.email === email)) {
      alert("User already exists.");
    } else {
      const phoneNumber = countryCode + phone;

      navigation.navigate("EditProfile", {
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        position: position,
        skype: skype,
      });
    }
  };

  const onLogInPressed = () => {
    navigation.navigate("LogIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
        <Text style={styles.text}>Sign Up To Woorkroom</Text>
        <Text style={styles.text1}>Phone Number</Text>
        <TextInput
          style={styles.phone_country_input}
          value={countryCode}
          onChangeText={setCountryCode}
          placeholder={"+1 "}
          maxLength={4}
        />
        <TextInput
          style={styles.phone_number_input}
          placeholder={"345567235"}
          value={phone}
          onChangeText={setPhone}
          maxLength={12}
        />
        <Text style={styles.text1}>Code</Text>
        <View style={styles.codebox}>
          <TextInput
            style={styles.code_input}
            value={code1}
            onChangeText={setCode1}
            maxLength={1}
          />
          <TextInput
            style={styles.code_input}
            value={code2}
            onChangeText={setCode2}
            maxLength={1}
          />
          <TextInput
            style={styles.code_input}
            value={code3}
            onChangeText={setCode3}
            maxLength={1}
          />
          <TextInput
            style={styles.code_input}
            value={code4}
            onChangeText={setCode4}
            maxLength={1}
          />
        </View>
        <Text style={styles.text1}>Your Name</Text>
        <CustomInput
          placeholder={"Enter full name"}
          value={name}
          onChangeText={setName}
          secureTextEntry={false}
          maxLength={30}
        />
        <Text style={styles.text1}>Your Email</Text>
        <EmailInput email={email} setEmail={setEmail} />
        <Text style={styles.text1}>Password</Text>
        <PasswordInput
          placeholder={"Enter password"}
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.text1}>Confirm Password</Text>
        <PasswordInput
          placeholder={"Repeat password"}
          value={passwordRepeat}
          onChangeText={setPasswordRepeat}
        />
        <CustomButton text={"Next"} onPress={onNextPressed} />
        <Text style={styles.text2}>
          Have Account?{" "}
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
  codebox: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
  },
  phone_country_input: {
    width: "20%",
    height: 40,
    marginTop: 10,
    paddingLeft: 10,
    alignSelf: "flex-start",
    borderColor: "#D7D7D7",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    fontWeight: "500",
  },
  code_input: {
    width: "15%",
    height: 40,
    marginTop: 10,
    marginRight: 15,
    alignSelf: "flex-start",
    textAlign: "center",
    borderColor: "#D7D7D7",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    fontWeight: "500",
  },
  phone_number_input: {
    position: "absolute",
    width: "75%",
    height: 40,
    marginTop: 10,
    paddingLeft: 10,
    alignSelf: "flex-end",
    borderColor: "#D7D7D7",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    fontWeight: "500",
    transform: [{ translateY: 285 }, { translateX: -28 }],
  },
});
