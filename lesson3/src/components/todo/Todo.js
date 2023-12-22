import React from 'react';

const Todo = ({task}) => {
    return (
        <div>
            <h5>{task.title}</h5>
        </div>
    );
};

export default Todo;