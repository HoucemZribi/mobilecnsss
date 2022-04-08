import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Logo from "../../../assets/images/Logo_1.jpg";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const SignInScreen = () => {
  const [numpieceiden, setNumpieceiden] = useState(""); 0
  const [passoword, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const baseUrl = "localhost:8090";
  // Passing configuration object to axios
  axios({
    method: "get",
    url: `${baseUrl}/api/users/1`,
  }).then((response) => {
    console.log(response.data);
  });
  axios.get(`${baseUrl}/api/users/1`).then((response) => {
    console.log(response.data);
  });
  const onSignInPressed = () => {
    navigation.navigate("EmployeurScreen");
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate("OnForgotPassword");
  };
  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="Numéro pièce d'identité"
        value={numpieceiden}
        setValue={setNumpieceiden}
      />

      <CustomInput
        placeholder="Mot de passe"
        value={passoword}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomButton text="Ouvrir une session" onPress={onSignInPressed} />
      <CustomButton
        text="Mot de passe oublié"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />
      <CustomButton
        text="Créer un compte "
        onPress={onSignUpPressed}
        type="TERTIARY"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 25,
    paddingTop: 90,
  },
  logo: {
    paddingVertical: 50,
    paddingBottom: 150,
    marginVertical: 15,
    borderColor: "green",
    borderWidth: 5,
    width: "100%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
