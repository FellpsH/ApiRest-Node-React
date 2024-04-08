import React, { useState } from 'react';
import ListaUsuarios from './component/ListaUsuarios';
import FormularioUsuario from './component/FormularioUsuario';
import DeletarUsuario from './component/DeletarUsuario';
import AtualizarUsuario from './component/AtualizarUsuario';
import './App.css'; 

function App() {
  const [page, setPage] = useState('lista'); // Estado para controlar a página a ser exibida

  const handleNavigate = (destination) => {
    setPage(destination); // Função para atualizar a página
  };

  return (
    <div className="App">
      {/* Menu de navegação */}
      <nav>
        <ul>
          <li>
            <button onClick={() => handleNavigate('lista')}>Lista de Usuários</button>
          </li>
          <li>
            <button onClick={() => handleNavigate('adicionar')}>Adicionar Usuário</button>
          </li>
          <li>
            <button onClick={() => handleNavigate('deletar')}>Deletar Usuário</button> 
          </li>
          {/* <li>
            <button onClick={() => handleNavigate('update')}>Atualizar Usuário</button> 
          </li> */}
        </ul>
      </nav>

      {/* Renderização condicional dos componentes */}
      {page === 'lista' && <ListaUsuarios />}
      {page === 'adicionar' && <FormularioUsuario />}
      {page === 'deletar' && <DeletarUsuario />}
      {page === 'update' && <AtualizarUsuario />}
    </div>
  );
}

export default App;
