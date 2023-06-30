import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, TextInput } from 'react-native';
import { StoreContext } from '../../routes/routes';
import UsuarioService from "../../services/UsuarioService.service";

export default function InformacoesConta() {
  const { store } = useContext(StoreContext);
  const verificarEdicao = () => {
    if (store.usuario?.email && (!store.usuario?.cpf || store.usuario?.telefone))
    return true
    else return false
  }
  const [alterar, setAlterar] = useState(verificarEdicao());
  const [nome, setNome] = useState(store.usuario.nome);
  const [cpf, setCpf] = useState(store.usuario.cpf);
  const [telefone, setTelefone] = useState(store.usuario.telefone);
  const [email, setEmail] = useState(store.usuario.email);

  const handleSalvar = () => {
    if(!store.usuario?.id) {
        var userCriar = {
            nome: nome,
            email: email,
            cpf: cpf,
            telefone: telefone,
            token: store.usuario.token
        }
        UsuarioService.criarUsuario(userCriar).then(
            obj => {
                store.usuario = obj
            }
        )
    } else {
        var userAtualizar = {
            id: store.usuario.id,
            nome: nome,
            email: email,
            cpf: cpf,
            telefone: telefone,
            endereco: store.usuario.endereco
        }
        UsuarioService.atualizarUsuario(userAtualizar).then(
            obj => {
                store.usuario = obj
            }
        )
    }

    setAlterar(false);
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.subtitulo}>Nome de Usuário</Text>
        {alterar ? (
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />
        ) : (
          <Text style={styles.texto}>{store.usuario.nome}</Text>
        )}
      </View>
      <View>
        <Text style={styles.subtitulo}>CPF</Text>
        {alterar ? (
          <TextInput
            style={styles.input}
            value={cpf}
            onChangeText={setCpf}
          />
        ) : (
          <Text style={styles.texto}>{store.usuario.cpf}</Text>
        )}
      </View>
      <View>
        <Text style={styles.subtitulo}>Email</Text>
        {alterar ? (
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        ) : (
          <Text style={styles.texto}>{store.usuario.email}</Text>
        )}
      </View>
      <View>
        <Text style={styles.subtitulo}>Telefone</Text>
        {alterar ? (
          <TextInput
            style={styles.input}
            value={telefone}
            onChangeText={setTelefone}
          />
        ) : (
          <Text style={styles.texto}>{store.usuario.telefone}</Text>
        )}
      </View>
      {alterar ? (
        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.alterarButton}
          onPress={() => setAlterar(true)}
        >
          <Text style={styles.alterarButtonText}>Alterar</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subtitulo: {
    fontStyle: "italic",
    fontWeight: "100",
    fontSize: 22,
    marginTop: 30,
    marginLeft: 20,
  },
  texto: {
    color: "#0001FC",
    marginLeft: 20,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    marginLeft: 20,
    fontSize: 16,
    padding: 5,
    width: "90%"
  },
  alterarButton: {
    backgroundColor: "#0001FC",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 40,
  },
  alterarButtonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
