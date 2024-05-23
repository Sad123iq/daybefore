import React from 'react'
import "./Wine.scss"
import Slider from "react-slick";

const Wine = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="container">
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src="https://preview.colorlib.com/theme/wines/images/hero_2.jpg.webp" alt="" />
                    </div>
                    <div>
                        <img src="https://preview.colorlib.com/theme/wines/images/hero_1.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}


export default Wine