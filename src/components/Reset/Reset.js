import React from "react";
import './Reset.css';

const Reset = (props) => {
    return <div className="reset_button_wrapper">
        <button onClick={() => props.confirmation()} className="reset_button" type="button">E</button>
    </div>
};


export default Reset;