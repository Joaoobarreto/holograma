import React from "react";
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Texto from "../../components/Texto";

export default function Categorias() {
    return (
        <View>
            <Texto style={styles.heading}>Categorias</Texto>
            <TouchableOpacity style={styles.container}>
                <Texto style={styles.texto}>Todos</Texto>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Texto style={styles.texto}>Filmes</Texto>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Texto style={styles.texto}>Séries</Texto>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Texto style={styles.texto}>Games</Texto>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Texto style={styles.texto}>Celebridades</Texto>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Texto style={styles.texto}>Esportes</Texto>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0A1034',
        marginLeft: 15,
        marginTop: 30, 
    },
    container: {
        height: 60,
        margin: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10, 
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    
    texto: {
        color: "#0A1034",
        paddingLeft: 15,
        fontSize: 18,
        fontStyle: 'italic'
    },
});