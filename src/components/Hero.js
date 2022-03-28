import logo from "../img/logo.png"
import "./Hero.css"
function Hero() {
  return (
     <div className="hero" id="Hero">
       <div className="hero_bg">
         {/* header */}
         <div className="header d_flex align_items_center p_30 ">
           <div className="logo">
             <img src={logo} alt="suhairk"/>
           </div>
           <div className="navigation px_30">
             <ul className="navbar d_flex">
             <a href="#Home">
                <li className="nav_items mx_20">Home</li>
              </a>
              <a href="#About">
                <li className="nav_items mx_20">About</li>
              </a>
              <a href="#Services">
                <li className="nav_items mx_20">Services</li>
              </a>
            
              <a href="#Contact">
                <li className="nav_items mx_20">Contact</li>
              </a>
             </ul>

           </div>
         </div>
         {/*end header */}
         {/* hero text */}
         <div className="container">
          <div className="home_content">
            <div className="home_meta">
              <h1 className="home_text pz_10">WELCOME TO MY WORLD</h1>
              <h2 className="home_text pz_10">Hi, I’m Suhair</h2>
              <h3 className="home_text sweet pz_10">Software Developer.</h3>
              <h4 className="home_text pz_10">based in INDIA.</h4>
            </div>
          </div>
        </div>
        {/*end hero text */}
       </div>
       </div>
    
  )
}

export default Hero;
