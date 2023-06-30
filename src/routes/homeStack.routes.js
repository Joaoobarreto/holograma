import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categorias from "../pages/Categorias";
import HomePage from "../pages/Home/HomePage";
import Orcamento from "../pages/Orcamento";
import HologramasPorCategoria from "../pages/HologramasPorCategoria";

const { Screen, Navigator } = createNativeStackNavigator();

export function HomeStackRoutes() {
  return (
    <Navigator>
      <Screen
        name="HomePage"
        component={HomePage}
        options={{ title: "Página Inicial" }}
      />
      <Screen
        name="Categorias"
        component={Categorias}
        options={{ headerShadowVisible: false, title: "" }}
      />
      <Screen
        name="Orcamento"
        component={Orcamento}
        options={{ headerShadowVisible: false, title: "" }}
      />
      <Screen
        name="HologramasPorCategoria"
        component={HologramasPorCategoria}
        options={{ headerShadowVisible: false, title: "" }}
      />
    </Navigator>
  );
}