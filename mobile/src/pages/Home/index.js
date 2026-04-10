import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../contexts/auth";

export default function Home(){

    const {logOut} = useContext(AuthContext)

    return(
        <View>
            <Text>Oi</Text>
            <TouchableOpacity onPress={logOut}>
                <Text>Deslogar</Text>
            </TouchableOpacity>
        </View>
    )
}