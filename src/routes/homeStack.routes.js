import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categorias from "../pages/Categorias";
import HomePage from "../pages/Home/HomePage";
import Orcamento from "../pages/Orcamento";

const { Screen, Navigator } = createNativeStackNavigator();

export function HomeStackRoutes() {
    return (
        <Navigator>
          <Screen name='HomePage' component={HomePage} />
          <Screen name='Categorias' component={Categorias} options={{ headerShadowVisible: false, title: '' }} />
          <Screen name='Orcamento' component={Orcamento} options={{ headerShadowVisible: false, title: '' }} /> 
        </Navigator>
      );
    }