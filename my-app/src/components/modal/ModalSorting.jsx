import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortUsers } from "../../redux/usersSlice";

const Modal = ({ setModalActive, modalActive }) => {
    const [sortOrder, setSortOrder] = useState({
        age: 'none',
        gender: 'none',
        address: 'none',
        fio: 'none',
    });

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
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sortUsers(sortOrder))
    };

    return (
        <div className={!modalActive ? 'unActive modal' : 'modal'} onClick={closeModal}>
            <div className="modal_content" onClick={stopPropagation}>
                <form onSubmit={handleSubmit}>
                    <div className="block-form-modal">
                        <label className="label-modal">Отсортировать возраст</label>
                        <div className="">
                            <input
                                type="radio"
                                id="ageAscending"
                                name="age"
                                value="ascending"
                                checked={sortOrder.age === 'ascending'}
                                onChange={handleChange}
                            />
                            <label htmlFor="ageAscending">По возрастанию</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="ageDescending"
                                name="age"
                                value="descending"
                                checked={sortOrder.age === 'descending'}
                                onChange={handleChange}
                            />
                            <label htmlFor="ageDescending">По убыванию</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="ageNone"
                                name="age"
                                value="none"
                                defaultChecked
                                checked={sortOrder.age === 'none'}
                                onChange={handleChange}
                            />
                            <label htmlFor="ageNone">Без сортировки</label>
                        </div>
                    </div>

                    <div>
                        <label className="label-modal">Отсортировать по полу</label>
                        <div>
                            <input
                                type="radio"
                                id="genderMale"
                                name="gender"
                                value="male"
                                checked={sortOrder.gender === 'male'}
                                onChange={handleChange}
                            />
                            <label htmlFor="genderMale">Мужчины</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="genderFemale"
                                name="gender"
                                value="female"
                                checked={sortOrder.gender === 'female'}
                                onChange={handleChange}
                            />
                            <label htmlFor="genderFemale">Женщины</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="genderNone"
                                name="gender"
                                value="none"
                                defaultChecked
                                checked={sortOrder.gender === 'none'}
                                onChange={handleChange}
                            />
                            <label htmlFor="genderNone">Без сортировки</label>
                        </div>
                    </div>

                    <div>
                        <label className="label-modal">Отсортировать по адресу</label>
                        <div>
                            <input
                                type="radio"
                                id="addressAscending"
                                name="address"
                                value="ascending"
                                checked={sortOrder.address === 'ascending'}
                                onChange={handleChange}
                            />
                            <label htmlFor="addressAscending">В алфавитном порядке</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="addressDescending"
                                name="address"
                                value="descending"
                                checked={sortOrder.address === 'descending'}
                                onChange={handleChange}
                            />
                            <label htmlFor="addressDescending">В обратном порядке</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="addressNone"
                                name="address"
                                value="none"
                                defaultChecked
                                checked={sortOrder.address === 'none'}
                                onChange={handleChange}
                            />
                            <label htmlFor="addressNone">Без сортировки</label>
                        </div>
                    </div>

                    <div>
                        <label className="label-modal">Отсортировать по ФИО</label>
                        <div>
                            <input
                                type="radio"
                                id="fioAscending"
                                name="fio"
                                value="ascending"
                                checked={sortOrder.fio === 'ascending'}
                                onChange={handleChange}
                            />
                            <label htmlFor="fioAscending">В алфавитном порядке</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="fioDescending"
                                name="fio"
                                value="descending"
                                checked={sortOrder.fio === 'descending'}
                                onChange={handleChange}
                            />
                            <label htmlFor="fioDescending">В обратном порядке</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="fioNone"
                                name="fio"
                                value="none"
                                defaultChecked
                                checked={sortOrder.fio === 'none'}
                                onChange={handleChange}
                            />
                            <label htmlFor="fioNone">Без сортировки</label>
                        </div>
                    </div>
                    <div className="btn-div">
                        <button className="btn" type="submit">Применить</button>    
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Modal;
