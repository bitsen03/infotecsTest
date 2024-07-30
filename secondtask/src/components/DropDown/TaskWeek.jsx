import React from "react";
import DropDown from "./DropDown";
import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/taskSlice";

const TaskWeek = () => {
    const tasks = Object.entries(useSelector(selectTasks))
    return (
        <div className="task-week">
            {tasks?.map(([key, value]) => <div className="positionRelative-to-arrow">
                <DropDown key={key} date={key} value={value}></DropDown>
            </div>)}
        </div>
    );
}

export default TaskWeek;