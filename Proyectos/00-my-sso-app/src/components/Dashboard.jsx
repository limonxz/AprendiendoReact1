import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const history = useNavigate ();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Aquí es donde harías llamadas a la API de GoDaddy (o a tu propio backend)
    // para obtener información del usuario o gestionar recursos.
    // El token de autenticación se envía en los encabezados.

    const fetchUserData = async () => {
      const userToken = localStorage.getItem('user-token');

      if (!userToken) {
        history.push('/login');
        return;
      }

      try {
        // En un escenario real, esta URL sería el endpoint de una API
        // de GoDaddy (ej. para obtener información del perfil del usuario) o de tu propio backend.
        const response = await axios.get('https://api.godaddy.com/v1/user/profile', {
          headers: {
            'Authorization': `sso-jwt ${userToken}` // Este formato de token es solo un ejemplo.
          }
        });
        setUserData(response.data);
      } catch (err) {
        console.error('Error al obtener los datos del usuario:', err);
        setError('No se pudieron cargar los datos del usuario. Vuelve a iniciar sesión.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [history]);

  const handleLogout = () => {
    // Borra el token de autenticación del almacenamiento local
    localStorage.removeItem('user-token');
    // Redirige al usuario a la página de inicio de sesión
    history.push('/login');
  };

  if (loading) return <div>Cargando perfil...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard de usuario</h2>
      {userData && (
        <div>
          <p>Bienvenido, {userData.name || 'Usuario'}</p>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Dashboard;