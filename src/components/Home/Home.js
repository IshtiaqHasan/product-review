import React from 'react';
import { Link } from 'react-router-dom';
import CustomersReview from '../../hooks/customersReview';
import ReviewHome from '../ReviewHome/ReviewHome';
import './Home.css';


const Home = () => {
    const [reviews, setReviews] = CustomersReview();

    return (
        <div className='container' >
            <div className='Yamaha-home-text-and-image '>
                <div className='motorcycle-info'>
                    <h1 className='yamaha-text'><span className='text-danger'>YAMAHA</span> MOTORCYCLE<br /> REVS YOUR <span className='text-danger'>HEART</span></h1>
                    <h4 className='about-yamaha'>Yamaha Motor Co., Ltd. is a Japanese manufacturer of motorcycles. Yamaha offers a wide range of motorcycles that are well-built, high-performance, sharp-looking, robust and have excellent handling. Yamaha motorcycles are considered such good bikes that they ranked the highest in a Consumer Reports survey that evaluated reliability and customer satisfaction.</h4>
                </div>

                <img src='../../images/yamaha.jpg' alt="" />
            </div>

            <div>
                <h1 className='customer-reviews'>Customers Love <span className='text-danger'> YAMAHA</span></h1>
                <div className='review-container'>

                    {
                        reviews.slice(0, 3).map(review => <ReviewHome
                            key={review.id}
                            review={review}
                        ></ReviewHome>)
                    }
                </div>
            </div>
            <div className='all-review-link'>
                <Link className='all-reviews' to="/reviews">See All The Reviews</Link>
            </div>

        </div>
    );
};

export default Home;