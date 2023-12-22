import React from 'react';

const List = ({tasks}) => {
    return (
        <div>
            {tasks.map((task) => (
                <p>{task.task} {task.id}</p>
            ))}
        </div>
    );
};

export default List;