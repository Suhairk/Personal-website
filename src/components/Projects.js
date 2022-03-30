import React from 'react'
import './Projects.css'
import Carousel from "react-elastic-carousel";
import ProjectCards from '../components/ProjectCards'
import PRO_IMAGES from './PRO_IMAGES'
// const breakPoints=[
//     {}
// ]
const data = [
     {title :"Chat Book", image :PRO_IMAGES.chat},
     {title :"Blog Web App", image :PRO_IMAGES.blog},
     {title :"Movie Date", image :PRO_IMAGES.movie},
     {title :"Medical Data Classifier", image :PRO_IMAGES.medical},
     {title :"Brain Tumor Detector", image :PRO_IMAGES.brain},
     {title :"Pneumonia Detector", image :PRO_IMAGES.pneumonia},
     {title :"Sport Video Classifier", image :PRO_IMAGES.sports},
     {title :"Watermark", image :PRO_IMAGES.watermark},
     {title :"Helmet Detector", image :PRO_IMAGES.helmet},
     {title :"Liscence Plate Detector", image :PRO_IMAGES.liscence},
     {title :"Mask Detector", image :PRO_IMAGES.mask},
     {title :"Face Detection", image :PRO_IMAGES.face},
 
]
const breakPoints =[
    {width: 1, itemsToShow: 1},
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: true },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1 , pagination:true},
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
]
//  let newData = data.map(itr =>{
//     return itr.title
//  })

function Projects() {
  return (
    <div className = "project-space" id="Projects">
           <div className="heading">
            <h1 className="heading_services">Projects</h1>
            </div>
        <Carousel breakPoints = {breakPoints}>
            {data.map((itr,id) =>
                <ProjectCards key = {id} title = {itr?.title} image ={ itr?.image}/>
                )}
        </Carousel>
      
    </div>
  )
}

export default Projects
