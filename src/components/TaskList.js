import React from 'react';
import { useSelector } from 'react-redux' /* asi se trae los datos*/


export const TaskList = () => {

    const tasks = useSelector((state => state.tasks))
    console.log(tasks)

    return (
        <>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </>
    )
}
