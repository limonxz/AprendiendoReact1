import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import { customerConfig } from "../configs/customerConfig";

import { useMsal } from "@azure/msal-react";

function MainComponent() {
  const { instance, accounts } = useMsal();
  const handleLogout = () => {
    // Lógica para cerrar la sesión
    instance.logoutPopup();
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

          {/* Renderiza el contenido según el estado de autenticación */}
          <MDBCol md="6" className="p-4">
            <MDBCardBody className="d-flex flex-column align-items-center justify-content-center">
              <h2 className="fw-bold mb-4 text-center">
                ¡Hola, {accounts[0] && accounts[0].username}!
              </h2>
              <p>Has iniciado sesión correctamente.</p>
              <MDBBtn className="mb-4" onClick={handleLogout}>
                Cerrar Sesión
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default MainComponent;
