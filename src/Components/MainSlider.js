import React from 'react'

const MainSlider = () => {
  return (
    <>
    {/* <h1>MainSlider</h1> */}
    <section className="main-slider main-slider-section">
		<div className="outer-container"> 
			{/* <div className="main-slider-carousel owl-carousel owl-theme">   */}

				{/* <div className="slide"  style={{backgroundImage:"url(assets/images/resource/image-1.jpg)"}}>
                	<div className="slide-container">
                    	<div className="slide-box">
                            <div className="auto-container">
                                <div className="content">
                                    <div className="title">Welcome to GIP</div>
                                    <h1>Trusted & Professional Market Consultant</h1>
                                    <div className="btn-box">
                                        <a href="contact.html" className="theme-btn btn-style-one">Get Started <span className="arow fa fa-angle-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				</div> */}
				
				<div className="slide"  style={{backgroundImage:"url(assets/images/resource/image-2.jpg)"}}>
                	<div className="slide-container">
                    	<div className="slide-box">
                            <div className="auto-container">
                                <div className="content text-center">
                                    <h1 className="alternate">Healthcare Sector Challenges in Covid-19 Pandemic</h1>
                                    <div className="btn-box">
                                        <a href="contact.html" className="theme-btn btn-style-one">Get Started <span className="arow fa fa-angle-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
				
				{/* <div className="slide"  style={{backgroundImage:"url(images/resource/image-1.jpg)"}}>
                	<div className="slide-container">
                    	<div className="slide-box">
                            <div className="auto-container">
                                <div className="content text-center">
                                    <h1 className="alternate">Top Quality Customized Reports</h1>
                                    <div className="text">Investment services and thinning the ranks of qualified financial advisors.</div>
                                    <div className="btn-box">
                                        <a href="contact.html" className="theme-btn btn-style-one">Get Started <span className="arow fa fa-angle-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>  */}
			{/* </div> */}
			
			{/* <!-- Contact List --> */}
			<ul className="contact-list">
				<li>Monday to Friday</li>
				<li>9:00 am to 7:00 pm</li>
			</ul>
			{/* <!-- Sidebar Nav --> */}
			<ul className="sidebar-nav">
				<li><a href="#">Facebook</a></li>
				<li><a href="#">Twitter</a></li>
				<li><a href="#">Google+</a></li>
				<li><a href="#">Linkedin</a></li>
			</ul>
			
		</div>
	</section>
    </>
  )
}

export default MainSlider
