import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../src/App.css';

function DeletarUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [deletando, setDeletando] = useState(false);
  const [idDeletar, setIdDeletar] = useState('');

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

  const handleDelete = async (id) => {
    try {
      setDeletando(true);
      await axios.delete(`http://localhost:3001/${id}`);
      alert('Usuário excluído com sucesso!');
      // Atualiza a lista de usuários após a exclusão bem-sucedida
      const updatedUsuarios = usuarios.filter(usuario => usuario.ID !== id);
      setUsuarios(updatedUsuarios);
      setDeletando(false);
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      alert('Erro ao excluir usuário. Verifique o console para mais detalhes.');
      setDeletando(false);
    }
  };

  return (
    <div style={listaUsuariosStyle}> {/* Adiciona a classe do estilo ao contêiner principal */}
      <h2 style={{ textAlign: 'center' }} >Excluir Usuário</h2>
      {deletando && <p>Excluindo usuário...</p>}
      <ul>
        {/* Verifica se 'usuarios' é um array antes de chamar 'map' */}
        {Array.isArray(usuarios) && usuarios.map(usuario => (
          <li key={usuario.ID} style={listItemStyle}>
            {usuario.nome} - {usuario.email}
            <button style={{ marginLeft: '15px' }} onClick={() => handleDelete(usuario.ID)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeletarUsuario;


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