import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default class ImageSlider extends Component {
  // const ImageSlider = () => {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      initialSlide: 0,
      className: "slides",
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const Img = styled.img`
      display: flex;
      flex-direction: row;
      position: relative;
      justify-content: space-between;
      width: 200px;
      height: 200px;
      padding: 10px;

      @media (max-width: 480px) {
        justify-items: center;
        margin-left: 90px;
      }
    `;
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07" />
          </div>
          <div>
            <Img src="https://images.pexels.com/photos/7803857/pexels-photo-7803857.jpeg" />
          </div>
          <div>
            <Img src="https://images.pexels.com/photos/7524474/pexels-photo-7524474.jpeg" />
          </div>
          <div>
            <Img src="https://images.pexels.com/photos/7574923/pexels-photo-7574923.jpeg" />
          </div>
          <div>
            <Img src="https://images.pexels.com/photos/3693914/pexels-photo-3693914.jpeg" />
          </div>
          <div>
            <Img src="https://cdn.pixabay.com/photo/2017/08/21/19/00/alone-2666433__340.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
