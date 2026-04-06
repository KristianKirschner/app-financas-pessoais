import { StatusBar } from "react-native";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#F0F4FF' barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}