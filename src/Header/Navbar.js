import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Navbar = () => {
  return (
    <>               
    {/* <div className="preloader"></div> */}
      <header className="main-header">
        {/* <!--Header-Upper--> */}
        <div className="header-upper">
          <div className="outer-container">
            <div className="clearfix">
              <div className="pull-left logo-box">
                <div className="logo">
                  <a href="index.html">
                    <img className="logoimg" src="http://www.globalinsightspartner.com/assets/images/logo.png" alt="" title="" />
                  </a>
                </div>
              </div> 
              {/* <!-- Outer Box --> */}
              <div className="outer-box">
                <div className="contact-number">+1 425 230 0999</div>
              </div>

              <div className="nav-outer clearfix">
                {/* <!-- Main Menu --> */}
                <nav className="main-menu navbar-expand-md">
                  <div className="navbar-header">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div
                    className="navbar-collapse collapse scroll-nav clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className="current dropdown">
                        <a href="/">Home</a>
                      </li> 
                      
                      <li className="dropdown">
                        <a href="/AboutUs">About Us</a>
                      </li>

                      {/* <li className="nav-item">
                        <Link className="nav-link" to="/AboutUs">AboutUs</Link>
                      </li> */}
                      
                      <li className="dropdown">
                        <a href="#">Market Insights</a>
                        <ul>
                          <li>
                            <a href="/ChemicalsAndMaterials">
                              Chemicals & Materials
                            </a>
                          </li>
                          <li>
                            <a href="/PharmaAndHealthCare">Pharma & Healthcare</a>
                          </li>
                          <li>
                            <a href="/MachineAndEquipment">Machines & Equipment</a>
                          </li>
                          <li>
                            <a href="/AutomotiveInsights">Automotive Insights</a>
                          </li>
                          <li>
                            <a href="/FoodAndBeverages">Food & Beverages</a>
                          </li>
                          <li>
                            <a href="/ConsumerGoods">Consumer Goods</a>
                          </li>
                          <li>
                            <a href="/ElectronicsAndSemiconductor">Electronics & Semiconductor</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Media</a>
                        <ul>
                          <li>
                            <a href="/BlogAndNews">Blogs and News</a>
                          </li>
                          <li>
                            <a href="/PressRelease">Press Releases</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/ContactUs">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Header Upper--> */}

        {/* <!--Sticky Header--> */}
        <div className="sticky-header">
          <div className="auto-container clearfix">
            {/* <!--Logo--> */}
            <div className="logo pull-left">
              <a href="index.html" className="img-responsive">
                <img src="assets/images/logo-small.png" alt="" title="" />
              </a>
            </div>

            {/* <!--Right Col--> */}
            <div className="right-col pull-right">
              {/* <!-- Main Menu --> */}
              <nav className="main-menu navbar-expand-md">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent1"
                  aria-controls="navbarSupportedContent1"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>

                <div
                  className="navbar-collapse collapse scroll-nav clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li className="current dropdown">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="dropdown">
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">Market Insights</a>
                      <ul>
                        <li>
                          <a href="chemicals-and-materials.html">
                            Chemicals & Materials
                          </a>
                        </li>
                        <li>
                          <a href="#">Pharma & Healthcare</a>
                        </li>
                        <li>
                          <a href="#">Machines & Equipment</a>
                        </li>
                        <li>
                          <a href="#">Automotive Insights</a>
                        </li>
                        <li>
                          <a href="#">Food & Beverages</a>
                        </li>
                        <li>
                          <a href="#">Consumer Goods</a>
                        </li>
                        <li>
                          <a href="#">Electronics & Semiconductor</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Media</a>
                      <ul>
                        <li>
                          <a href="blogs.html">Blogs and News</a>
                        </li>
                        <li>
                          <a href="press-releases.html">Press Releases</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                  </ul>
                </div>
              </nav>{" "}
              {/* <!-- Main Menu End--> */}
            </div>
          </div>
        </div>
        {/* <!--End Sticky Header--> */}
        
      </header>
    
    </>
  );
};
export default Navbar;
