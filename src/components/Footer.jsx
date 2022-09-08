import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
      <div className="footer-wrapper">
        <div className="footer">
          <div className="ft-container">
            <div className="sec about">
              <h2>About us</h2>
              <p>
                Rjwada is an augmented reality-based fashion-tech startup.
                Founded by IITD students and mentored by IIMA professors at
                Rjwada, we are reinventing the e-commerce customer experience by
                providing state-of-the-art 3D AR Try-on.
              </p>
              <ul className="some">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="sec quickLinks">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                {/* <li>
                <a href="#">Terms &amp; conditions</a>
              </li> */}
                <li>
                  <a href="#">Contract</a>
                </li>
              </ul>
            </div>
            <div className="sec contact">
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span>
                    <i
                      className="fa fa-map-marker"
                      style={{ color: "black" }}
                      aria-hidden="true"
                    />
                  </span>
                  <span>
                    Research and Innovation Park IIT Delhi, New Delhi
                    <br />
                    IIT Delhi, New Delhi
                    <br />
                    Delhi 110016
                  </span>
                </li>
                <li>
                  <span>
                    <i
                      className="fa fa-phone"
                      style={{ color: "black",marginTop:"20px" }}
                      aria-hidden="true"
                    />
                  </span>
                  <p>
                    <a href="tel:4542594575">+91 987654321</a>
                  </p>
                </li>
                <li>
                  <span>
                    <i
                      className="fa fa-envelope"
                      style={{ color: "black",marginTop:"20px" }}
                      aria-hidden="true"
                    />
                  </span>
                  <p>
                    <a href="malito:tiago86g@gmail.com">RJWADA@gmail.com</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrightText">
        <p>Copyright © 2022 Rjwada. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;