import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to='/'>YouTube</Link>
            <input type='text'/>
            <button>보튼</button>
        </nav>
    );
}