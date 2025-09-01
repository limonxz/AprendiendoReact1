import { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { customerConfig } from "../configs/customerConfig";
// Importamos directamente la instancia y la configuración de login
import { useMsal } from "@azure/msal-react";
import { msalInstance, loginRequest  } from "../configs/authConfigs.js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { instance } = useMsal();

  const handleLogin = () => {
    // Lógica para login con usuario y contraseña
  };

  const handleSsoLogin = async () => {
    try {
      // Usamos la instancia obtenida del hook useMsal
      await instance.loginPopup(loginRequest);
    } catch (error) {
      console.error("Error during SSO login:", error);
    }
  };

  return (
    <MDBContainer className="my-5 d-flex justify-content-center">
      {" "}
      {/* Centrar el contenedor principal */}
      <MDBCard style={{ maxWidth: "900px", width: "100%" }}>
        {" "}
        {/* Ancho máximo para la tarjeta */}
        <MDBRow className="g-0 d-flex align-items-center">
          {/* Columna Izquierda: Logo Principal */}
          <MDBCol
            md="6"
            className="d-flex flex-column justify-content-center align-items-center p-4" // Añadimos padding y centramos contenido
          >
            <MDBCardImage
              src={customerConfig.logoCliente.src}
              alt={customerConfig.logoCliente.alt}
              className="img-fluid mb-4" // Ajustamos la clase para un mejor espaciado y que la imagen sea fluida
              style={{ maxWidth: "80%" }} // Controla el tamaño del logo principal
            />
            {/* El segundo logo (simegg) se mueve a la columna derecha */}
          </MDBCol>

          {/* Columna Derecha: Formulario de Login y Logo SIMEGG */}
          <MDBCol md="6" className="p-4">
            {" "}
            {/* Añadimos padding a la columna del formulario */}
            <MDBCardBody className="d-flex flex-column align-items-center">
              {" "}
              {/* Centramos los elementos del formulario */}
              <h2 className="fw-bold mb-4 text-center">{customerConfig.title}</h2>{" "}
              {/* Título para un toque más profesional */}
              <MDBInput
                wrapperClass="mb-4 w-100" 
                label="Usuario"
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4 w-100" 
                label="Contraseña"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <MDBBtn className="mb-4 w-100" onClick={handleLogin}>
                Entrar
              </MDBBtn>
              <MDBBtn
                color="secondary"
                className="mb-4 w-100"
                onClick={handleSsoLogin}
              >
                Iniciar sesión con SSO
              </MDBBtn>
              {/* Aquí va el logo SIMEGG, debajo del botón */}
              <MDBCardImage
                src={customerConfig.logoPrincipal.src}
                alt={customerConfig.logoPrincipal.alt}
                className="img-fluid mt-4" // Añadimos margen superior
                style={{ maxWidth: "60%", minWidth: "200px" }} // Controla el tamaño del logo SIMEGG
              />
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
