import React from "react";
import {useState} from "react";
import './addTodo.module.css'

export default function AddTodo({onAddTodo}) {
    const [title,setTitle] = useState('')

    return (
        <form onSubmit={(e) => {
                setTitle('');
                onAddTodo(e, title);
            }} className={'addtodo'}>
            <h3>Добавьте задачу</h3>
            <input
                placeholder='Add todo'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}