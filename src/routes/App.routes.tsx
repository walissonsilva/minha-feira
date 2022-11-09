import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { CategoriesScreen } from "../screens/Categories";
import { HomeScreen } from "../screens/Home";
import Feather from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Listas de Compras"
          component={HomeScreen}
          options={{
            tabBarIcon: (props) => <Feather name="home" {...props} />,
          }}
        />
        <Tab.Screen
          name="Categorias"
          component={CategoriesScreen}
          options={{
            tabBarIcon: (props) => <Feather name="grid" {...props} />,
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={CategoriesScreen}
          options={{
            tabBarIcon: (props) => <Feather name="user" {...props} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
