import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './DisplayBlogs.css';

const DisplayBlogs = (props) => {
    const {coverImg,imgUrl,authorName,date,title,readTime} = props.blogs;
    const handleAddToCart = props.handleAddToCart;
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
                    <p><span>{readTime}</span> min read</p>
                    <span onClick={() => handleAddToCart(props.blogs)}><FontAwesomeIcon icon={faBookmark} /></span>
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