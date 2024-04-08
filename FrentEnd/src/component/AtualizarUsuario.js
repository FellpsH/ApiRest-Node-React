import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../src/App.css';

function AtualizarUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [atualizando, setAtualizando] = useState(false);

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

  const handleUpdate = async (idAtualizar, novoNome, novoEmail) => {
    try {
      setAtualizando(true);
      // Faz uma solicitação PUT para atualizar os dados do usuário
      await axios.put(`http://localhost:3001/${idAtualizar}`, {
        nome: novoNome,
        email: novoEmail
      });
      alert('Usuário atualizado com sucesso!');
      // Atualiza a lista de usuários após a atualização bem-sucedida
      const updatedUsuarios = usuarios.map(usuario => {
        if (usuario.ID === idAtualizar) {
          return { ...usuario, nome: novoNome, email: novoEmail };
        }
        return usuario;
      });
      setUsuarios(updatedUsuarios);
      setAtualizando(false);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      alert('Erro ao atualizar usuário. Verifique o console para mais detalhes.');
      setAtualizando(false);
    }
  };

  return (
    <div style={listaUsuariosStyle}>
      <h2 style={{ textAlign: 'center' }}>Atualizar Usuário</h2>
      {atualizando && <p>Atualizando usuário...</p>}
      <ul>
        {/* Verifica se 'usuarios' é um array antes de chamar 'map' */}
        {Array.isArray(usuarios) && usuarios.map(usuario => (
          <UsuarioItem
            key={usuario.ID}
            usuario={usuario}
            handleUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  );
}

const UsuarioItem = ({ usuario, handleUpdate }) => {
  const [idAtualizar] = useState(usuario.ID);
  const [novoNome, setNovoNome] = useState(usuario.nome);
  const [novoEmail, setNovoEmail] = useState(usuario.email);

  const handleNomeChange = (e) => {
    setNovoNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNovoEmail(e.target.value);
  };

  return (
    <li style={listItemStyle}>
      {usuario.nome} - {usuario.email}
      <input
        type="text"
        value={novoNome}
        onChange={handleNomeChange}
        placeholder="Novo Nome"
        style={inputStyle}
      />
      <input
        type="email"
        value={novoEmail}
        onChange={handleEmailChange}
        placeholder="Novo Email"
        style={inputStyle}
      />
      <button style={{ marginLeft: '15px' }} onClick={() => handleUpdate(idAtualizar, novoNome, novoEmail)}>Selecionar</button>
    </li>
  );
};

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

const inputStyle = {
  marginBottom: '10px',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '3px',
};

export default AtualizarUsuario;
