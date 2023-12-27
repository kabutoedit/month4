import React from "react";
import {useState} from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

let nextId = 1;
const initialTodos = [

]

export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos)

    const [searchTodo, setSearchTodos] = useState([])

    function handleAddTodo(event, title) {
        event.preventDefault();
        if (title) {
            setTodos([
                ...todos,
                {
                    id: nextId++,
                    title: title,
                    done: false
                }
            ])
        }
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
        setSearchTodos(
            searchTodo.filter(t => t.id !== todoId));
    }

    function handleSearchTodo(event) {
        const searchTerm = event.target.value;
        if (searchTerm === '') {
            setSearchTodos([ ])
        }
        else {
            setSearchTodos(todos.filter(t => String(t.id).includes(searchTerm)))
        }
    }


    return (
        <>
            <h3>Поиск задачи</h3>
            <input type="text" onChange={handleSearchTodo}/>
            <AddTodo onAddTodo={handleAddTodo}/>
            <TaskList
                todos={searchTodo.length > 0 ? searchTodo : todos}
                onChangeTodo={handleChangeTodos}
                onDeleteTodo={handleDeleteTodo}/>
            </>
            );

}



