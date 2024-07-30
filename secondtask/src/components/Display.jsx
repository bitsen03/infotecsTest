import React from "react";
import TaskWeek from "./DropDown/TaskWeek";

const Display = () => {
    return (
        <div className="display">
            <div className="header-display">
                <span className="title-display">Tu-do</span>
            </div>
            <TaskWeek></TaskWeek>
        </div>
    );
}

export default Display;