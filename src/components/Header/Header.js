import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Blog Cafe</h1>
            <ul className='navlist'>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blogs">Blogs</a></li>
            </ul>
            <div className='profile-img'>
                <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80" alt="profile"/>
            </div>
        </div>
    );
};

export default Header;