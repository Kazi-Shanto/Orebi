import React from 'react'
import Container from './Container'
import clock from '../assets/clock.png'

const Clock = () => {
  return (
    <div>
        <Container className='py-32'>
            <img src={clock} alt="" />
        </Container>
    </div>
  )
}

export default Clock