import React, {useState} from "react";
import { setCompletTask } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";
import ModalSettings from "../modal/ModalSettings";

const Task = ({children, index}) => {
    const {completeTask, description, title, id, selectedColor, time} = children;
    const [switchOn, setSwitchOn] = useState(completeTask);
    const [ modalActiveSetting, setModalActiveSetting ] = useState(false);
    const dispatch = useDispatch();
    const titleCn = switchOn ? `name-task line-through` : `name-task`;
    const switchCn = switchOn ? 'switch-btn switch-on' : 'switch-btn';

    const handleSwitch = () => {
        setSwitchOn(!switchOn)
        dispatch(setCompletTask({value: switchOn, index, id}))
    }
     
    return (
        <div className="task-div" >
            <div>
                <div className="color" style={{background: selectedColor}}></div>
            </div>
            <div className="text-task" >
                <div className="task-content" onClick={() => setModalActiveSetting(!modalActiveSetting)}>
                    <span className={titleCn}>{title}</span>
                    <span className="description-task">{description}</span>
                </div>
                <div className="div-time" onClick={() => setModalActiveSetting(!modalActiveSetting)}>
                    <span className="time">{time}</span>
                </div>
                <div>
                    <div className={switchCn} onClick={handleSwitch}></div>
                </div>
            </div>
            {modalActiveSetting ? <ModalSettings setModalActive={setModalActiveSetting} modalActive={modalActiveSetting} id={id} index={index} {...children}/> : null} 
        </div> 
    );
}

export default Task;

