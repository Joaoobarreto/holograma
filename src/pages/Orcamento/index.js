import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

export default function Orcamento() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [isFormValid, setFormValid] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModelAdded, setModelAdded] = useState(false);
  const [showConfirmationScreen, setShowConfirmationScreen] = useState(false);

  const handleInputChange = (text, inputType) => {
    if (inputType === "nome") {
      setNome(text);
    } else if (inputType === "observacoes") {
      setObservacoes(text);
    } else if (inputType === "telefone") {
      const numericRegex = /^[0-9]*$/;
      if (numericRegex.test(text)) {
        setTelefone(text);
      }
    }

    if (!isModelAdded) {
      if (nome !== "" && telefone !== "" && observacoes !== "") {
        setFormValid(true);
      } else {
        setFormValid(false);
      }
    }
  };

  const handleAddModelo = async () => {
    if (isFormValid) {
      try {
        const file = await DocumentPicker.getDocumentAsync();
        if (file.type === "success") {
          setSelectedFile(file);
          setModelAdded(true);
        } else {
          Alert.alert("Erro", "Falha ao selecionar o arquivo");
        }
      } catch (error) {
        console.error("Error selecting file:", error);
        Alert.alert("Erro", "Ocorreu um erro ao selecionar o arquivo");
      }
    } else {
      Alert.alert("Aviso", "Preencha todos os campos antes de enviar o modelo");
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View
        style={[
          styles.container,
          showConfirmationScreen && styles.confirmationContainer,
        ]}
      >
        {showConfirmationScreen ? (
          // Confirmation Screen
          <View style={styles.confirmationContent}>
            <View style={[styles.confirmationIcon, styles.blueBackground]}>
              <FontAwesome name="check" size={50} color="white" />
            </View>
            <Text style={styles.confirmationText}>Orçamento Requisitado</Text>
            {selectedFile && (
              <Text style={styles.selectedFileText}>
                Selected File: {selectedFile.name}
              </Text>
            )}
          </View>
        ) : (
          // Form Screen
          <>
            <View style={styles.header}>
              <Text style={styles.headerText}>Orçamento</Text>
              <MaterialCommunityIcons
                name="information"
                size={24}
                color="#0A1034"
              />
            </View>
            <Text style={styles.subHeaderText}>Preencha o formulário abaixo:</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={nome === "" ? "Nome" : ""}
                value={nome}
                onChangeText={(text) => handleInputChange(text, "nome")}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={telefone === "" ? "Telefone" : ""}
                value={telefone}
                onChangeText={(text) => handleInputChange(text, "telefone")}
                keyboardType="numeric"
              />
            </View>

            <View style={[styles.inputContainer, styles.observacoesContainer]}>
              <TextInput
                style={[styles.input, styles.observacoesInput]}
                placeholder={observacoes === "" ? "Observações" : ""}
                value={observacoes}
                onChangeText={(text) => handleInputChange(text, "observacoes")}
                multiline
              />
            </View>

            <Text style={styles.noteText}>
              <Text style={styles.italicText}>
                O orçamento é enviado ao Email cadastrado em até 3 dias úteis.
              </Text>
            </Text>
            <Text style={styles.contactText}>
              Dúvidas sobre pedidos ou orçamentos, entre em contato{" "}
              <Text style={styles.emailHighlight}>teamholo@gmail.com</Text>
            </Text>

            <TouchableOpacity
              onPress={handleAddModelo}
              style={[styles.buttonContainer, styles.addButtonContainer]}
            >
              <Text style={styles.buttonText}>
                {selectedFile ? `Selected File: ${selectedFile.name}` : "Adicionar modelo"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setShowConfirmationScreen(true)}
              style={styles.buttonContainer}
              disabled={!isModelAdded}
            >
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>

            <Text style={styles.infoText}>
              *somente arquivos no formato OBJ, BLEND, MB, DAE, FBX
            </Text>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0A1034",
    marginRight: 10,
  },
  subHeaderText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#808080",
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  observacoesContainer: {
    height: 100,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  observacoesInput: {
    height: 80,
    textAlignVertical: "top",
  },
  noteText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#808080",
    marginBottom: 10,
  },
  italicText: {
    fontStyle: "italic",
  },
  contactText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#808080",
    marginTop: 20,
  },
  emailHighlight: {
    color: "#1F53E4",
  },
  buttonContainer: {
    backgroundColor: "#1F53E4",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  addButtonContainer: {
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  infoText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#808080",
    marginTop: 10,
    textAlign: "center",
  },
  confirmationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  confirmationContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  confirmationIcon: {
    backgroundColor: "rgba(1, 53, 235, 0.64)",
    borderRadius: 100,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  blueBackground: {
    backgroundColor: "#0135EB",
  },
  confirmationText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0A1034",
    marginBottom: 10,
  },
  selectedFileText: {
    fontSize: 14,
    color: "#808080",
    marginTop: 10,
  },
});