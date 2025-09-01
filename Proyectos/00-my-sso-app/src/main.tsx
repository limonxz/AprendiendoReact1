import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./configs/authConfigs.js";

import MainComponent from "./components/MainComponent";

const pca = new PublicClientApplication(msalInstance);
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <MsalProvider instance={pca}>
      <MainComponent />
    </MsalProvider>
  </StrictMode>
);
