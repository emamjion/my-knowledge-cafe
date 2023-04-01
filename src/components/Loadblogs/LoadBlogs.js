import React, {useEffect, useState } from 'react';
import './LoadBlogs.css'
import DisplayBlogs from '../Displayblogs/DisplayBlogs';
import Cart from '../Cart/Cart';

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
                    <Cart cart={cart} blogs={blogs}></Cart>
                </div>
            </div>
        </div>
    );
};

export default LoadBlogs;