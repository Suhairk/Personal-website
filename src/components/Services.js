import React from 'react'
import './Services.css'
import { BsCodeSlash  } from "react-icons/bs";
import { BiCodeCurly,BiMobile } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { SiHandshake} from "react-icons/si";
import { GiArtificialIntelligence} from "react-icons/gi";

function Services() {
  return (
    <div className="service component_space" id="Services">

      <div className="heading">
        <h1 className="heading_services">Experts</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col_3">
            <div className="service_box pointer">
              <div className="icon">
                <BsCodeSlash size = "50"/>
              </div>
              <div className="service_meta">
                <h1 className="service_text">Frontend Development</h1>
                <p className="p service_text p_color">
                  I throw myself down among the
                </p>
                <p className="p service_text p_color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service_text p_color">close to the earth.</p>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="service_box pointer">
              <div className="icon">
              <BiCodeCurly size = "50"/>
                {/* <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg> */}
              </div>
              <div className="service_meta">
                <h1 className="service_text">Backend Development</h1>
                <p className="p service_text p_color">
                  I throw myself down among the
                </p>
                <p className="p service_text p_color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service_text p_color">close to the earth.</p>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="service_box pointer">
              <div className="icon">
              <CgWebsite size = "50"/>
              </div>
              <div className="service_meta">
                <h1 className="service_text">Web Development</h1>
                <p className="p service_text p_color">
                  I throw myself down among the
                </p>
                <p className="p service_text p_color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service_text p_color">close to the earth.</p>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="service_box pointer">
              <div className="icon">
              <BiMobile size = "50"/>
              </div>
              <div className="service_meta">
                <h1 className="service_text">Mobile App Development</h1>
                <p className="p service_text p_color">
                  I throw myself down among the
                </p>
                <p className="p service_text p_color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service_text p_color">close to the earth.</p>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="service_box pointer">
              <div className="icon">
              <SiHandshake size = "50"/>
              </div>
              <div className="service_meta">
                <h1 className="service_text">Marketing & Reporting</h1>
                <p className="p service_text p_color">
                  I throw myself down among the
                </p>
                <p className="p service_text p_color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service_text p_color">close to the earth.</p>
              </div>
            </div>
          </div>

          <div className="col_3">
            <div className="service_box pointer">
              <div className="icon">
              <GiArtificialIntelligence size = "50"/>
              </div>
              <div className="service_meta">
                <h1 className="service_text">AI Applications Development</h1>
                <p className="p service_text p_color">
                  I throw myself down among the
                </p>
                <p className="p service_text p_color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service_text p_color">close to the earth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
