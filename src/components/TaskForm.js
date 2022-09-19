import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/task/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom'; /*cambia de pagina*/


export const TaskForm = () => {

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const Dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const tasks = useSelector(state => state.tasks)

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

if(params.id) {
Dispatch(editTask(task))
navigate('/')

} else {

    Dispatch(addTask({
        ...task,
        id: uuid()
    }))
navigate('/')
    
}
    }

    useEffect(() => {
        console.log(params)
        if (params.id) {
            setTask(tasks.find(task => task.id === params.id))
        }
    }, [params, tasks])

    return (
        <>
            <form onSubmit={handleSubmit} className='bg-zin-800 max-w-sm p-4' >
                <label htmlFor='title' className='block text-xs font-bold mb-2' >Task:</label>
                <input name='title' type="text" placeholder="title" onChange={handleChange} value={task.title}  className='w-full p-2 rounded-md bg-zinc-600 mb-2' />
<label htmlFor='description' className='block text-xs font-bold mb-2'>Description</label>
                <textarea name="description" placeholder="description" onChange={handleChange} value={task.description} className='w-full p-2 rounded-md bg-zinc-600 mb-2'/>

                <button className='bg-indigo-600 px-2 py-1 text-xs rounded-md self-center' >Save</button>
            </form>
        </>
    )
}
