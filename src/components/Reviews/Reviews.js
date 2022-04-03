import React from 'react';
import CustomersReview from '../../hooks/customersReview';
import Review from '../Review/Review';
import "./Reviews.css"

const Reviews = () => {
    const [reviews, setReviews] = CustomersReview();
    return (
        <div className="container">
            <h1 className='customer-reviews'>Know From Our Customers</h1>
            <div className='review-section'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;