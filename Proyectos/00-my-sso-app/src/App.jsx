import { useIsAuthenticated } from "@azure/msal-react";
import Principal from "./components/Principal";

function App() {
  const isAuthenticated = useIsAuthenticated(); // Hook para saber si el usuario está autenticado

  return <>{isAuthenticated ? <Principal /> : <Login />}</>;
}

export default App;
