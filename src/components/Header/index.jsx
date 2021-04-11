import React from 'react';
import './style.css'

function Header(props) {
    return (
        <div>
            <header>
                <h1>Employee Directory</h1>
                <p>Input name in search field to search a specific employee</p>
            </header>
        </div>
    );
};

export default Header;