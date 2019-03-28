import React from 'react';
import './EraseButtons.css';


const EraseButtons = (props) => {
    return <div className="erase_button_wrapper">
        <button className="erase_button" onClick={() => props.onDelete()} type="button">
            >
        </button>
    </div>

};

export default EraseButtons;