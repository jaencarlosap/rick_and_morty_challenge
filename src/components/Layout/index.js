import React from 'react';

import '../../assets/css/App.css'
import Nav from '../Nav';

const Index = (props) => {
    return (
        <div className="grid-container">
            <Nav />
            {props.children}
        </div>
    )
}

export default Index;