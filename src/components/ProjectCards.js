import React from 'react'
import './ProjectCards.css'

function ProjectCards({ title , image}) {
  return (
      <div className = "projectCard-space">
        <div className = "projectCardsContainer" >
        <img src = {image} alt ={image} className ="imageContainer"></img>
        </div>
        <div className = "projectHeader">
        <h3>{title}</h3>
        </div>
      </div>
    
  )
}

export default ProjectCards
