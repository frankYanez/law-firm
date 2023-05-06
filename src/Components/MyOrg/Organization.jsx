import React, { useState } from 'react'
import './Organization.style.css'

const Organization = ({handle}) => {
  return (
    <section className='organization'>
        <div className='d-flex container'>
        <h3 className='title'>Postulates</h3>
        <img className='icon' src="../src/assets/add.png" alt="" onClick={handle}/>
        </div>

    </section>
  )
}

export default Organization