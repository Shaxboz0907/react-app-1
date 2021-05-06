import React from 'react';
import './app-header.css';
const AppHeader = ({Liked , allPosts}) => {
    return (
        <div className='app-header d-flex' >
            <h1>Urinov Shaxboz</h1>
            <h2> {allPosts} записей, из них понравилось {Liked}</h2>
        </div>
    )
}

export default AppHeader ;