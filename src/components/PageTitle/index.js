import React from "react";
import Texto from "../Texto";
import { StyleSheet } from "react-native";

export default function PageTitle({children}) {
    return (
        <Texto style={estilos.title}>{children}</Texto>
    )
}

const estilos = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "100",
        fontStyle: "italic",
        margin: 10
    }
})