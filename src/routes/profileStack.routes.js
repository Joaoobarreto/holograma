import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import ProfilePage from "../pages/Profile/ProfilePage";
import InformacoesConta from "../pages/InformacoesConta";
import MeusPedidos from "../pages/MeusPedidos";
import { StoreContext } from "./routes";
import IniciarLogin from '../pages/Profile/IniciarLogin'

const { Screen, Navigator } = createNativeStackNavigator();

export function ProfileStackRoutes() {
    const { store } = useContext(StoreContext);
    return (
        <Navigator>
            <Screen
            name='ProfilePage'
            component={JSON.stringify(store.usuario) !== "{}" && store.usuario ? ProfilePage : ProfilePage}
            options={{headerShadowVisible: false, title: 'Conta'}}
            />
            <Screen
            name='InformacoesConta'
            component={InformacoesConta}
            options={{headerShadowVisible: false, title: 'Informações da Conta'}}
            />
            <Screen
            name='MeusPedidos'
            component={MeusPedidos}
            options={{headerShadowVisible: false, title: 'Meus Pedidos'}}
            />
        </Navigator>
    )
}