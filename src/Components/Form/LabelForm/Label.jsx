import React, { useState } from 'react'
import './Label.style.css'

const Label = (props) => {
  const {name , placeholder, value , setValue} = props
  

  const writeInput = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className='label-form d-flex container'>
        <label className='text' htmlFor="">{name}</label>
        <input 
        placeholder={placeholder} 
        type="text" 
        required 
        value={value}
        onChange={writeInput}
        />

    </div>
  )
}

export default Label