import React from 'react'
import './Contacts.css'
import { GoLocation } from "react-icons/go";
import { MdMailOutline} from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
function Contacts() {
  return (
    <div className = "contacts-space">
        <div className="heading">
        <h1 className="heading_con">Contacts</h1>
        </div>
    <div className = "formContainer">
        <div className ="row">
            <div className ="col-60">
              <div className = "contactForm">
           <form action = "">
           <div className ="inputGroup">
           <label htmlFor = "username">Name</label>
            <input type = "text" name ="username" id = "username" ></input> 
            </div>

            <div className ="inputGroup">
            <label htmlFor = "email">Email</label>
            <input type = "text" name ="email" id = "email" required></input>
            </div>

            <div className ="inputGroup">
            <label htmlFor = "phone">Phone</label>
            <input type = "tel" name ="phone" id = "phone" required></input>
            </div>

            <div className ="inputGroup">
            <label htmlFor = "message">Message</label>
            <textarea type = "text" name ="phone" id = "phone" cols = "10" required></textarea>
            </div>
            <button type = "submit" className="button">Send</button>
           </form>
            </div>
            </div>

            <div className ="col-40">
                <div className = "contactMain">
                <div className = "detailsContainer">
                <GoLocation className ="locIcon" size ="25"/>
                <p className ="detailsTextHeader">Tanur, Malappuram, Kerala ,India-676302</p>
                </div>
                
                <div className = "detailsContainer">
                <MdMailOutline className ="locIcon" size ="25"/>
                <p className ="detailsTextHeader">suhairk.dev@gmail.com</p>
                <p></p>
                </div>

                <div className = "detailsContainer">
                <BsFillTelephoneFill className ="locIcon" size ="25"/>
                <p className ="detailsTextHeader">+971 522563595</p>
                <p></p>
                </div>  
                </div>
                <div className = "googleContainer">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31334.140559625426!2d75.85971541802714!3d10.98090872970938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ad117d291781%3A0x790eaf9b9d484802!2sTanur%2C%20Kerala%20676302%2C%20India!5e0!3m2!1sen!2sae!4v1648476247484!5m2!1sen!2sae" width="100%" height="260"  style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>       
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contacts
