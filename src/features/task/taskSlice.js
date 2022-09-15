import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: " Task 1 description",
        complete: false
    },

    {
        id: "2",
        title: "Task 2",
        description: " Task 2 description",
        complete: false
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState, /* si colocamos initialState: initialState es lo mismo*/
    reducers: {
        addTask: (state, action) => {
            console.log(state, action)
            state.push(action.payload)
        }
    }
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer