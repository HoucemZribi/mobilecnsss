import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import MyDatePicker from "./myDate";

const SignUpScreen = () => {
  const [matriculecnss, setMatriculecnss] = useState("");
  const [numpiecedient, setNumpiecedient] = useState("");
  const [selectedValue, setSelectedValue] = useState("CIN");

  const [email, setEmail] = useState("");
  const [numtel, setNumtel] = useState("");

  const [passoword, setPassword] = useState("");
  const [passowordRepeat, setPassowordRepeat] = useState("");

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    console.warn("Register ");
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed  ");
  };
  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.root}>
        <Text style={styles.title}>Créer un compte </Text>

        <CustomInput
          placeholder="Matricule CNSS"
          value={matriculecnss}
          setValue={setMatriculecnss}
        />
        <CustomInput
          placeholder="Numéro pièce d'identité"
          value={numpiecedient}
          setValue={setNumpiecedient}
        />
        <Text style={styles.tpi}>Type pièce d'identité : </Text>
        <Picker
          selectedValue={selectedValue}
          style={styles.pick}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="CIN" value="CIN" />
          <Picker.Item label="Passport" value="Passport" />
          <Picker.Item label="Carte séjour" value="Carte séjour" />
        </Picker>

        <CustomInput placeholder="emaill" value={email} setValue={setEmail} />
        <Text style={styles.tpi}>Date de naissance : </Text>
        <MyDatePicker />
        <CustomInput
          placeholder="Numéro de tel portable"
          value={numtel}
          setValue={setNumtel}
        />

        <CustomInput
          placeholder="Mot de passe"
          value={passoword}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Confirmez mot de passe "
          value={passowordRepeat}
          setValue={setPassowordRepeat}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            {" "}
            terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <CustomButton
          text="J'ai un compte "
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
  root: {
    alignItems: "center",
    padding: 20,
    paddingTop: 30,
  },
  pick: {
    height: 50,
    width: 150,
  },
  dtp: {
    width: "100 %",
  },
  tpi: {
    fontWeight: "500",
    alignSelf: "flex-start",
    fontSize: 16,
    marginTop: 4,
    color: "#051C60",
    padding: 3,
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default SignUpScreen;
