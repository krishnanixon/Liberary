import React, { Children } from 'react'
import Headder from './Headder.jsx';
import Sidebar from './Sidebar.jsx';

const Layout = ({ children }) => {
    return (
        <>
            <Headder />
            <div className='mainContainer'>
                {children}
            </div>
        </>
    )
}

export default Layout