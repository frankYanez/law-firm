import React, { useState } from "react";
import './LawyerCard.style.css'
import { FcLikePlaceholder , FcLike } from 'react-icons/fc';

const LawyerCard = ({ applicant , data , deletePosition , changeFav }) => {
  const applicantPhoto = `https://randomuser.me/api/portraits/women/${applicant.photo}.jpg`
  console.log(applicant.fav);
  
  return (
    <div className="card">
      <div className="card-header" style={{backgroundColor: data.strongColor}}>
        <img className="card__image" src={applicantPhoto} alt="" />
      </div>
      <div className="card-info" >
        <h3 className="title">{applicant.nombre}</h3>
        <h4>{applicant.position}</h4>
      </div>
      <div className="fav" >
      {
        applicant.fav ? <FcLike onClick={() => changeFav(applicant.id)}/> : <FcLikePlaceholder onClick={() => changeFav(applicant.id)}/>
      }
      </div>
      
      <button onClick={()=> deletePosition(applicant.id)}>Delete</button>
    </div>
  );
};

export default LawyerCard;
