import React, { type JSX } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import App from "../App";
import Login from "./Login";

// Tipamos el componente como un Functional Component (React.FC) que no recibe props
function MainComponent(): JSX.Element {
  const isAuthenticated: boolean = useIsAuthenticated();

  // El tipo de `content` es inferido como JSX.Element
  const content = isAuthenticated ? <App /> : <Login />;

  return content;
}

export default MainComponent;
