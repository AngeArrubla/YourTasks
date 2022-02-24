import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodosError } from '../TodosError';
import { TodosLoading} from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import './App.css';


function AppUI(){

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    console.log(searchedTodos)
    return(
        <React.Fragment>

            <div className='Content-Tasks'>
                <TodoCounter/>
                <TodoSearch/>
                <TodoList>
                    {error && <TodosError error={error} />}
                    {loading && <TodosLoading />}
                    {(!loading && !searchedTodos.length) && <EmptyTodos />}

                    {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete = {() => completeTodo(todo)}
                        onDelete = {() => deleteTodo(todo)}
                    />
                    ))}
                </TodoList>

                {!!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
                <CreateTodoButton
                    setOpenModal = {setOpenModal}
                />
            </div>
            <div className='Content-image'>
                <img src="https://i.imgur.com/lpU5FKx.png" alt="Do it"></img>
            </div>
        </React.Fragment>
    );
}
export {AppUI};