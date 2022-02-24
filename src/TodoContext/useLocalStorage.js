import React from "react";

//Custom react hook
function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item,setItem] = React.useState(initialValue)


    const getItems = async() => {
        setLoading(true);
        fetch('http://localhost:3001/tareas')
            .then(response => response.json())
            .then(data => setItem(data))
            .then(() => setLoading(false));
    }

    const saveTareas = async(newItem) => {
        setLoading(true);
        fetch('http://localhost:3001/tareas', {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers:{
            'Content-Type': 'application/json'
            }
        }).then(() => getItems()).then(() => setLoading(false))
    }

    const completeTodo = async(newItem) => {
        setLoading(true);
        fetch('http://localhost:3001/tareas/' + newItem._id, {
            method: 'PUT',
            body: JSON.stringify({
                text: newItem.text,
                completed: !newItem.completed
            }),
            headers:{
            'Content-Type': 'application/json'
            }
        }).then(() => getItems()).then(() => setLoading(false))
    }

    const deleteTodo = async(newItem) => {
        setLoading(true);
        fetch('http://localhost:3001/tareas/' + newItem._id, {
            method: 'DELETE',
            headers:{
            'Content-Type': 'application/json'
            }
        }).then(() => getItems()).then(() => setLoading(false))
    }

    React.useEffect(() => {
        getItems();
    }, []);

    const saveItem = async (newItem) => {
        await saveTareas(newItem);
    };

    return {
        item,
        saveItem,
        completeTodo,
        deleteTodo,
        loading,
        error,
    };
}

export {useLocalStorage};