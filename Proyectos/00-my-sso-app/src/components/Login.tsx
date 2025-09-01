import { useState, type ChangeEvent, type JSX } from "react";
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
import { customerConfig } from "../configs/customerConfig.js";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../configs/authConfigs.js";

function Login(): JSX.Element {
  // 1. Tipado del estado
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { instance } = useMsal();

  // 2. Tipado de los manejadores de eventos y funciones
  const handleLogin = (): void => {
    // Lógica para login con usuario y contraseña
  };

  const handleSsoLogin = async (): Promise<void> => {
    try {
      await instance.loginPopup(loginRequest);
    } catch (error: unknown) {
      // 3. Manejo de errores con tipo `unknown`
      if (error instanceof Error) {
        console.error("Error during SSO login:", error.message);
      } else {
        console.error("Unknown error during SSO login:", error);
      }
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <MDBContainer className="my-5 d-flex justify-content-center">
      <MDBCard style={{ maxWidth: "900px", width: "100%" }}>
        <MDBRow className="g-0 d-flex align-items-center">
          <MDBCol
            md="6"
            className="d-flex flex-column justify-content-center align-items-center p-4"
          >
            <MDBCardImage
              src={customerConfig.logoCliente.src}
              alt={customerConfig.logoCliente.alt}
              className="img-fluid mb-4"
              style={{ maxWidth: "80%" }}
            />
          </MDBCol>
          <MDBCol md="6" className="p-4">
            <MDBCardBody className="d-flex flex-column align-items-center">
              <h2 className="fw-bold mb-4 text-center">{customerConfig.title}</h2>
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Usuario"
                id="username"
                type="text"
                value={username}
                onChange={handleUsernameChange} // Usa el manejador tipado
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Contraseña"
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange} // Usa el manejador tipado
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
              <MDBCardImage
                src={customerConfig.logoPrincipal.src}
                alt={customerConfig.logoPrincipal.alt}
                className="img-fluid mt-4"
                style={{ maxWidth: "60%", minWidth: "200px" }}
              />
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;