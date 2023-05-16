import React from "react";
import { StyleSheet, View } from 'react-native';
import {Entypo, AntDesign, FontAwesome, FontAwesome5} from '@expo/vector-icons';
import Texto from "../Texto";

export default function MenuHome() {
    return (
        <View style={estilos.menu}>
            <View style={estilos.menuItem}>
                <View style={estilos.itemIcon}>
                    <Entypo name="menu" size={24} color="#0001FC" />
                </View>
                <Texto style={estilos.iconTitle}>Categorias</Texto>
            </View>

            <View style={estilos.menuItem}>
                <View style={estilos.itemIcon}>
                    <AntDesign name="staro" size={24} color="#0001FC" />
                </View>
                <Texto style={estilos.iconTitle}>Favoritos</Texto>
            </View>

            <View style={estilos.menuItem}>
                <View style={estilos.itemIcon}>
                    <FontAwesome name="dollar" size={24} color="#0001FC" />
                </View>
                <Texto style={estilos.iconTitle}>Orçamento</Texto>
            </View>

            <View style={estilos.menuItem}>
                <View style={estilos.itemIcon}>
                    <FontAwesome5 name="user-friends" size={20} color="#0001FC" />
                </View>
                <Texto style={estilos.iconTitle}>Mais vendidos</Texto>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    menu: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around"
    },
    menuItem: {
        display: "flex",
        alignItems: "center"
    },
    itemIcon: {
        margin: 10,
        padding: 15,
        width: 55,
        height: 55,
        borderRadius: 50,
        backgroundColor: "#E0ECF8",
        display: "flex",
        alignItems: "center"
    },
    iconTitle: {
        color: "#1F53E4",
        fontSize: 14
    }
})