import React from "react";
import { StyleSheet, Text} from 'react-native';

export default function Texto({ children, style }) {
    return (
        <Text style={[estilos.texto, style]}>{ children }</Text>
    )
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "Roboto"
    }
})