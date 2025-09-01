import { PublicClientApplication } from "@azure/msal-browser";
import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "5b714c25-892c-4182-a453-b308a964063f", // Reemplaza con tu Client ID de Azure AD
    authority:
      "https://login.microsoftonline.com/51161094-869b-4181-b37c-f1d532076fd0", // Reemplaza con tu Tenant ID
    redirectUri: "http://localhost:5173",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

export const msalInstance = {
  auth: {
    clientId: "5b714c25-892c-4182-a453-b308a964063f", // Reemplaza con tu Client ID de Azure AD
    authority:
      "https://login.microsoftonline.com/51161094-869b-4181-b37c-f1d532076fd0", // Reemplaza con tu Tenant ID
    redirectUri: "http://localhost:5173",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

// export const msalInstance = new PublicClientApplication(msalConfig);
export const loginRequest = {
  scopes: ["User.Read"], // Solicita permisos para leer el perfil del usuario
};
