import React from "react";
import './EmptyTodos.css'

function EmptyTodos(){
    return(
        <div className="Container-EmptyTodos">
            <p>¡Crea tu primer tarea!</p>
            <img src="https://i.imgur.com/otBi6GG.png" alt="Pet"></img>
        </div>
    )
}

export { EmptyTodos };