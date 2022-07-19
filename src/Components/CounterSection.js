import React from 'react'

const CounterSection = () => {
  return (
    <div>
        {/* <!-- Counter Section --> */}
	<section className="counter-section" style={{backgroundImage:"url(assets/images/background/1.png)"}}>
		<div className="auto-container">
			
			<div className="fact-counter">
				
				{/* <!-- Box Icons --> */}
				<div className="box-icons">
					<div className="box-one"></div>
					<div className="box-two"></div>
					<div className="box-three"></div>
				</div>
				
                <div className="row clearfix">
					
                    {/* <!--Column--> */}
                    <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                        <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        	<div className="count-outer count-box">
                            	<span className="count-text" data-speed="4000" data-stop="10000">10000</span>
                                <div className="counter-title">Research Reports</div>
                            </div>
                        </div>
                    </div>
					
                    {/* <!--Column--> */}
                    <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                        <div className="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                        	<div className="count-outer count-box">
                            	<span className="count-text" data-speed="2000" data-stop="6">6</span>
                                <div className="counter-title">Industries</div>
                            </div>
                        </div>
                    </div>
					
                    {/* <!--Column--> */}
                    <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                        <div className="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                        	<div className="count-outer count-box">
                            	<span className="count-text" data-speed="2500" data-stop="100">100</span>
                                <div className="counter-title">Happy Clients</div>
                            </div>
                        </div>
                    </div>
					
                    {/* <!--Column--> */}
                    <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                        <div className="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                        	<div className="count-outer count-box">
                            	<span className="count-text" data-speed="5000" data-stop="2500">2500</span>
                                <div className="counter-title">Social Sharing</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
			</div>
			
			{/* <!-- Lower Box --> */}
			<div className="lower-box">
				<div className="text">don’t hesitate, contact us for new business opportunities and market forecast. <a href="#">Let’s Get Started</a></div>
				{/* <!-- Box Icons --> */}
				<div className="box-icons">
					<div className="box-one"></div>
					<div className="box-two"></div>
					<div className="box-three"></div>
				</div>
			</div>
			
		</div>
	</section>
	{/* <!-- End Counter Section --> */}
    </div>
  )
}

export default CounterSection
