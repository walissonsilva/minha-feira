import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { CategoriesScreen } from "../screens/Categories";
import { HomeScreen } from "../screens/Home";

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Listas de Compras" component={HomeScreen} />
        <Drawer.Screen name="Categorias" component={CategoriesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
