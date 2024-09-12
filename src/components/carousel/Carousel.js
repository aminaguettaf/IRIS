import React from 'react';
import './Carousel.css';
import slide1 from "../../assets/sliden1.jpg";
import slide2 from "../../assets/sliden2.jpg";
import slide3 from "../../assets/sliden3.jpg";

const Carousel = () => {
    return (
        <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <i className="fa-solid fa-angle-left left" data-bs-target="#carouselExample" data-bs-slide="prev"></i>
            <i className="fa-solid fa-angle-right right" data-bs-target="#carouselExample" data-bs-slide="next"></i>
        </div>
    )
}
export default Carousel
