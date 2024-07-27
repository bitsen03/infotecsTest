import React from "react";
import AllUsers from "./AllUsers";
import TopDisplay from "./TopDisplay";

const Table = () => {
    return (
        <div className="table">
            <TopDisplay></TopDisplay>
            <AllUsers></AllUsers>
        </div>
    )
}

export default Table;