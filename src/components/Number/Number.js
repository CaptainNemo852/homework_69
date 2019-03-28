import React, {Fragment} from 'react';
import "./Number.css";

const Number = props => {
    return <Fragment>
        <button onClick={props.clicked} value={props.value}/>
    </Fragment>

};

export default Number;
