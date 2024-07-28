import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/usersSlice";
import Modal from "./modal/ModalSorting";

const TopDisplay = () => {
const dispatch = useDispatch();
const [search, setSearch] = useState('');
const [category, setCategory] = useState('phone');
const [modalActive, setModalActive] = useState(false);

const handleSearch = (e) => {
    setSearch(e);
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const response =  await fetch(`https://dummyjson.com/users/filter?key=${category}&value=${encodeURIComponent(search)}`);
    const data = await response.json();
    dispatch(addUsers(data.users));
    setSearch('');
}

    return (
        <div className="top-display">

            <div className="sort-dispalay">
                <button className="sort-btn" onClick={() => setModalActive(!modalActive)}>
                    <img src="./filter.svg" alt="sort" />
                </button>
                <form onSubmit={(e) => handleSubmit(e)}>
                <div className="sort-input">
                    <button className="btn-Search">
                    <img className="img-Search" src="./Search.svg" alt="Search" />
                    </button>
                    <input type="text" placeholder="Search..." value={search} onChange={(e) => handleSearch(e.target.value)}/>
                </div>
                </form>
            </div>

            <div className="all-Users">
                <div className="card-User">
                <p className="id-User">№</p>
                <p className="name-User">Name</p>
                <p className="addres-User">Addres</p>
                <p className={`age-User${category === 'age' ? ' active' : ''}`} onClick={() => setCategory('age')}>Age</p>
                <p className={`sex-User${category === 'gender' ? ' active' : ''}`} onClick={() => setCategory('gender')}>Sex</p>
                <p className={`phone-User${category === 'phone' ? ' active' : ''}`} onClick={() => setCategory('phone')}>Phone</p>
            </div>
            </div>
            {modalActive ? <Modal modalActive={modalActive} setModalActive={setModalActive}></Modal> : null}
        </div>

    )
}

export default TopDisplay;

// Добавьте возможность сортировки элементов таблицы для
//  колонок с ФИО, возрастом, полом и адресом. Сортировка
//   должна иметь три состояния: по возрастанию, по убыванию, без сортировки. 