import React from 'react';
import { useDispatch, useSelector } from 'react-redux' /* asi se trae los datos*/
import { deleteTask } from '../features/task/taskSlice';
import { Link } from 'react-router-dom'

export const TaskList = () => {

    const tasks = useSelector((state => state.tasks))
    console.log(tasks)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <>
            <header>
                <h1>Tasks {tasks.length} </h1>
                <Link to='/create-task'>
                Create Task
                </Link>
            </header>

            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
            ))}
        </>
    )
}
