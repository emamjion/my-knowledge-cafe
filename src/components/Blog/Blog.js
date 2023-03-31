import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='over-line'></div>
            <div className='hero-section'>
                <div className='blog-side'>
                    <img className='cover-img' src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt="" />
                    <div className='details'>
                        <div className='details-section'>
                            <div className='profile'>
                                <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80" alt="" />
                            </div>
                            <div className='title-div'>
                                <span className='title-name'>Mr. Raju</span>
                                <span className='date'>Mar 14 (4 Days ago)</span>
                            </div>
                        </div>
                        <div className='time-div'>
                            <p className='time-read'><span>05</span> min read</p>
                            <i>Icon</i>
                        </div>
                    </div>
                </div>
                <div className='bookmarked-side'>Right</div>
            </div>
        </div>
    );
};

export default Blog;