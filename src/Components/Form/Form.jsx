import React, { useState } from 'react'
import './Form.style.css'
import Label from './LabelForm/Label'
import OptionsList from '../OptionsList/OptionsList'
import Buttom from './Buttom/Buttom'
import { v4 as uuid } from 'uuid'

const Form = ({ register }) => {
  
  const [ name , setName] = useState('')
  const [ position , setPosition] = useState('')
  const [ photo , setPhoto] = useState('')
  const [ branch , setBranch] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
    let dataSend = {
      id: uuid(),
      name,
      position,
      photo,
      branch,
      fav: false
    }
    register(dataSend)
    
  }
  return (
    <section className='formulario container d-flex '>
        <form onSubmit={handleForm}>
        <h2 className='title text-center'>Fill the Form</h2>
        <Label name={'Name'} placeholder={'Lawyer Name'} required value={name} setValue={setName}/>
        <Label name={'Position'} placeholder={'Lawyer Position'} required value={position} setValue={setPosition}/>
        <Label name={'Photo'} placeholder={'Lawyer Photo'} required value={photo} setValue={setPhoto}/>
        <OptionsList branch={branch} setBranch={setBranch}/>

        <Buttom/>

        </form>
    </section>
  )
}

export default Form