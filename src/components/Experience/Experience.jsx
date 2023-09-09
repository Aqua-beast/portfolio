import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Experience.css'
import { data } from '../../data';
import Icons from "../Icons/Icons";

function Experience() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
    };
    return (
        <div className="carousel-box">
            <h2 className="carousel-head" style={{marginBottom: '2rem'}}>Tech Stack</h2>
            <Slider {...settings}>
            {data.map((dta, index) => (
                <Icons key={index} icons={dta} />
            ))}
            </Slider>
        </div>
    );
}

export default Experience
