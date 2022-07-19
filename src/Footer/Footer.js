import React from 'react'
import Copyrights from './Copyrights'


const Footer = () => {
  return (
    <div>
         <footer className="main-footer" style={{backgroundImage:"url(assets/images/background/2.png)"}}>
    	<div className="auto-container">
        	{/* <!--Widgets Section--> */}
            <div className="widgets-section">
            	<div className="row clearfix">
                	
                    {/* <!--Column--> */}
                    <div className="big-column col-lg-6 col-md-12 col-sm-12">
						<div className="row clearfix">
						
                        	{/* <!--Footer Column--> */}
                            <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                <div className="footer-widget logo-widget">
									<div className="logo">
										<a href="index.html"><img src="assets/images/footer-logo.png" alt="" /></a>
									</div>
									<div className="text">There are many variations of passages of lorem ipsum available but majority have suffered alteration in some form, by injected humour.</div>
								</div>
							</div>
							
							{/* <!--Footer Column--> */}
                            <div className="footer-column col-lg-5 col-md-6 col-sm-12">
								<div className="footer-widget info-widget">
									<ul>
										<li><span>Phone</span>+1 425 230 0999</li>
										<li><span>Address</span>Pune, India</li>
										<li><span>Email</span><p style={{fontSize: "15px"}}>sales@globalinsightspartner.com</p></li>
									</ul>
								</div>
							</div>
						
						</div>
					</div>
					
					{/* <!--Column--> */}
                    <div className="big-column col-lg-6 col-md-12 col-sm-12">
						<div className="row clearfix">
						
                        	{/* <!--Footer Column--> */}
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
								<div className="footer-widget links-widget">
									<h2>OUR COMPANY</h2>
									<ul>
										<li><a href="press-releases.html">Press Releases</a></li>
										<li><a href="about.html">About Us</a></li>
										<li><a href="blogs.html">Blogs & News</a></li>
										<li><a href="contact.html">Contact Us</a></li>
									</ul>
								</div>
							</div>
							
							{/* <!--Footer Column--> */}
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
								<div className="footer-widget links-widget">
									<h2>IMPORTANT</h2>
									<ul>
										<li><a href="purchase-and-licencing-agreement.html">Purchase & Licensing Agreement</a></li>
										<li><a href="terms-and-condiions.html">Terms and Condition</a></li>
										<li><a href="privacy-and-policy.html">Privacy Policy</a></li>
										<li><a href="#">Sitemap</a></li>
									</ul>
								</div>
							</div>
						
						</div>
					</div>
					
				</div>
			</div>
			
			{/* <!-- Box Icons --> */}
			<div className="box-icons">
				<div className="box-one"></div>
				<div className="box-two"></div>
				<div className="box-three"></div>
			</div>
			
		</div>
        <Copyrights />
		
		{/* <!-- Footer Bottom --> */}
		
		
	</footer>    

    </div>
  )
}

export default Footer
