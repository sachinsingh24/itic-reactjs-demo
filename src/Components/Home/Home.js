/** @format */

import React, { useState, useEffect } from 'react';
import './Home.css';
import Particle from './Particle.jsx';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import { facilities, focus_area } from './data.js';
import Fade from 'react-reveal/Fade';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
const Home = () => {
  const [odo, setOdo] = useState({});
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 850) {
      setOdo({
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        fifth: 0,
        sixth: 0,
      });
    }

    if (position > 950) {
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

  const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    rewind: true,
    autoplay: true,
    margin: 10,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1024: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };
  const events = {
    onDragged: function (event) {},
    onChanged: function (event) {},
  };

  return (
    <>
      {/* start banner area */}
      <section>
        <div className='saas-banner'>
          <Particle />
          <div className='container con-width'>
            <div className='row row-align'>
              <div className='col-lg-6 col-sm-12 col-md-6'>
                <div className='slide-image'>
                  <img
                    alt='img'
                    src={require('../../Assets/slider/hero-img.png')}
                  />
                </div>
              </div>
              <div className='col-lg-6 col-sm-12 col-md-6'>
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
      <section>
        <div className='bg-light'>
          <Fade bottom>
            <div className='container con-width'>
              <div className='col-lg-12'>
                <h2 className='section-title'>
                  What is <span className='span-color'>i</span>TIC ?
                </h2>
                <p>
                  iTIC is an incubator under the aegis of the Indian Institute
                  of Technology Hyderabad (IITH) and supported by the Department
                  of Science and Technology (DST), Government of India. iTIC is
                  a Not-For-Profit Society that focuses on creating a supportive
                  and nourishing environment for budding entrepreneurs in the
                  field of technology. iTIC aims to help entrepreneurs leverage
                  a premier quality research and startup ecosystem to build a
                  comprehensive platform to practice innovation and
                  entrepreneurship so that these entrepreneurial ideas can be
                  turned into sustainable, scalable profit-making business
                  ventures.
                </p>
              </div>
              <div className='Overview-img row'>
                <div className='col-lg-6 col-md-12 aln-lft'>
                  <Fade right>
                    <img
                      src={require('../../Assets/slider/Homepageimg1.jpg')}
                      alt='homepage'
                    />
                  </Fade>
                </div>
                <div className='col-lg-6 col-md-12 aln-rt'>
                  <Fade left>
                    <img
                      src={require('../../Assets/slider/Homepageimg2.jpg')}
                      alt='homepage'
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </Fade>
        </div>
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
              <Fade left>
                <div className='col-lg-4 col-6 col-sm-6'>
                  <div className='single-funfacts'>
                    <div className='funfacts-style-two'>
                      <h3>
                        <Odometer
                          format='d'
                          duration={1000}
                          value={`${odo.first}`}
                        />
                        +
                      </h3>
                      <p>Total Startups supported</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade left>
                <div className='col-lg-4 col-6 col-sm-6'>
                  <div className='single-funfacts'>
                    <div className='funfacts-style-two'>
                      <h3>
                        <Odometer
                          format='(,ddd).dd'
                          duration={1000}
                          value={`${odo.second}`}
                        />{' '}
                        Cr+
                      </h3>
                      <p>Total funds sanctioned to Startups</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade left>
                <div className='col-lg-4 col-6 col-sm-6'>
                  <div className='single-funfacts'>
                    <div className='funfacts-style-two'>
                      <h3>
                        <Odometer
                          format='(,ddd).dd'
                          duration={1000}
                          value={`${odo.third}`}
                        />{' '}
                        Cr+
                      </h3>
                      <p>Total revenues generated by Startups</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade left>
                <div className='col-lg-4 col-6 col-sm-6'>
                  <div className='single-funfacts'>
                    <div className='funfacts-style-two'>
                      <h3>
                        <Odometer
                          format='(,ddd).dd'
                          duration={1000}
                          value={`${odo.fourth}`}
                        />{' '}
                        Lac <span className='fs-4'>Sq.ft</span>
                      </h3>
                      <p>Dedicated Incubation Space</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade left>
                <div className='col-lg-4 col-6 col-sm-6'>
                  <div className='single-funfacts'>
                    <div className='funfacts-style-two'>
                      <h3>
                        <Odometer
                          format='(,ddd).dd'
                          duration={1000}
                          value={`${odo.fifth}`}
                        />
                        +
                      </h3>
                      <p>Total jobs created by Startups</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade left>
                <div className='col-lg-4 col-6 col-sm-6'>
                  <div className='single-funfacts'>
                    <div className='funfacts-style-two'>
                      <h3>
                        <Odometer
                          format='(,ddd).dd'
                          duration={1000}
                          value={`${odo.sixth}`}
                        />
                        +
                      </h3>
                      <p>Mentors Associated</p>
                    </div>
                  </div>
                </div>
              </Fade>
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
        <div className='feedback-area'>
          <div className='container'>
            <h2 className='section-title' style={{ marginTop: '30px' }}>
              {' '}
              Startup Testimonial
            </h2>
            <div className='feedback-slides'>
              <OwlCarousel
                // className='owl-theme'
                options={options}
                events={events}>
                <div className='single-feedback-item'>
                  <div className='feedback-desc bg-white'>
                    <div className='p1'>
                      <p>
                        iTIC Incubation team has provided our startup Sortizy
                        with tremendous support since the beginning and
                        especially when we needed it the most. They have been
                        instrumental in helping us define our strategy, customer
                        discovery methodology and go-to-market approach.
                      </p>
                    </div>
                    <hr />
                    <div className='row client-info'>
                      <div className='col-md-auto'></div>
                      <div className='col'>
                        <h3>Surbhi Guha</h3>
                        <span>Sortizy</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='feedback-desc bg-white'>
                    <div className='p1'>
                      <p>
                        iTIC was a gamechanger for us. We can&#39;t imagine any
                        startup that wouldn&#39;t benefit tremendously from
                        iTIC&#39;s support. We entered the program with an idea
                        and, 3 months later, we&#39;re an incorporated company
                        with 1st working Prototype. To this day, joining iTIC
                        Incubator as a startup was one of the best decisions
                        we&#39;ve made at Manali Swing.
                      </p>
                    </div>
                    <hr />
                    <div className='row client-info'>
                      <div className='col-md-auto'></div>

                      <div className='col'>
                        <h3>Utsav Soni</h3>
                        <span>Manali Swing</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='feedback-desc bg-white'>
                    <div className='p1'>
                      <p>
                        iTIC has been a strong pillar of support for me, to
                        build upon the idea and incubate our startup. iTIC has
                        always been available and ready with answers to our
                        questions and solutions to our problems. There has not
                        been a single day that I came out of the iTIC office
                        without getting to know what I needed to know. I&#39;ll
                        be forever grateful for their support through these
                        years which played a significant role in making an
                        entrepreneur out of a research student.
                      </p>
                    </div>
                    <hr />
                    <div className='row client-info'>
                      <div className='col-md-auto'></div>

                      <div className='col'>
                        <h3>Dr Tejaswini Appidi</h3>
                        <span>In5n8 Health Tech LLP</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='feedback-desc bg-white'>
                    <div className='p1'>
                      <p>
                        This 6 months of association with the AISEA program has
                        been a consistent source of encouragement, motivation
                        for early stage innovative startup like us. AISEA has a
                        great pool of eminent mentors &amp; Coaches that guided
                        us the right route in our organizational development.
                      </p>
                    </div>
                    <hr />
                    <div className='row client-info'>
                      <div className='col-md-auto'></div>

                      <div className='col'>
                        <h3>Subhash Narayanan</h3>
                        <span>Sascan Meditech</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='feedback-desc bg-white'>
                    <div className='p1'>
                      <p>
                        The Aisea Cohort experience has been really brilliant
                        for us. The entire team has been very supportive and
                        helped us to get clarity to address some of our business
                        and customer pain points. The best part is the Mentor
                        pool, we had great insightful guidance by mentors
                        selected by us. Special thanks to the operations team
                        for the constant interaction and support throughout the
                        program.
                      </p>
                    </div>
                    <hr />
                    <div className='row client-info'>
                      <div className='col-md-auto'></div>

                      <div className='col'>
                        <h3>Dr. Raju M R</h3>
                        <span>MayaMD</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='feedback-desc bg-white'>
                    <div className='p1'>
                      <p>
                        We are ecstatic to be part of the AISEA program. As
                        program participant, Zedblox got access to resources
                        &amp; solutions to myriad problems that startups face.
                        AISEA helped us in solving all strategic business as
                        well as technical challenges.
                      </p>
                    </div>
                    <hr />
                    <div className='row client-info'>
                      <div className='col-md-auto'></div>
                      <div className='col'>
                        <h3>Rao Korupolu</h3>
                        <span>ZedBlox</span>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
              {/* <div>
                <div className='single-feedback-item'>
                  <div className='feedback-desc bg-white'>
                    <div className='p1'>
                      <p>
                        iTIC Incubation team has provided our startup Sortizy
                        with tremendous support since the beginning and
                        especially when we needed it the most. They have been
                        instrumental in helping us define our strategy, customer
                        discovery methodology and go-to-market approach.
                      </p>
                    </div>
                    <hr />
                    <div className='row client-info'>
                      <div className='col-md-auto'></div>
                      <div className='col'>
                        <h3>Surbhi Guha</h3>
                        <span>Sortizy</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='feedback-desc bg-white'>
                    <div className='p1'>
                      <p>
                        iTIC was a gamechanger for us. We can&#39;t imagine any
                        startup that wouldn&#39;t benefit tremendously from
                        iTIC&#39;s support. We entered the program with an idea
                        and, 3 months later, we&#39;re an incorporated company
                        with 1st working Prototype. To this day, joining iTIC
                        Incubator as a startup was one of the best decisions
                        we&#39;ve made at Manali Swing.
                      </p>
                    </div>
                    <hr />
                    <div className='row client-info'>
                      <div className='col-md-auto'></div>

                      <div className='col'>
                        <h3>Utsav Soni</h3>
                        <span>Manali Swing</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='feedback-desc bg-white'>
                    <div className='p1'>
                      <p>
                        iTIC has been a strong pillar of support for me, to
                        build upon the idea and incubate our startup. iTIC has
                        always been available and ready with answers to our
                        questions and solutions to our problems. There has not
                        been a single day that I came out of the iTIC office
                        without getting to know what I needed to know. I&#39;ll
                        be forever grateful for their support through these
                        years which played a significant role in making an
                        entrepreneur out of a research student.
                      </p>
                    </div>
                    <hr />
                    <div className='row client-info'>
                      <div className='col-md-auto'></div>

                      <div className='col'>
                        <h3>Dr Tejaswini Appidi</h3>
                        <span>In5n8 Health Tech LLP</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='feedback-desc bg-white'>
                    <div className='p1'>
                      <p>
                        This 6 months of association with the AISEA program has
                        been a consistent source of encouragement, motivation
                        for early stage innovative startup like us. AISEA has a
                        great pool of eminent mentors &amp; Coaches that guided
                        us the right route in our organizational development.
                      </p>
                    </div>
                    <hr />
                    <div className='row client-info'>
                      <div className='col-md-auto'></div>

                      <div className='col'>
                        <h3>Subhash Narayanan</h3>
                        <span>Sascan Meditech</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='feedback-desc bg-white'>
                    <div className='p1'>
                      <p>
                        The Aisea Cohort experience has been really brilliant
                        for us. The entire team has been very supportive and
                        helped us to get clarity to address some of our business
                        and customer pain points. The best part is the Mentor
                        pool, we had great insightful guidance by mentors
                        selected by us. Special thanks to the operations team
                        for the constant interaction and support throughout the
                        program.
                      </p>
                    </div>
                    <hr />
                    <div className='row client-info'>
                      <div className='col-md-auto'></div>

                      <div className='col'>
                        <h3>Dr. Raju M R</h3>
                        <span>MayaMD</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='single-feedback-item'>
                  <div className='feedback-desc bg-white'>
                    <div className='p1'>
                      <p>
                        We are ecstatic to be part of the AISEA program. As
                        program participant, Zedblox got access to resources
                        &amp; solutions to myriad problems that startups face.
                        AISEA helped us in solving all strategic business as
                        well as technical challenges.
                      </p>
                    </div>
                    <hr />
                    <div className='row client-info'>
                      <div className='col-md-auto'></div>
                      <div className='col'>
                        <h3>Rao Korupolu</h3>
                        <span>ZedBlox</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* end feedback testimonials area */}
    </>
  );
};

export default Home;
