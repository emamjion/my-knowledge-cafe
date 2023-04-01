import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    for(const spendTime of cart){
        total = total + spendTime.readTime;
    }
    return (
        <div>
            <div className='spent-time'>Spent time on read: {total} min</div>
            <div className='bookmarked-blog'>
                <h2 className='bookmarked-heading'>Bookmarked Blogs: {cart.length}</h2>
                <h3 className='bookmarked-add-title'>Hello</h3>
            </div>
        </div>
    );
};

export default Cart;