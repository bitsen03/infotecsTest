import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: []
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, {payload}) => {
            state.users = payload
        },
        sortUsers: (state, {payload}) => {
            if (payload.age === 'ascending') {
                state.users.sort((a, b) => a.age - b.age);
            } else if (payload.age === 'descending') {
                state.users.sort((a, b) => b.age - a.age);
            }
            if (payload.fio === 'ascending') {
                state.users.sort((a, b) => a.firstName.localeCompare(b.firstName));
            } else if (payload.fio === 'descending') {
                state.users.sort((a, b) => b.firstName.localeCompare(a.firstName));
            }
            if (payload.address === 'ascending') {
                state.users.sort((a, b) => a.address.city.localeCompare(b.address.city));
            } else if (payload.address === 'descending') {
                state.users.sort((a, b) => b.address.city.localeCompare(a.address.city));
            }
            const maleUsers = state.users.filter(user => user.gender === 'male');
            const femaleUsers = state.users.filter(user => user.gender === 'female');

            if (payload.gender === 'male') {
                state.users = maleUsers.concat(femaleUsers);
            } else if (payload.gender === 'female') {
                state.users = femaleUsers.concat(maleUsers);
            }
        },
    }
})

export const selectUser = state => state.allUser;
export const  { addUsers, sortUsers }  = usersSlice.actions;
export default usersSlice.reducer;