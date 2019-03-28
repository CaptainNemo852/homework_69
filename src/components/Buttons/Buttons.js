import React from 'react';
import "./Buttons.css"


const Buttons = (props) => {
    return <div className="button_wrapper">
        <button type="button" onClick={() => props.clicked(props.val)} className="button">{props.val}</button>
    </div>

};

export default Buttons;