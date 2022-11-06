import { NativeBaseProvider, StatusBar } from "native-base";
import "react-native-gesture-handler";
import AppRoutes from "./src/routes/App.routes";
import { theme } from "./src/styles/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppRoutes />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </NativeBaseProvider>
  );
}
