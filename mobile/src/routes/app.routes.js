import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New";

const Drawer = createDrawerNavigator();

export default function AppRoutes(){
    return(
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle:{
                    backgroundColor: '#FFF',
                    paddingTop: 20,
                },
                drawerItemStyle: {
                    marginBottom: 10
                },
                drawerActiveBackgroundColor: '#3b3dbf',
                drawerActiveTintColor: '#FFF',
                drawerInactiveBackgroundColor: '#F0F2FF',
                drawerInactiveTintColor: '#121212'
            }}
        >
            <Drawer.Screen 
                name="Home"
                component={Home}
            />
            <Drawer.Screen 
                name="Registrar"
                component={New}
            />
        </Drawer.Navigator>

    )
}