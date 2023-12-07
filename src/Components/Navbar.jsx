import React from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import List from './List'
import ListItem from './ListItem'

const Navbar = () => {
  return (
    <div>
        <Container className='flex py-[33px]'>
            <div className='w-1/5'>
                <img src={logo} alt="" />
            </div>
            <div className='w-4/5'>
                <List className='flex justify-end gap-x-10'>
                    <ListItem className='text-black text-[14px] hover:text-primary hover:font-bold font-dm' itemName='Home'></ListItem>
                    <ListItem className='text-primary text-[14px] hover:text-black hover:font-bold font-dm' itemName='Shop'></ListItem>
                    <ListItem className='text-primary text-[14px] hover:text-black hover:font-bold font-dm' itemName='About'></ListItem>
                    <ListItem className='text-primary text-[14px] hover:text-black hover:font-bold font-dm' itemName='Journal'></ListItem>
                    <ListItem className='text-primary text-[14px] hover:text-black hover:font-bold font-dm' itemName='Contact'></ListItem>
                </List>
            </div>
        </Container>
    </div>
  )
}

export default Navbar