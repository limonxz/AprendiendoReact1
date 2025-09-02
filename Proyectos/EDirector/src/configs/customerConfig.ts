// Define las interfaces para estructurar los datos de configuración.
// Esto garantiza la seguridad de los tipos y facilita el autocompletado.

// Interfaz para la configuración de los logos.
interface LogoConfig {
  src: string;
  alt: string;
  imageName: string;
}

// Interfaz para la configuración del tema.
interface ThemeConfig {
  primary: string;
  background: string;
}

// Interfaz principal para el objeto de configuración del cliente.
export interface CustomerConfig {
  title: string;
  subtitle: string;
  logoCliente: LogoConfig;
  logoPrincipal: LogoConfig;
  theme: ThemeConfig;
}

// El objeto de configuración del cliente tipado.
export const customerConfig: CustomerConfig = {
  title: "MIAA",
  subtitle: "Modelo Integral de Aguas de Aguascalientes",
  logoCliente: {
    src: "/logos/LogoClientePrincipal.bmp",
    alt: "Logo Cliente",
    imageName: "LogoClientePrincipal.bmp",
  },
  logoPrincipal: {
    src: "/logos/LogoPrincipal.jpg",
    alt: "Logo Principal",
    imageName: "LogoPrincipal.jpg",
  },
  theme: {
    primary: "#0078d4", // azul principal
    background: "bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50",
  },
};