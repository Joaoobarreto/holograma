//web 469211980310-f9q6pcbeocs1m24u3qc3hv1ic255jlg4.apps.googleusercontent.com
//ios 469211980310-9sos1t1g132p432k9hq3nuqd3ie15jml.apps.googleusercontent.com
//android 469211980310-q1jvtmpl95oi7q6sm69uqinhvqjbd30d.apps.googleusercontent.com

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "469211980310-q1jvtmpl95oi7q6sm69uqinhvqjbd30d.apps.googleusercontent.com",
    iosClientId: "469211980310-9sos1t1g132p432k9hq3nuqd3ie15jml.apps.googleusercontent.com",
    webClientId: "469211980310-f9q6pcbeocs1m24u3qc3hv1ic255jlg4.apps.googleusercontent.com",
    expoClientId: "469211980310-f9q6pcbeocs1m24u3qc3hv1ic255jlg4.apps.googleusercontent.com"
  })

  React.useEffect(() => {
    handleSingInWithGoogle();
  }, [response])

  async function handleSingInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if(!user) {
      if(response?.type === "success") {
        await getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token) => {
    if(!token) return;
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
    } catch (error) {

    }
  }

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(userInfo, null, 2)}</Text>
      <Text>Open up App.js to start working on your app!</Text>
      {!userInfo ? (
      <Button title="Sign in with Google" onPress={promptAsync} />
      ) : (<Text>Seja Bem-vindo {userInfo.name}</Text>)}
      <Button title="delete local storage" onPress={() => AsyncStorage.removeItem("@user")}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
