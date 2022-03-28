import aboutImg from '../img/about.jpg'
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
          <h1 className="about_heading">About Me</h1>
          <div className="about_meta">
          <p className="about_text ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              <p className="about_text p_color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
                or randomised words which dont look even slightly believable. If
                you are going to use a passage of Lorem Ipsum,
              </p>
              <p className="about_text p_color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
              </p>l
              {/* button */}
              <div className="about_button d_flex align_items_center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
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
