import React from "react";
import { useDispatch } from "react-redux";
import { sortUsers } from "../../redux/usersSlice";

const Modal = ({ setModalActive, modalActive, sortOrder, setSortOrder }) => {
    const dispatch = useDispatch();

    const closeModal = () => {
        setModalActive(false);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSortOrder((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sortUsers(sortOrder));
    };

    return (
        <div className={!modalActive ? "unActive modal" : "modal"} onClick={closeModal}>
            <div className="modal_content" onClick={stopPropagation}>
                <form onSubmit={handleSubmit}>
                    <div className="block-form-modal">
                        <label className="label-modal">Отсортировать возраст</label>
                        <select name="age" value={sortOrder.age} onChange={handleChange}>
                            <option value="none">Без сортировки</option>
                            <option value="ascending">По возрастанию</option>
                            <option value="descending">По убыванию</option>
                        </select>
                    </div>

                    <div className="block-form-modal">
                        <label className="label-modal">Отсортировать по полу</label>
                        <select name="gender" value={sortOrder.gender} onChange={handleChange}>
                            <option value="none">Без сортировки</option>
                            <option value="male">Мужчины</option>
                            <option value="female">Женщины</option>
                        </select>
                    </div>

                    <div className="block-form-modal">
                        <label className="label-modal">Отсортировать по адресу</label>
                        <select name="address" value={sortOrder.address} onChange={handleChange}>
                            <option value="none">Без сортировки</option>
                            <option value="ascending">В алфавитном порядке</option>
                            <option value="descending">В обратном порядке</option>
                        </select>
                    </div>

                    <div className="block-form-modal">
                        <label className="label-modal">Отсортировать по ФИО</label>
                        <select name="fio" value={sortOrder.fio} onChange={handleChange}>
                            <option value="none">Без сортировки</option>
                            <option value="ascending">В алфавитном порядке</option>
                            <option value="descending">В обратном порядке</option>
                        </select>
                    </div>

                    <div className="btn-div">
                        <button className="btn pointer" type="submit">
                            Применить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
