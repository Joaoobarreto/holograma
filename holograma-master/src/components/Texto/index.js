import React from "react";
import { StyleSheet, Text, fontFamily} from 'react-native';

export default function Texto({ children, style }) {
    return (
        <Text style={[estilos.texto, style]}>{ children }</Text>
    )
}

const estilos = StyleSheet.create({
    texto: {
        fontStyle:"italic"
    }
})