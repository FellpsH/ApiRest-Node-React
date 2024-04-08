// FormularioUsuario.js

import React, { useState } from 'react';
import axios from 'axios';

function FormularioUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fazendo uma solicitação POST para a sua API com os dados do usuário
      await axios.post('http://localhost:3001/', { nome, email });
      alert('Usuário adicionado com sucesso!');
      // Limpa os campos do formulário após o envio bem-sucedido
      setNome('');
      setEmail('');
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
      alert('Erro ao adicionar usuário. Verifique o console para mais detalhes.');
    }
  };

  // Estilo detalhado específico para o componente FormularioUsuario
  const formularioUsuarioStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={formularioUsuarioStyle}>
      <h2 style={{ textAlign: 'center' }}>Adicionar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            style={inputStyle}
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            style={inputStyle}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>Adicionar Usuário</button>
      </form>
    </div>
  );
}

export default FormularioUsuario;
