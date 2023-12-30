import React from 'react'
import SectionHeading from './SectionHeading'
import Container from './Container'
import Product from './Product'
import p4 from '../assets/p4.png'
import p3 from '../assets/p3.png'
import p2 from '../assets/p2.png'
import p1 from '../assets/p1.png'
import p5 from '../assets/p5.png'
import Slider from "react-slick"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div

      style={{
        ...style,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        background: "rgba(0, 0, 0, 0.20)",
        height: '64px',
        width: '64px',
        borderRadius: '50%',
        position: 'absolute',
        top: '40%',
        right: '32px'

      }}
      onClick={onClick}
    >

      <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.1983 2.63111L0.462595 2.63111C0.226969 2.63111 0.0359278 2.82215 0.0359278 3.05778V5.04889C0.0359278 5.28451 0.226969 5.47555 0.462595 5.47555L11.1983 5.47555V7.11321C11.1983 7.87346 12.1174 8.25418 12.655 7.71662L15.7149 4.65674C16.0482 4.32348 16.0482 3.78318 15.7149 3.44995L12.655 0.390078C12.1175 -0.147487 11.1983 0.233242 11.1983 0.993491V2.63111Z" fill="white" />
      </svg>


    </div>
  );
}






function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div

      style={{
        ...style,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        background: "rgba(0, 0, 0, 0.20)",
        height: '64px',
        width: '64px',
        borderRadius: '50%',
        position: 'absolute',
        top: '40%',
        left: '0',
        zIndex: '9999'

      }}
      onClick={onClick}
    >


      <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.80172 5.36889H15.5374C15.773 5.36889 15.9641 5.17785 15.9641 4.94222V2.95111C15.9641 2.71549 15.773 2.52445 15.5374 2.52445H4.80172V0.886794C4.80172 0.126545 3.88258 -0.254184 3.34498 0.28338L0.285103 3.34326C-0.0481593 3.67652 -0.0481593 4.21682 0.285103 4.55005L3.34498 7.60992C3.88254 8.14749 4.80172 7.76676 4.80172 7.00651V5.36889Z" fill="white" />
      </svg>



    </div>
  );
}

const NewArrivals = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <Container className='py-32'>
        <SectionHeading heading='New Arrivals' />
        <div>
          <Slider {...settings}>
            <div className='w-[370px]'>
              <Product imgsrc={p1} />
            </div>
            <div className='w-[370px]'>
              <Product imgsrc={p2} />
            </div>
            <div className='w-[370px]'>
              <Product imgsrc={p3} />
            </div>
            <div className='w-[370px]'>
              <Product imgsrc={p4} />
            </div>
            <div className='w-[370px]'>
              <Product imgsrc={p5} />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  )
}

export default NewArrivals