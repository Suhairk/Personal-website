import logo from "../img/logo.png"
import "./Hero.css"
function Hero() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  return (
     <div className="hero" id="Hero">
       <div className="hero_bg">
         {/* header */}
         <div className="header d_flex align_items_center p_30 ">
           <div className="logo">
           <a href="#">  <img src={logo} alt="suhairk" className="logoImage"/></a>    
           </div>
           <div className="navigation px_30 navigationContainer">
             <ul className="navbar d_flex">
             <a href="#Home">
                <li className="nav_items_home navItemText mx_20">Home</li>
              </a>
              <a href="#About">
                <li className="nav_items_home mx_20">About</li>
              </a>
              <a href="#Experts">
                <li className="nav_items_home mx_20">Experts</li>
              </a>
              <a href="#Technologies">
                <li className="nav_items_home mx_20">Technologies</li>
              </a>
              <a href="#Projects">
                <li className="nav_items_home mx_20">Projects</li>
              </a>
            
              <a href="#Contacts">
                <li className="nav_items_contact contactback mx_20">Contacts</li>
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
              <h2 className="home_text pz_10">Hi, I’m Suhair K</h2>
              <h3 className="home_text sweet pz_10">Software/Web/Mobile app Developer.</h3>
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
