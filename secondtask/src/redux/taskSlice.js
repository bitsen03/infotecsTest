import { createSlice } from '@reduxjs/toolkit';
import getDatesAroundToday from '../help/getDatesAroundToday'; 

const initialState = {};

const dates = getDatesAroundToday(0,6);

for (let i = 0; i < dates.length - 1; i += 1) {
    initialState[dates[i]] = []
}



const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, {payload}) => {
            const {id, value} = payload;
            if (state[id]) {
                state[id].push(value)
            } else {
                state[id] = [value]
            }
        },
        removeTask: (state, {payload}) => {
            const {id, index} = payload;
            state[id].splice(index, 1)
        },
        setCompletTask: (state, {payload}) => {
            const {id, index, value} = payload;
            state[id][index].completeTask = value
        },
        updateTask: (state, { payload }) => {
            const { id, index, updates } = payload;
            Object.entries(updates).forEach(([key, value]) => {
                state[id][index][key] = value;
            });
        }
    }
})

export const selectTasks = state => state.task;
export const selectTasksId = (state, id, index) => state.task[id][index];
export const selectCompletTasksId = (state, id, index) => state.task[id][index].completeTask
export const {addTask, removeTask, setCompletTask, updateTask} = taskSlice.actions;
export default taskSlice.reducer;