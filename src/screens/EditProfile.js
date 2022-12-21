import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";
import { createTable } from "../utils/createTable";

export default function EditProfile({_, route }) {
  const [phoneNumber, setPhoneNumber] = useState(route.params.phoneNumber);
  const [name, setName] = useState(route.params.name);
  const [email, setEmail] = useState(route.params.email);
  const [position, setPosition] = useState("");
  const [skype, setSkype] = useState("");
  const [password, setPassword] = useState(route.params.password);
  const [profiles, setProfiles] = useState([]);
  // const [profile, setProfile] = useState({});
  const navigation = useNavigation();

  const db = SQLite.openDatabase("MainDB.db");

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM profiles", [], (txObj, resultSet) => {
        setProfiles(resultSet.rows._array);
        console.log("nowwwwww", resultSet.rows._array);
      });
    });
  }, []);

  const onSavePressed = () => {
    if (profiles.some((profile) => profile.email === email)) {
      alert("User already exists.");
      console.log("existing users", profiles);
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO profiles (name, email, password, phoneNumber, position, skype) VALUES (?,?,?,?,?,?)",
        [name, email, password, phoneNumber, position, skype],
        (txObj, resultSet) => {
          let existingProfiles = [...profiles];
          existingProfiles.push({
            id: resultSet.insertId,
            name: name,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            position: position,
            skype: skype,
          });
          setProfiles(existingProfiles);
          console.log("added successfully", existingProfiles);
        },
        (txObj, error) => console.log("Error on adding profile ", error)
      );
    });
    navigation.navigate("Home");
  };

  const onLogInPressed = () => {
    navigation.navigate("LogIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.text3}>Edit Profile</Text>
        <Text style={styles.link} onPress={onLogInPressed}>
          Log Out
        </Text>
        <Image
          style={styles.photo}
          source={require("../../assets/Photo.png")}
        />
        <Image style={styles.edit} source={require("../../assets/edit.png")} />
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text4}>{position}</Text>
        <Text style={styles.text1}>Name</Text>
        <CustomInput
          placeholder={"e.g.John Doe"}
          value={name}
          onChangeText={setName}
          secureTextEntry={false}
        />
        <Text style={styles.text1}>Email</Text>
        <CustomInput
          placeholder={"e.g.mike_tyson@gmail.com"}
          value={email}
          onChangeText={setEmail}
          secureTextEntry={false}
        />
        <Text style={styles.text1}>Phone</Text>
        <CustomInput
          placeholder={"Phone Number"}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          secureTextEntry={false}
        />
        <Text style={styles.text1}>Position</Text>
        <CustomInput
          placeholder={"Your position"}
          value={position}
          onChangeText={setPosition}
          secureTextEntry={false}
        />
        <Text style={styles.text1}>Skype</Text>
        <CustomInput
          placeholder={"Your Skype"}
          value={skype}
          onChangeText={setSkype}
          secureTextEntry={false}
        />
        <CustomButton text={"Save"} onPress={onSavePressed} />
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
  photo: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  edit: {
    position: "absolute",
    zIndex: 2,
    width: 24,
    height: 24,
    borderRadius: 24,
    transform: [{ translateY: 142 }, { translateX: 22 }],
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
    color: "#1F1D1D",
  },
  text3: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "#1F1D1D",
  },
  text1: {
    alignSelf: "flex-start",
    marginTop: 20,
    fontSize: 14,
    color: "#9795A4",
  },
  text4: {
    alignSelf: "center",
    // marginTop: 45,
    fontSize: 14,
    color: "#9795A4",
  },
  text2: {
    color: "#9795A4",
  },
  link: {
    alignSelf: "flex-end",
    fontSize: 16,
    fontWeight: "500",
    color: "#FFC612",
    transform: [{ translateY: -22 }],
  },
});
