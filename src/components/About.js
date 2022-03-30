import aboutImg from '../img/about1.jpeg'
import './About.css'
function About() {
  return (
    <div className="about component_space" id="About">
              <div className="container">
              <div className="row">
              <div className="col_2">
            <img src={aboutImg} alt="suhairk" className="about_img" />
          </div>
          <div className="col_2">
          <h1 className="about_heading">About</h1>
          <div className="about_meta">
          <p className="about_text ">
          Graduated in electronics and communication engineering, passionate, dedicated
          and competent software developer who has hands-on experience in
          designed and developed software applications, strong knowledge in frontend development, 
          backend development and mobile application development
              </p>
              <p className="about_text p_color">
              A confident, articulate
              and organised person with strong interpersonal skills who is able to
              effectively do all of the duties required of an adminstrator, dedicated to great 
              customer engagements and able to quickly grasp the working
              of an organisation as well as its exact needs
              </p>
            
              {/* button */}
              <div className="about_button d_flex align_items_center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#Contacts">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
              {/*end button */}
          </div>
          </div>
              </div>
              </div>
    </div>
  )
}

export default About
