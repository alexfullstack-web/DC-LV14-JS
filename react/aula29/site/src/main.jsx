import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UsuariosContextoProvider } from './contexto/UsuariosContexto';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UsuariosContextoProvider>
    <App />
  </UsuariosContextoProvider>
);