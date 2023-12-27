import React from "react";
import {useState} from "react";

export default function TaskList({
    todos,
    onChangeTodo,
    onDeleteTodo,
})  {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo}></Task>
                </li>
            ))}
        </ul>
    );
}

function Task ({todo,onChange,onDelete}) {
    const [isEditing,setIsEditing] = useState(false)
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <p>{todo.id}</p>
                <input value={todo.title} onChange={e => {
                    onChange({
                        ...todo,
                        title: e.target.value,
                    });
                }}
                />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    }
    else {
        todoContent = (
            <>
                <p>{todo.title}</p>
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        )
    }
    return (
        <label>
            <p>{todo.id}</p>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                    onChange ({
                        ...todo,
                        done: e.target.checked,
                    });
                }}
            />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </label>
    )
}