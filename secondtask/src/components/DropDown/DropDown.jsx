import React, {useState} from "react";
import Task from "./Task";
import { IoIosArrowDropdown, IoIosArrowDropup, IoIosAdd } from "react-icons/io";
import ModalCreate from "../modal/ModalCreate";

const DropDown = ({value, date}) => {
    const [ modalActive, setModalActive ] = useState(false);
    const [active, setActive] = useState(false); 
    const cn = active ? `active task` : 'task';

    return (
        <>
            <label className="task label">
                <div className="qwe">
                    <IoIosAdd className="setting-img" onClick={() => setModalActive(!modalActive)}></IoIosAdd>
                    {date}
                </div>
            </label>
            <div className="div-arrow" onClick={() => setActive(!active)}>
                {active ?  <IoIosArrowDropup className="arrow"/> : <IoIosArrowDropdown className="arrow"/>}
            </div>
            <div>  
                <div className={cn}>
                    <div className="all-Tasks">
                        {
                           value.length !== 0 ? value.map((el, index) => <Task index={index} >{el}</Task>) : <span>Задач пока нет</span>
                        }
                    </div>
                </div> 
                {modalActive ? <ModalCreate setModalActive={setModalActive} id={date} modalActive={modalActive} /> : null}
            </div>
        </>
    );
}

export default DropDown;