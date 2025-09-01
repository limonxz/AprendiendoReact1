import React, { type JSX } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import Principal from "./components/Principal"; // Actualiza la extensión a .tsx
import Login from "./components/Login"; // Actualiza la extensión a .tsx

function App(): JSX.Element {
  // Tipado del componente con un tipo de retorno JSX.Element
  const isAuthenticated: boolean = useIsAuthenticated();

  return <>{isAuthenticated ? <Principal /> : <Login />}</>;
}

export default App;
