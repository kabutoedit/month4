import React from "react";
import {useState} from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

let nextId = 3;
const initialTodos = [ ]

export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos)

    function handleAddTodo(title) {
        setTodos([
        ...todos,
        {
            id: nextId++,
            title: title,
            done: false
        }
        ])
    }

    function handleChangeTodos(nextTodo) {
        setTodos(todos.map(t => {
            if (t.id === nextTodo.id) {
                return nextTodo
            }
            else {
                return t;
            }
        }));
    }

    function handleDeleteTodo(todoId) {
        setTodos(
            todos.filter(t => t.id !== todoId));
    }

    function handleSearchTodo(todoId) {
        setTodos(
            todos.filter(t => t.id === todoId)
        )
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo}/>
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodos}
                onDeleteTodo={handleDeleteTodo}/>
            </>
            );

}



