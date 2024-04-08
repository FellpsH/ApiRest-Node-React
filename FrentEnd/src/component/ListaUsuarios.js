// ListaUsuarios.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Realiza uma solicitação GET para obter os usuários da API
    axios.get('http://localhost:3001/')
      .then(response => {
        setUsuarios(response.data); // Define os usuários no estado
      })
      .catch(error => {
        console.error('Erro ao recuperar os usuários:', error);
      });
  }, []);

  // Estilo detalhado específico para o componente ListaUsuarios
  const listaUsuariosStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f0f0f0',
  };

  const listItemStyle = {
    marginBottom: '10px',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={listaUsuariosStyle}>
      <h2 style={{ textAlign: 'center' }}>Lista de Usuários</h2>
      <ul>
        {/* Verifica se 'usuarios' é um array antes de chamar 'map' */}
        {Array.isArray(usuarios) && usuarios.map(usuario => (
          <li key={usuario.ID} style={listItemStyle}>
            {usuario.nome} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
