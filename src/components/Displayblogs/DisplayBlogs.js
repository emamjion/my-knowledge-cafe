import React from 'react';
import './DisplayBlogs.css';

const DisplayBlogs = (props) => {
    // console.log(props.blogs);
    const {coverImg,imgUrl,authorName,date,title} = props.blogs;
    return (
        <div>
            <div className='over-line'></div>
            <img className='cover-img' src={coverImg} alt="" />
            <div className='info-div'>
                <div className='info-left'>
                    <img className='profile-img' src={imgUrl} alt="" />
                    <div className='name-date'>
                        <span className='author-name'>{authorName}</span>
                        <span className='date'>{date}</span>
                    </div>
                </div>
                <div className='read-time'>
                    <p><span>05</span> min read</p>
                    <span>icon</span>
                </div>
            </div>
            <div className='title-div'>
                <div className='title'>{title}</div>
                <a href="/">Mark as read</a>
            </div>
        </div>
    );
};

export default DisplayBlogs;