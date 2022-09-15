import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/task/taskSlice';
import { v4 as uuid } from 'uuid'


export const TaskForm = () => {

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const Dispatch = useDispatch()

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Dispatch(addTask({
            ...task,
            id: uuid()
        }))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name='title' type="text" placeholder="title" onChange={handleChange} />

                <textarea name="description" placeholder="description" onChange={handleChange} />

                <button>Save</button>
            </form>
        </>
    )
}
