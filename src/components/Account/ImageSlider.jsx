import React, { useState } from "react";
import { SliderData } from "./SliderData";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const Image = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Img = styled.div`
  width: 100x;
  height: 100px;
  border-radius: 10px;
`;
const ImageSlider = (slides) => {
  const [current, SetSurrent] = useState(0);
  const length = slides.length;

  return (
    <Image>
      <Carousel>
        <div>
          <Img>
            {SliderData.map((slide, index) => {
              return <img src={slide.image} alt="User's post image" />;
            })}
          </Img>
        </div>
      </Carousel>
    </Image>
  );
};

export default ImageSlider;
