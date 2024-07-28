import React from "react";

const ModalInformation = ({ setModalActive, modalActive, phone, email, name, fullAddress, age, height, weight}) => {

    const closeModal = () => {
        setModalActive(false);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={!modalActive ? 'unActive modal' : 'modal'} onClick={closeModal}>
        <div className="modal_content" onClick={stopPropagation}>
            <div className="info">
                <p className="title-info">Full name</p>
                <p>{name}</p>
            </div>
            <div className="info">
                <p className="title-info">Address</p>
                <p>{fullAddress}</p>
            </div>
            <div className="info">
                <p className="title-info">Age</p>
                <p>{age}</p>
            </div>
            <div className="info">
                <p className="title-info">Email</p>
                <p>{email}</p>
            </div>
            <div className="info">
                <p className="title-info">Phone</p>
                <p>{phone}</p>
            </div>
            <div className="info">
                <p className="title-info">Height</p>
                <p>{height}</p>
            </div>
            <div className="info">
                <p className="title-info">Weight</p>
                <p>{weight}</p>
            </div>
        </div>
        </div> 
    )

}

export default ModalInformation