import { PublicClientApplication, type Configuration, LogLevel, type RedirectRequest } from "@azure/msal-browser";

// Define la configuración principal de MSAL.
// La interfaz `Configuration` asegura que todas las propiedades sean correctas.
export const msalConfig: Configuration = {
  auth: {
    clientId: "5b714c25-892c-4182-a453-b308a964063f",
    authority: "https://login.microsoftonline.com/51161094-869b-4181-b37c-f1d532076fd0",
    redirectUri: "http://localhost:5173",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      // Tipamos explícitamente los parámetros del callback del logger.
      loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
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

// Crea una instancia de la aplicación cliente pública usando la configuración anterior.
export const pCA = new PublicClientApplication(msalConfig);

// Define la solicitud de login. La interfaz `RedirectRequest` asegura la tipificación.
export const loginRequest: RedirectRequest = {
  scopes: ["User.Read"],
};
