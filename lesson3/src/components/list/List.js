import React from 'react';
import Todo from "../todo/Todo";

const List = ({tasks}) => {
    return (
        <div>
            {tasks.map(task => <Todo key={task.id} task={task}/>)}
        </div>
    );
};

export default List;