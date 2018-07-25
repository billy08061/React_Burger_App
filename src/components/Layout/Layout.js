import React from 'react';

import Aux2 from '../../hoc/Aux2';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Aux2>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux2>
);

export default layout;