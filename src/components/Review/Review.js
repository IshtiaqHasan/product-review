import React from 'react';
import './Review.css'
const Review = (props) => {
    const { id, name, img, review, rating } = props.review;
    return (
        <div className='review-sec'>
            <div>
                <img className='reviewImage' src={img} alt="" />
            </div>
            <div className='reviewer-information'>
                <h6>{name}</h6>
                <p>"{review}"</p>
                <p><small>Ratings: {rating}</small></p>
            </div>
        </div>
    );
};

export default Review;