import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
import './App.css';

/* const defaultTodos = [
  {text: 'Contar cebollas', completed: true },
  {text: 'Tomar un cafe', completed: false },
  {text: 'Ir al banco', completed: false },
  {text: 'cocinar', completed: false },
  {text: 'Hacer ejercicio', completed: false }
] */


function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
