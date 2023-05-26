import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categorias from "../pages/Categorias";
import HomePage from "../pages/Home/HomePage";
import MenuHome from "../components/MenuHome";
import { Header } from "react-native/Libraries/NewAppScreen";

const { Screen, Navigator } = createNativeStackNavigator();

export function HomeStackRoutes() {
    return (
        <Navigator>
            <Screen
            name='HomePage'
            component={HomePage}
            />
            <Screen
            name='Categorias'
            component={Categorias}
            options={{headerShadowVisible: false, title: ''}}
            />
        </Navigator>
    )
}