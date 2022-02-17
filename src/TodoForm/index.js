import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm(){
    //estado local
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const{
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue.length <= 0){
            alert("Escribe una tarea")
            return;
        }
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo To Do</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Ingresa la tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel}> Cancelar</button>
                <button type="submit"> Añadir</button>
            </div>
        </form>
    );
}

export {TodoForm};