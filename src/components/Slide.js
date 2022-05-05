import React, { Component } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";

export default class Slide extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="mt-8">
                <h2> Slider</h2>
                <Slider {...settings}>
                    {this.props.product}
                </Slider>
            </div>
        );
    }
}