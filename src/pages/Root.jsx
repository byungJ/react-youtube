import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Nabvar';

export default function Root() {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

