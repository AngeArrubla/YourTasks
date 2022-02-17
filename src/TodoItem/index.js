import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { IoIosCloseCircle  } from 'react-icons/io';
import './TodoItem.css';

function TodoItem (props){

    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <BsCheck/>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <IoIosCloseCircle />
            </span>
        </li>
    );
}

export { TodoItem };