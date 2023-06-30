import { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StoreContext } from "../routes/routes";
import UsuarioService from "../services/UsuarioService.service";

WebBrowser.maybeCompleteAuthSession();

export default function Login({navigation}) {
  const { store } = useContext(StoreContext);
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "469211980310-q1jvtmpl95oi7q6sm69uqinhvqjbd30d.apps.googleusercontent.com",
    iosClientId:
      "469211980310-9sos1t1g132p432k9hq3nuqd3ie15jml.apps.googleusercontent.com",
    webClientId:
      "469211980310-f9q6pcbeocs1m24u3qc3hv1ic255jlg4.apps.googleusercontent.com",
    expoClientId:
      "469211980310-f9q6pcbeocs1m24u3qc3hv1ic255jlg4.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleEffect();
  }, [response, token]);

  const consultarUsuario = (user) => {
    UsuarioService.getUsuarioPorToken(user.id).then(
      obj => {
        obj?.nome ? 
        store.usuario = {
          id: obj.id,
          nome: obj.nome,
          email: obj.email,
          telefone: obj.telefone,
          cpf: obj.cpf,
          token: obj.token,
          endereco: obj.endereco
        }
        : 
        store.usuario = {
          nome: user?.name,
          email: user?.email,
          foto: user?.picture,
          token: user?.id
        }
      }
    )
  }

  const setStore = async (user) => {
    user ? 
    consultarUsuario(user) : store.usuario = {}
    if(!!store.usuario?.email){
    navigation.navigate('ProfilePage')}
    else
    navigation.navigate('IniciarLogin')
  }

  async function handleEffect() {
    const user = await getLocalUser();
    if (!user) {
      if (response?.type === "success") {
        // setToken(response.authentication.accessToken);
        getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(user);
      setStore(user)
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
      setStore(user)
    } catch (error) {
      // Add your own error handler here
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("@user");
      setUserInfo(null); 
      setStore(null)
    } catch (error) {
      console.log("Erro ao fazer logout:", error);
    }
  }
  

  return (
    <View style={styles.container}>
      {!store.usuario?.email ? (
        <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
          <Text style={styles.buttonText}>Conectar-se com o Google</Text>
        </TouchableOpacity>
      ) : <TouchableOpacity style={styles.buttonSair} onPress={logout}>
            <Text style={styles.sair}>Sair</Text>
          </TouchableOpacity>
      }
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    height: 60,
    width: 300,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: "#0001FC",
    fontSize: 18,
    fontStyle: "italic",
  },
  buttonSair: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 300,
    borderRadius: 8,
  },
  sair: {
      textAlign: 'center',
      color: 'red',
      fontSize: 24,
      marginTop: 20
    }
});
