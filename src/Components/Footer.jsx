/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./fontsSizeFooter.css"

const Footer = () => {
  return (
    <div >
        <div className='mt-lg-4 mt-md-3 mt-sm-2 mt-1' >
            <img src='/img/footer.jpg' className='w-50'  />
        </div>
       <div className='mt-lg-4 mt-md-3 mt-sm-2 mt-1'>
       <span className='fontSizeFooter text-white'>Copyright 2023 © by</span>
       <span className='fontSizeFooter ms-1 fontColor'>Delight Myanmar Web Team</span>
       </div>
    </div>
  )
}

export default Footer