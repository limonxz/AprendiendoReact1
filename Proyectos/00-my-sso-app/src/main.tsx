import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { MsalProvider } from "@azure/msal-react";
import { pCA } from "./configs/authConfigs.ts";

import MainComponent from "./components/MainComponent";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <MsalProvider instance={pCA}>
      <MainComponent />
    </MsalProvider>
  </StrictMode>
);
