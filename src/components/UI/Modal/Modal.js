import React from 'react';

import classes from './Modal.css';
import Aux2 from '../../../hoc/Aux2';
import Backdrop from '../Backdrop/Backdrop';

const modal = ( props ) => (
    <Aux2>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux2>
);

export default modal;