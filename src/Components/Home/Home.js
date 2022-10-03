/** @format */

import React, { useState, useEffect } from 'react';
import './Home.css';
import hero_img from '../../Assets/slider/hero-img.png';
import build_1 from '../../Assets/slider/Homepageimg1.jpg';
import build_2 from '../../Assets/slider/Homepageimg2.jpg';
import footer_icon from '../../Assets/itic-icons/white-logo.png';
import footer_logo from '../../Assets/itic-icons/footer brand logo.png';
import Particle from './Particle.jsx';
import { Slide } from '@material-ui/core';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import { facilities, focus_area } from './data.js';
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

const Home = () => {
  const [odo, setOdo] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    sixth: 0,
  });

  const [overview, setOverview] = useState(false);
  const [impact, setImpact] = useState(false);
  const [impact1, setImpact1] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position);
    if (position > 350) {
      setOverview(true);
    }
    if (position > 850) {
      setOdo({
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        fifth: 0,
        sixth: 0,
      });
      setImpact(true);
    }
    if (position > 950) {
      setImpact1(true);
      setOdo({
        first: 100,
        second: 7,
        third: 800,
        fourth: 1.5,
        fifth: 1000,
        sixth: 150,
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* start banner area */}
      <section>
        <div className='saas-banner'>
          <Particle />
          <div className='container con-width'>
            <div className='row row-align'>
              <div className='col-lg-6 col-md-12'>
                <div className='slide-image'>
                  <img alt='img' src={hero_img} />
                </div>
              </div>
              <div className='col-lg-6 col-md-12 m-auto '>
                <div className='hero-content'>
                  <h1>Unleashing Deeptech Innovation and Entrepreneurship</h1>
                  {/* <a href='#button' target='_blank' className='banner-btn px-5'>
                    Apply for Nidhi Prayas
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end banner area */}
      {/* Start Overview Area */}

      <section className='bg-light'>
        <Slide direction='up' in={overview} timeout={{ enter: 2000 }}>
          <div className='container con-width'>
            <div className='col-lg-12'>
              <h2 className='section-title'>
                What is <span className='span-color'>i</span>TIC ?
              </h2>
              <p>
                iTIC is an incubator under the aegis of the Indian Institute of
                Technology Hyderabad (IITH) and supported by the Department of
                Science and Technology (DST), Government of India. iTIC is a
                Not-For-Profit Society that focuses on creating a supportive and
                nourishing environment for budding entrepreneurs in the field of
                technology. iTIC aims to help entrepreneurs leverage a premier
                quality research and startup ecosystem to build a comprehensive
                platform to practice innovation and entrepreneurship so that
                these entrepreneurial ideas can be turned into sustainable,
                scalable profit-making business ventures.
              </p>
            </div>
            <div className='Overview-img row'>
              <div className='col-lg-6 col-md-12 aln-lft'>
                <Slide
                  direction='right'
                  in={overview}
                  timeout={{ enter: 3000 }}>
                  <img src={build_1} alt='homepage' />
                </Slide>
              </div>
              <div className='col-lg-6 col-md-12 aln-rt'>
                <Slide
                  direction='right'
                  in={overview}
                  timeout={{ enter: 3000 }}>
                  <img src={build_2} alt='homepage' />
                </Slide>
              </div>
            </div>
          </div>
        </Slide>
      </section>

      {/* End Overview Area */}
      {/* start impact area */}
      <section>
        <div className='container w-map'>
          <h2 className='section-title'>
            Impact By <span className='span-color'>i</span>TIC
          </h2>
          <div className='funfacts-inner'>
            <div className='row pb-3 m-auto'>
              <Slide direction='right' in={impact} timeout={{ enter: 3000 }}>
                <div className='col-lg-4 col-6 col-sm-6'>
                  <div className='single-funfacts'>
                    <div className='funfacts-style-two'>
                      <h3>
                        <Odometer
                          format='d'
                          duration={3000}
                          value={`${odo.first}`}
                        />
                        +
                      </h3>
                      <p>Total Startups supported</p>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide direction='right' in={impact} timeout={{ enter: 3000 }}>
                <div className='col-lg-4 col-6 col-sm-6'>
                  <div className='single-funfacts'>
                    <div className='funfacts-style-two'>
                      <h3>
                        <Odometer
                          format='(,ddd).dd'
                          duration={3000}
                          value={`${odo.second}`}
                        />{' '}
                        Cr+
                      </h3>
                      <p>Total funds sanctioned to Startups</p>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide direction='right' in={impact} timeout={{ enter: 3000 }}>
                <div className='col-lg-4 col-6 col-sm-6'>
                  <div className='single-funfacts'>
                    <div className='funfacts-style-two'>
                      <h3>
                        <Odometer
                          format='(,ddd).dd'
                          duration={3000}
                          value={`${odo.third}`}
                        />{' '}
                        Cr+
                      </h3>
                      <p>Total revenues generated by Startups</p>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide direction='right' in={impact1} timeout={{ enter: 3000 }}>
                <div className='col-lg-4 col-6 col-sm-6'>
                  <div className='single-funfacts'>
                    <div className='funfacts-style-two'>
                      <h3>
                        <Odometer
                          format='(,ddd).dd'
                          duration={3000}
                          value={`${odo.fourth}`}
                        />{' '}
                        Lac <span className='fs-4'>Sq.ft</span>
                      </h3>
                      <p>Dedicated Incubation Space</p>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide direction='right' in={impact1} timeout={{ enter: 3000 }}>
                <div className='col-lg-4 col-6 col-sm-6'>
                  <div className='single-funfacts'>
                    <div className='funfacts-style-two'>
                      <h3>
                        <Odometer
                          format='(,ddd).dd'
                          duration={3000}
                          value={`${odo.fifth}`}
                        />
                        +
                      </h3>
                      <p>Total jobs created by Startups</p>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide direction='right' in={impact1} timeout={{ enter: 3000 }}>
                <div className='col-lg-4 col-6 col-sm-6'>
                  <div className='single-funfacts'>
                    <div className='funfacts-style-two'>
                      <h3>
                        <Odometer
                          format='(,ddd).dd'
                          duration={3000}
                          value={`${odo.sixth}`}
                        />
                        +
                      </h3>
                      <p>Mentors Associated</p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </section>
      {/* end impact area */}
      {/* start adds value area */}
      <section>
        <div className='feature-area '>
          <div className='container'>
            <h2 className='section-title'>
              How <span className='span-color'>i</span>TIC Adds Value
            </h2>
            <div className='row pb-3'>
              {facilities.map((item, index) => {
                return (
                  <div className='col-lg-3 col-sm-6' key={index}>
                    <div className='features-box'>
                      <div className='icon'>
                        <img src={item.icon} alt={item.text}></img>
                      </div>
                      <h6>{item.text}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* end adds value area */}
      {/* start focus area  */}
      <section>
        <div className='feature-area'>
          <div className='container mb-3'>
            <h2 className='section-title focus'>Focus Areas</h2>
            <p className='pb-2'>
              Our primary focus area is in the Deeptech domain, but not limited
              to any one specific sector.
            </p>
            <div className='row pb-3'>
              {focus_area.map((item, index) => {
                return (
                  <div className='col-lg-3 col-sm-6' key={index}>
                    <div className='features-box'>
                      <div className='icon'>
                        <img src={item.icon} alt={item.text}></img>
                      </div>
                      <h6>{item.text}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* end focus area  */}
      {/* start feedback testimonials area */}
      <section>
        <div className='feedback-area'></div>
      </section>
      {/* end feedback testimonials area */}
      {/* start footer area  */}
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
                    iTIC Incubator at IIT Hyderabad focuses on supporting
                    deeptech startups from idea to growth stage under its
                    structured pre-incubation, incubation and accelerator
                    programs.
                  </p>
                  <div className='logo mt-3' style={{ width: '250px' }}>
                    <img src={footer_logo} alt='itic brand logo' />
                  </div>
                </div>
              </div>
              <div className='col-lg-8 col-sm-12 navlinks'>
                <div className='row'>
                  <div class='single-footer-widget col-lg-3 col-sm-6 col-6 col-md-6'>
                    <h3>Main Links</h3>

                    <ul class='services-list'>
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
                  <div class='single-footer-widget col-lg-3 col-sm-6 col-6 col-md-6'>
                    <h3>People</h3>

                    <ul class='services-list'>
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
                  <div class='single-footer-widget col-lg-3 col-sm-6 col-6 col-md-6'>
                    <h3>Programs</h3>

                    <ul class='support-list'>
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
                  <div class='single-footer-widget col-lg-3 col-sm-6 col-6 col-md-6'>
                    <h3>Media</h3>

                    <ul class='support-list'>
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
                      &nbsp;&nbsp;{' '}
                      <FontAwesomeIcon icon={faMobileScreenButton} /> Mobile:
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
      {/* end footer area  */}
    </div>
  );
};

export default Home;
