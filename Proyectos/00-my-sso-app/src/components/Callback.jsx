import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';

const Callback = () => {
  const history = useNavigate ();

  useEffect(() => {
    const handleAuth = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code'); // El "código de autorización" que GoDaddy enviaría

      if (code) {
        try {
          // Aquí harías una llamada a tu propio backend para intercambiar el código por un token de acceso real.
          // NUNCA hagas esto directamente en el frontend.
          const response = await fetch('/api/token', {
            method: 'POST',
            body: JSON.stringify({ code }),
            headers: { 'Content-Type': 'application/json' }
          });
          const data = await response.json();
          console.log('Token de acceso obtenido:', data.access_token);
          // Guarda el token y redirige al usuario a la página principal.
          localStorage.setItem('user-token', data.access_token);
          history.push('/dashboard');
        } catch (error) {
          console.error('Error al obtener el token:', error);
          history.push('/login'); // En caso de error, redirige de nuevo al login.
        }
      } else {
        history.push('/login');
      }
    };

    handleAuth();
  }, [history]);

  return <div>Procesando la autenticación...</div>;
};

export default Callback;