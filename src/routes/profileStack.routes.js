import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import ProfilePage from "../pages/Profile/ProfilePage";
import InformacoesConta from "../pages/InformacoesConta";
import MeusPedidos from "../pages/MeusPedidos";
import { StoreContext } from "./routes";
import IniciarLogin from "../pages/Profile/IniciarLogin";
import ProfileControl from "../pages/Profile/PorfileControl";
import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const { Screen, Navigator } = createNativeStackNavigator();

const CustomHeaderBackButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
    <AntDesign style={{marginEnd: 10}} name="arrowleft" size={24} color="black" />
  </TouchableOpacity>
);

export function ProfileStackRoutes() {
  const { store } = useContext(StoreContext);

  return (
    <Navigator>
      <Screen
        name="ProfileControl"
        component={ProfileControl}
        options={{
          headerShadowVisible: false,
          title: "",
          unmountOnBlur: true, // Adicionando a opção unmountOnBlur
        }}
      />
      <Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          headerShadowVisible: false,
          title: "Conta",
          headerShown: false
        }}
      />
      <Screen
        name="IniciarLogin"
        component={IniciarLogin}
        options={{ headerShadowVisible: false, title: "" }}
      />
      <Screen
        name="InformacoesConta"
        component={InformacoesConta}
        options={({ navigation }) => ({
          headerShadowVisible: false,
          title: "Informações da Conta",
          headerLeft: () => (
            <CustomHeaderBackButton navigation={navigation} />
          ),
        })}
      />
      <Screen
        name="MeusPedidos"
        component={MeusPedidos}
        options={{ headerShadowVisible: false, title: "Meus Pedidos" }}
      />
    </Navigator>
  );
}
