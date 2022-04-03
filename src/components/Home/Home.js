import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <div className='Yamaha-home-text-and-image container'>
            <div className='motorcycle-info'>
                <h1 className='yamaha-text'><span className='text-danger'>YAMAHA</span> MOTORCYCLE<br /> REVS YOUR <span className='text-danger'>HEART</span></h1>
                <h4 className='about-yamaha'>Yamaha Motor Co., Ltd. is a Japanese manufacturer of motorcycles. Yamaha offers a wide range of motorcycles that are well-built, high-performance, sharp-looking, robust and have excellent handling. Yamaha motorcycles are considered such good bikes that they ranked the highest in a Consumer Reports survey that evaluated reliability and customer satisfaction.</h4>
            </div>

            <img src='../../images/yamaha.jpg' alt="" />

        </div>
    );
};

export default Home;