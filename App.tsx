import { NativeBaseProvider, StatusBar } from "native-base";
import "react-native-gesture-handler";
import AppRoutes from "./src/routes/App.routes";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppRoutes />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </NativeBaseProvider>
  );
}
