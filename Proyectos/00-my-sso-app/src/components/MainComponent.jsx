import { useIsAuthenticated } from "@azure/msal-react";
import App from "../App.jsx";
import Login from "./Login";

function MainComponent() {
  const isAuthenticated = useIsAuthenticated();
  const content = isAuthenticated ? <App /> : <Login />;
  return content;
}

export default MainComponent;
