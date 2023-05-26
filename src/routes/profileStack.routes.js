import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfilePage from "../pages/Profile/ProfilePage";
import InformacoesConta from "../pages/InformacoesConta";

const { Screen, Navigator } = createNativeStackNavigator();

export function ProfileStackRoutes() {
    return (
        <Navigator>
            <Screen
            name='ProfilePage'
            component={ProfilePage}
            />
            <Screen
            name='InformacoesConta'
            component={InformacoesConta}
            options={{headerShadowVisible: false, title: ''}}
            />
        </Navigator>
    )
}