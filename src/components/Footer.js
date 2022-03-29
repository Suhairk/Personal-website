import React from 'react'
import './Footer.css'
import { AiFillGithub ,AiFillGoogleCircle} from "react-icons/ai";
import { TiSocialFacebook, TiSocialInstagram ,TiSocialLinkedin,TiSocialTwitter} from "react-icons/ti";
function Footer() {
  return (
    <div className = "footer-space">
        <div className = "connect">
        <div className = "footerMain">
          <h1 className = "footerHeader">SUHAIR K</h1>
      </div>
      <div className = "footerSubHeader">
      <h3>Lets Connect</h3>
      </div>
      <div className="connectedContainer">
        <TiSocialFacebook className ="locIconFooter" size ="30"/>
        <TiSocialInstagram className ="locIconFooter" size ="30"/>
        <TiSocialLinkedin className ="locIconFooter" size ="30"/>
        <TiSocialTwitter className ="locIconFooter" size ="30"/>
        <AiFillGithub className ="locIconFooter" size ="30"/>
        <AiFillGoogleCircle className ="locIconFooter" size ="30"/>
      </div>
        </div>
      <div className = "footerMenu">
      <div className="navigation px_30">
             <ul className="navbar d_flex">
             <a href="#Home">
                <li className="nav_items border extra-footer mx_20 ">Home</li>
              </a>
              <a href="#About">
                <li className="nav_items extra-footer  mx_20">About</li>
              </a>
              <a href="#Services">
                <li className="nav_items extra-footer mx_20">Experts</li>
              </a>
              <a href="#Services">
                <li className="nav_items extra-footer  mx_20">Technology</li>
              </a>
              <a href="#Services">
                <li className="nav_items extra-footer  mx_20">Projects</li>
              </a>
            
              <a href="#Contact">
                <li className="nav_items extra-footer mx_20">Contact</li>
              </a>
             </ul>

           </div>

           <div className="lastFooter">
           <h3>Connect me @gmail :</h3><p> suhairk.dev@gmail.com</p>
           </div>

      </div>

 
    </div>
  )
}

export default Footer
