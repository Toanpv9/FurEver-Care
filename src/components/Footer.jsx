import React from 'react';
import './Footer.css'; 
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaPinterest, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          {/* Contact Section */}
          <div className="col-lg-4">
            <div className="widget">
              <h3>Contact</h3>
              <address>21 Dinh Thon Rd. My Dinh, Ha Noi </address>
              <ul className="list-unstyled links">
                <li><a href="tel://8491835760">+84(91)835760</a></li>
                <li><a href="tel://11234567890">+84(123)456789</a></li>
                <li><a href="phamviettoan996@gmail.com">phamviettoan996@gmail.com</a></li>
              </ul>
            </div>
          </div>

          {/* Sources Section */}
          <div className="col-lg-4">
            <div className="widget">
              <h3>Sources</h3>
              <ul className="list-unstyled float-start links">
                <li><a href="/aboutus">About us</a></li>
                <li><a href="/health-tips">Health</a></li>
                <li><a href="/training-tips">Trainning</a></li>
                <li><a href="/termofservices">Terms</a></li>
                <li><a href="/privacypolicy">Privacy</a></li>

                
              </ul>
              <ul className="list-unstyled float-start links">
                <li><a href="/pages/food">Food</a></li>
                <li><a href="/adoption">Adoption</a></li>
                <li><a href="/emergency">Emrgency</a></li>
                <li><a href="/event">Event</a></li>
              </ul>
            </div>
          </div>

          {/* Links & Social Section */}
          <div className="col-lg-4">
            <div className="widget">
              <h3>Links</h3>
              <ul className="list-unstyled links">
                <li><a href="/feedback">Feedback</a></li>
                <li><a href="/aboutus">About us</a></li>
                <li><a href="/contractus">Contact us</a></li>
              </ul>
              <ul className="list-unstyled social">
  <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
  <li><a href="https://x.com/"><FaTwitter /></a></li>
  <li><a href="https://facebook.com/"><FaFacebook /></a></li>
  <li><a href="https://www.linkedin.com/"><FaLinkedin /></a></li>
  <li><a href="https://www.pinterest.com/"><FaPinterest /></a></li>
  <li><a href="https://dribbble.com/"><FaDribbble /></a></li>
</ul>

            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p>
              Copyright &copy; {new Date().getFullYear()} . All Rights Reserved. — Designed with love by <a href="https://Noobbois.com">Noobbois</a>
            </p>
            <div>
Distributed by <a href="https://fureverkare.com/" target="_blank" rel="noreferrer">FurEver-Care</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
