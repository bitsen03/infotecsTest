import React, { useState } from "react";
import ModalInputs from "./ModalInputs";
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/taskSlice";

const ModalSettings = ({ setModalActive, modalActive, description, title, id, selectedColor, time, index}) => {
    const dispatch = useDispatch();

    const colors = [
        'rgb(206, 237, 199)', 
        'rgb(255, 148, 148)', 
        'rgb(255, 212, 178)', 
        'rgb(255, 246, 189)', 
        'rgb(215, 227, 252)', 
        'rgb(255, 200, 221)'
    ];

    const [titleInp, setTitle] = useState(title);
    const [descriptionInp, setDescription] = useState(description);
    const [timeInp, setTime] = useState(time);
    const [selecteColor, setSelectedColor] = useState(selectedColor);

    const closeModal = () => {
        setModalActive(!modalActive);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleUpdateTask = () => {
        dispatch(updateTask({id, index, updates: {
            title: timeInp,
            description: descriptionInp,
            time: timeInp,
            selectedColor: selecteColor,
        }}))
        closeModal();
    }

    return (
        <div className={!modalActive ? 'unActive modal' : 'modal'} onClick={closeModal}>
            <div className="modal_content" onClick={stopPropagation}>
                <ModalInputs 
                    title={titleInp} 
                    description={descriptionInp} 
                    setTitle={setTitle} 
                    setDescription={setDescription} 
                    colors={colors} 
                    selectedColor={selecteColor}
                    time={timeInp}
                    handleColorSelect={handleColorSelect}
                />
                    <div className="tasks-btn">
                        <input type="time" value={timeInp} onChange={(e) => setTime(e.target.value)}/>
                        <div className="buttons">
                            <button className="cansel-create-task btn" onClick={closeModal}>
                                Отмена
                            </button>
                            <button className="add-task btn" onClick={handleUpdateTask}>
                                Обновить задачу
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default ModalSettings;