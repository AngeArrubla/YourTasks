import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item: todos,
        saveItem: saveTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >=1) {
        searchedTodos = todos;
    }else{
        searchedTodos = todos.filter (todo => {
        const todoText = todo.text.toLowerCase()
        const searchText= searchValue.toLowerCase();
        return todoText.includes(searchText);
        })
    }

    const addTodo = (text) => {
        saveTodos({completed: false, text});
    };

    return(
        <TodoContext.Provider value = {{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }} >
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};