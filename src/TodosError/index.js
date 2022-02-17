import React from "react";
import './TodoError.css';

function TodosError({error}){
    return (
        <div className="Container-TodosError">
            <p>Oh Oh...!</p>
            <img src="https://i.imgur.com/0eakrEP.png" alt="Oh Oh..."></img>
        </div>
    )
}

export { TodosError };