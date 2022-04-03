import React from 'react';
import './ReviewHome.css'

const ReviewHome = (props) => {
    const { id, name, img, review, rating } = props.review;
    return (
        <div className='reviewHome'>
            <div>
                <img className='reviewImage' src={img} alt="" />
            </div>
            <div className='reviewer-info'>
                <h6>{name}</h6>
                <p>"{review}"</p>
                <p><small>Ratings: {rating}</small></p>
            </div>

        </div>
    );
};

export default ReviewHome;