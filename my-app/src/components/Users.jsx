import React, {useState} from "react";
import ModalInformation from "./modal/ModaInformationl";

const Users = ({children, white}) => {
const [modalActive, setModalActive] = useState(false);
const {age, address, gender, firstName, lastName, maidenName, phone, id, height, weight, email} = children;
const cn = white % 2 === 0 ? `card-User grey` : `card-User white`
const name = `${firstName} ${lastName} ${maidenName}`
const fullAddress = `${address.city} ${address.address}`

return (
    <>
    <div className={cn} onClick={() => setModalActive(true)}>
        <p className="id-User">{id}</p>
        <p className="name-User">{name}</p>
        <p className="addres-User">{fullAddress}</p>
        <p className="age-User">{age}</p>
        <p className="sex-User">{gender === 'female' ? 'fem' : gender}</p>
        <p className="phone-User">{phone}</p>
    </div>
    {modalActive ? <ModalInformation setModalActive={setModalActive} modalActive={modalActive} name={name} 
    fullAddress={fullAddress} age={age} height={height} email={email} phone={phone} weight={weight}/> : null}    
    </>
);
};

export default Users;