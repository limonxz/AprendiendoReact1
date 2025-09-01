import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 1. Define la interfaz para los datos del usuario.
// Esto es un ejemplo, ajústalo según la respuesta real de la API de GoDaddy.
interface UserProfile {
  name: string;
  email: string;
  // Añade aquí todas las propiedades que recibas de la API.
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  // 2. Tipa el estado con la interfaz definida. 'null' al inicio es opcional.
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userToken: string | null = localStorage.getItem('user-token');

      if (!userToken) {
        // 3. Usa 'navigate' en lugar de 'history.push'
        navigate('/login');
        return;
      }

      try {
        // 4. Especifica el tipo de la respuesta de axios
        const response = await axios.get<UserProfile>('https://api.godaddy.com/v1/user/profile', {
          headers: {
            'Authorization': `sso-jwt ${userToken}`
          }
        });
        setUserData(response.data);
      } catch (err) {
        // 5. Maneja los errores de forma segura en TypeScript
        console.error('Error al obtener los datos del usuario:', err);
        setError('No se pudieron cargar los datos del usuario. Vuelve a iniciar sesión.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]); // 6. Agrega 'navigate' al array de dependencias de useEffect

  const handleLogout = () => {
    localStorage.removeItem('user-token');
    // 7. Usa 'navigate' en el manejador de eventos también
    navigate('/login');
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