import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. Define la interfaz para la respuesta del token
interface TokenResponse {
  access_token: string;
  // Puedes añadir otros campos si el backend los devuelve, como 'refresh_token', 'expires_in', etc.
  // refresh_token?: string;
  // expires_in?: number;
}

const Callback: React.FC = () => {
  // 2. useNavigate ya está tipificado, no necesitas hacer cambios aquí.
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      // El método 'get' puede devolver 'string | null', por eso lo comprobamos.
      const code = urlParams.get('code');

      if (code) {
        try {
          const response = await fetch('/api/token', {
            method: 'POST',
            body: JSON.stringify({ code }),
            headers: { 'Content-Type': 'application/json' },
          });

          // 3. Verifica si la respuesta es exitosa
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          // 4. Asegúrate de que los datos recibidos coincidan con la interfaz `TokenResponse`
          const data: TokenResponse = await response.json();
          console.log('Token de acceso obtenido:', data.access_token);
          
          localStorage.setItem('user-token', data.access_token);
          
          // 5. Usa la función `Maps` directamente, no `.push`
          navigate('/dashboard');

        } catch (error) {
          console.error('Error al obtener el token:', error);
          // 6. Maneja el error de forma segura en TypeScript
          navigate('/login');
        }
      } else {
        navigate('/login');
      }
    };

    handleAuth();
    
  // 7. Agrega `Maps` como dependencia para evitar warnings
  }, [navigate]);

  return <div>Procesando la autenticación...</div>;
};

export default Callback;