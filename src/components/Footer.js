import React from 'react'
import './Footer.css'
import { AiFillGithub ,AiFillGoogleCircle,AiOutlineWhatsApp} from "react-icons/ai";
import { TiSocialFacebook, TiSocialInstagram ,TiSocialLinkedin,TiSocialTwitter} from "react-icons/ti";
function Footer() {
  return (
    <div className = "footer-space">
        <div className = "connect">
        <div className = "footerMain">
          <h1 className = "footerHeader">SUHAIR K</h1>
      </div>
      <div className = "footerSubHeader">
      <h3>Lets Connect........</h3>
      </div>
      <div className="connectedContainer">
        <TiSocialFacebook className ="locIconFooter" size ="30" onClick={()=>window.open('https://www.facebook.com/suhair.kalaathhouse/', '_blank')}/>
        <TiSocialInstagram className ="locIconFooter" size ="30" onClick={()=>window.open('https://www.instagram.com/accounts/login/?next=/suha_ir_k/', '_blank')} />
        <AiOutlineWhatsApp className ="locIconFooter" size ="30" onClick={()=>window.open('https://api.whatsapp.com/send?phone=919061878989&text=Hi', '_blank')}/>
        <TiSocialLinkedin className ="locIconFooter" size ="30" onClick={()=>window.open('https://www.linkedin.com/in/suhair-k-55796614b/', '_blank')}/>
        <TiSocialTwitter className ="locIconFooter" size ="30" onClick={()=>window.open('https://twitter.com/Suhai_rk/', '_blank')}/>
        <AiFillGithub className ="locIconFooter" size ="30" onClick={()=>window.open('https://github.com/Suhairk/', '_blank')}/>
        <AiFillGoogleCircle className ="locIconFooter" size ="30" onClick={()=>window.open('https://mail.google.com/', '_blank')}/>
      </div>
        </div>
      <div className = "footerMenu">
      <div className="navigation px_30">
             <ul className="navbar d_flex">
             <a href="#Hero">
                <li className="nav_items border extra-footer mx_20 ">Home</li>
              </a>
              <a href="#About">
                <li className="nav_items extra-footer  mx_20">About</li>
              </a>
              <a href="#Experts">
                <li className="nav_items extra-footer mx_20">Experts</li>
              </a>
              <a href="#Technologies">
                <li className="nav_items extra-footer  mx_20">Technologies</li>
              </a>
              <a href="#Projects">
                <li className="nav_items extra-footer  mx_20">Projects</li>
              </a>
            
              <a href="#Contacts">
                <li className="nav_items extra-footer mx_20">Contacts</li>
              </a>
             </ul>

           </div>

           <div className="lastFooter">
           <h3>Connect me @gmail :</h3><p onClick={()=>window.location.href = 'mailto:suhairk.dev@gmail.com'}>suhairk.dev@gmail.com</p>
           </div>

      </div>

 
    </div>
  )
}

export default Footer
