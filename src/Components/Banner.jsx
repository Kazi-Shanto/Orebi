import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImage from '../assets/bannerImage.png'


const Banner = () => {
  const [dots, setActiveDots] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setActiveDots({ next, prev });
    },
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "trasparent",
          paddingRight: "44px",
          position: 'absolute',
          top: '34%',
          left: '160px',
          width: '30px',
          borderRight: '3px solid #fff',
          height: 'fit-content',

        }}
      >
        <ul>
          {dots.map((item, index) => {
            return (
              <li key={index}
                style={{
                  display: 'block',
                  height: '40px',
                  paddingTop: "10px",
                  paddingBottom: "40px",
                }}>{item.props.children}</li>
            );
          })}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i == dots ? {
            width: "40px",
            color: "#000",
            borderRight: "3px solid #000",
            height: "40px",
          } :
            {
              width: "40px",
              color: "transparent",
              borderRight: "3px solid #fff",
              height: "40px",
            }
        }
      >
        0{i + 1}
      </div>
    )
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          <div>
            <img src={bannerImage} alt="" />
          </div>
          <div>
            <img src={bannerImage} alt="" />
          </div>
          <div>
            <img src={bannerImage} alt="" />
          </div>

        </Slider>
      </div>
    </div>
  )
}

export default Banner