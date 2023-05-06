import React from 'react'
import './Branchs.style.css'
import LawyerCard from '../LawyerCard/LawyerCard'

const Branchs = ({applicants , data , deletePosition , changeFav}) => {
  
  return <>
    { applicants.length > 0 &&
    <section style={{backgroundColor:data.softColor}}>
        <h2 className='title'  >{data.title} </h2>
        <div className='contain__branch d-flex flex-wrap'>
          {
            applicants.map((applicant , index) => <LawyerCard 
            data={data} 
            key={index} 
            deletePosition={deletePosition}
            changeFav={changeFav}
            applicant={ applicant }/>)
          }
          
        </div>
    </section>
}
    </>
}

export default Branchs