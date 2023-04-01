import React, {useEffect, useState } from 'react';
import './LoadBlogs.css'
import DisplayBlogs from '../Displayblogs/DisplayBlogs';

const LoadBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[]);
    const handleAddToCart = (blogs) => {
        const newCart = [...cart, blogs];
        setCart(newCart);
    }   
    return (
        <div className='main-container'>
            <div className='blogs-parent-container'>
                <div className='blogs-container'>
                    {
                        blogs.map(blog => <DisplayBlogs key={blog.id} blogs={blog} handleAddToCart={handleAddToCart}></DisplayBlogs>)
                    }
                </div>
                <div className='bookmarked-container'>
                    <div className='spent-time'>Spent time on read: </div>
                    <div className='bookmarked-blog'>
                        <h2 className='bookmarked-heading'>Bookmarked Blogs: {cart.length}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadBlogs;