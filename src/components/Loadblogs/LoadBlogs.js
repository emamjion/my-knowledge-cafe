import React, {useEffect, useState } from 'react';
import './LoadBlogs.css'
import DisplayBlogs from '../Displayblogs/DisplayBlogs';

const LoadBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div className='main-container'>
            <div className='blogs-parent-container'>
                <div className='blogs-container'>
                    {
                        blogs.map(blog => <DisplayBlogs key={blog.id} blogs={blog}></DisplayBlogs>)
                    }
                </div>
                <div className='bookmarked-container'>
                    <div className='spent-time'>Spent time on read: </div>
                    <div className='bookmarked-blog'>
                        <h2 className='bookmarked-heading'>Bookmarked Blogs: </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadBlogs;