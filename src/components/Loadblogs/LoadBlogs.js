import React, {useEffect, useState } from 'react';
import './LoadBlogs.css'
import DisplayBlogs from '../Displayblogs/DisplayBlogs';

const LoadBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='main-container'>
            <div className='over-line'></div>
            <div className='blogs-parent-container'>
                <div className='blogs-container'>
                    {
                        blogs.map(blog => <DisplayBlogs key={blog.id} blogs={blog}></DisplayBlogs>)
                    }
                </div>
                <div className='bookmarked-container'>
                    <h2>Bookmarked</h2>
                </div>
            </div>
        </div>
    );
};

export default LoadBlogs;