import React from 'react'
import phoneSale from '../assets/phoneSale.png'
import electronics from '../assets/electronics.png'
import furniture from '../assets/furniture.png'
import Container from './Container'



const Catagory = () => {
  return (
    <div className='pt-[140px]'>

         <Container className='flex'>
                <div className='pr-[40px]'>
                    <img src={phoneSale} alt="" />
                </div>
                <div>
                    <div className='pb-[40px]'>
                        <img src={electronics} alt="" />
                    </div>
                    <div>
                        <img src={furniture} alt="" />
                    </div>
                </div>
         </Container>
    
    </div>
  )
}

export default Catagory