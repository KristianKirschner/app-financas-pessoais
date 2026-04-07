import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
    <AuthStack.Navigator
        screenOptions={{
            animation: 'slide_from_bottom',
        }}
    >
        <AuthStack.Screen
            name="SignIn"
            component={SignIn}
            options={{
                headerShown: false,
            }}
        />
        <AuthStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
                headerTintColor: '#FFF',
                headerTitle: 'Voltar',
                headerBackTitleVisible: false,
                headerStyle:{
                    borderBottomWidth: 1,
                    backgroundColor: '#3b3dbf',
                    borderBottomColor: '#00b94a'
                }   
            }}
        />
    </AuthStack.Navigator>
    )
}