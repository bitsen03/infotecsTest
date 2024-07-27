import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Users from "./Users";
import {selectUser} from "../redux/usersSlice";
import { addUsers } from "../redux/usersSlice";


const AllUsers = () => {
const dispatch = useDispatch()

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users');
                const data = await response.json();
                dispatch(addUsers(data.users))
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }; 
        fetchUsers();
    }, []); 

const {users}  = useSelector(selectUser);

return (
    <div className="all-Users">
        {users !== null ? users?.map((el, i) => <Users white={i} key={el.id}>{el}</Users>) : users}
    </div>
);
};

export default AllUsers;

