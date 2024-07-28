import React from "react";
import { IoMdSettings } from "react-icons/io";

const Display = () => {
    return (
        <div className="display">
            <div className="header-display">
                <span className="title-display">Tu-do</span>
                <IoMdSettings className="setting-img"/>
            </div>
        </div>
    );
}

export default Display;