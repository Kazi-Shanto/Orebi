import React from 'react'
import Container from './Container'
import Product from './Product'
import SectionHeading from './SectionHeading'
import p4 from '../assets/p4.png'
import p3 from '../assets/p3.png'
import p2 from '../assets/p2.png'
import p1 from '../assets/p1.png'

const SpecialOffer = () => {
  return (
    <div>
        <Container className='py-32'>
        <SectionHeading heading='Special Offers' />
                <div className='flex gap-x-10'>

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

                </div>
        </Container>
    </div>
  )
}

export default SpecialOffer