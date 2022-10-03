/** @format */

import React from 'react';
import './footer.css';
import footer_icon from '../../Assets/itic-icons/white-logo.png';
import footer_logo from '../../Assets/itic-icons/footer brand logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHouseChimney,
  faPhone,
  faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faSquareFacebook,
  faLinkedin,
  faSquareTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className='footer-area'>
        <div className='divider'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12'>
              <div className='single-footer-widget'>
                <div className='logo'>
                  <a href='#image'>
                    <img src={footer_icon} alt='white-itic-logo' />
                  </a>
                </div>
                <p>
                  iTIC Incubator at IIT Hyderabad focuses on supporting deeptech
                  startups from idea to growth stage under its structured
                  pre-incubation, incubation and accelerator programs.
                </p>
                <div className='logo mt-3' style={{ width: '250px' }}>
                  <img src={footer_logo} alt='itic brand logo' />
                </div>
              </div>
            </div>
            <div className='col-lg-8 col-sm-12 navlinks'>
              <div className='row'>
                <div className='single-footer-widget col-lg-3 col-sm-6 col-6 col-md-6'>
                  <h3>Main Links</h3>

                  <ul className='services-list'>
                    <li>
                      <a href='../about-us.html'>About Us</a>
                    </li>
                    <li>
                      <a href='../eeiith.html'>
                        Entrepreneurship Ecosystem at IITH
                      </a>
                    </li>
                    <li>
                      <a href='../startups.html'>Startups</a>
                    </li>
                    <li>
                      <a href='../contact-us.html'>Contact Details</a>
                    </li>
                    <li>
                      <a href='../contact-us.html'>Book a Meeting</a>
                    </li>
                  </ul>
                </div>
                <div className='single-footer-widget col-lg-3 col-sm-6 col-6 col-md-6'>
                  <h3>People</h3>

                  <ul className='services-list'>
                    <li>
                      <a href='../board.html'>Board</a>
                    </li>
                    <li>
                      <a href='../mentors.html'>Mentors</a>
                    </li>
                    {/* <li><a href="../coaches.html">Coaches</a></li>
                            <li><a href="../network.html">Network</a></li> */}
                    <li>
                      <a href='../team.html'>Team</a>
                    </li>
                    <li>
                      <a href='../careers.html'>Careers</a>
                    </li>
                  </ul>
                </div>
                <div className='single-footer-widget col-lg-3 col-sm-6 col-6 col-md-6'>
                  <h3>Programs</h3>

                  <ul className='support-list'>
                    <li>
                      <a href='../nice.html'>NICE</a>
                    </li>
                    <li>
                      <a href='../tihan.html'>TiHAN</a>
                    </li>
                    <li>
                      <a href='../idex-dio.html'>iDEX</a>
                    </li>
                    <li>
                      <a href='../nidhi-prayas.html'>NIDHI PRAYAS</a>
                    </li>
                    <li>
                      <a href='../meity-tide.html'>Meity TIDE 2.0</a>
                    </li>
                    <li>
                      <a href='../aisea.html'>AISEA</a>
                    </li>
                    <li>
                      <a href='../bel-seed-fund.html'>BEL Seed Fund</a>
                    </li>
                  </ul>
                </div>
                <div className='single-footer-widget col-lg-3 col-sm-6 col-6 col-md-6'>
                  <h3>Media</h3>
                  <ul className='support-list'>
                    <li>
                      <a href='../videos.html'>Videos</a>
                    </li>
                    <li>
                      <a href='../reports.html'>Reports</a>
                    </li>
                    <li>
                      <a href='../downloads.html'>Downloads</a>
                    </li>
                    <li>
                      <a href='../privacy-policy.html'>Privacy Policy</a>
                    </li>
                    {/* <!-- <li><a href="../gallery.html">Gallery</a></li> -->
                            <!-- <li><a href="../newsletter.html">Newsletter</a></li> -->

                            <!-- <li><a href="../press-newsroom.html">Press / Newsroom</a></li> -->
                            <!--<li><a href="brandkit.html">Brandkit</a></li>-->
                            <!-- <li><a href="../blog.html">Blog</a></li> --> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-12 text-center'>
              <div>
                <ul className='footer-contact-info'>
                  <li>
                    <FontAwesomeIcon icon={faHouseChimney} />
                    &nbsp; 607, Academic Block-C IIT Hyderabad, Kandi,
                    Sangareddy, Telangana, India - 502284
                    <br />
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp; Email:
                    <a href='mailto:contact@itic.iith.ac.in'>
                      contact@itic.iith.ac.in
                    </a>
                    &nbsp; &nbsp;
                    <FontAwesomeIcon icon={faPhone} /> Landline{' '}
                    <a href='tel:+914023016169'>+91 40 2301 6169</a>
                    &nbsp;&nbsp; <FontAwesomeIcon
                      icon={faMobileScreenButton}
                    />{' '}
                    Mobile:
                    <a href='tel:+919398323668'>+91 93983 23668</a>
                    <br />
                    <a
                      className='px-1 footer-social-icon'
                      href='https://www.instagram.com/iTICIncubator'
                      target={'_blank'}
                      rel='noreferrer'>
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                      className='px-1 footer-social-icon'
                      href='https://www.facebook.com/iTICIncubator'
                      target={'_blank'}
                      rel='noreferrer'>
                      <FontAwesomeIcon icon={faSquareFacebook} />
                    </a>
                    <a
                      className='px-1 footer-social-icon'
                      href='https://www.linkedin.com/company/iTICIncubator'
                      target={'_blank'}
                      rel='noreferrer'>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                      className='px-1 footer-social-icon'
                      href='https://twitter.com/iTICIncubator'
                      target={'_blank'}
                      rel='noreferrer'>
                      <FontAwesomeIcon icon={faSquareTwitter} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='copyright-area'>
              <p>Copyright @2022 iTIC Incubator</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
