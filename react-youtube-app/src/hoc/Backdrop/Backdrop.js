import React from 'react';
import classes from './Backdrop.module.css';

//Was going to use this component to appear on the appearing of a modal but instead
//used the div that wraps the modal to trigger the closing of the modal
const Backdrop = props => {
    return (
        <div onClick={props.clicked} className={classes.Backdrop}>
            {props.children}
        </div>
    );
};

export default Backdrop;