import React from 'react'

const ContactUs = () => {
  return (
    <>  
     {/* <!--Page Title--> */}
     <section className="page-title" style={{backgroundImage:"url(assets/images/background/1.png)"}}>
     <div id="particles-js" className="particles-pattern"></div>
         <div className="auto-container">
             <div className="clearfix">
                 <div className="pull-left">
                     <h2>Contact</h2>
                 </div>
                 <div className="pull-right">
                     <ul className="page-breadcrumb">
                         <li><a href="/">Home</a></li>
                         <li className="current">Contact</li>
                     </ul>
                 </div>
             </div>
         </div>
     </section>
     {/* <!--End Page Title--> */}
     
     {/* <!-- Contact Message Section --> */}
     <section className="contact-message-section">
         <div className="auto-container">
             <div className="row clearfix">
                 
                 {/* <!-- Title Column --> */}
                 <div className="form-column col-lg-1 col-md-12 col-sm-12"></div>
                 <div className="title-column col-lg-4 col-md-12 col-sm-12">
                     <div className="inner-column">
                         {/* <!-- Sec Title --> */}
                         <div className="sec-title">
                             <div className="title">Contact With Us</div>
                             <h2>Call us or fill the form.</h2>
                         </div>
                         <div className="text">Our Team would be happy to assist you with your queries. Fill in the form below and someone from our team will get in touch with you soon!</div>
                         <ul className="social-icons">
                             <li className="facebook"><a href="#"><span className="fa fa-facebook"></span></a></li>
                             <li className="twitter"><a href="#"><span className="fa fa-twitter"></span></a></li>
                             <li className="youtube"><a href="#"><span className="fa fa-youtube-play"></span></a></li>
                             <li className="google"><a href="#"><span className="fa fa-google-plus"></span></a></li>
                         </ul>
                     </div><br/>
                     
                                 <div className="footer-widget info-widget">
                                     <ul>
                                         <li><span style={{color: "#242f6c"}}>Email: contact@globalinsightspartner.com</span></li>
                                         <li><span style={{color: "#242f6c"}}>Phone: +1 425 230 0999</span></li>
                                         <li><span style={{color: "#242f6c"}}>Address: Pune, India.</span></li>
                                     </ul>
                                 </div>
                 </div>
                 
                 {/* <!-- Form Column --> */}
                 <div className="form-column col-lg-6 col-md-12 col-sm-12">
                     <div className="inner-column">
                         
                         {/* <!-- Contact Form --> */}
                         <div className="default-form contact-form">
                             
                             {/* <!--Contact Form--> */}
                             <form method="post" action="#" id="contact-form">
                                 <div className="row clearfix">
                                     
                                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                         <input type="text" name="name" placeholder="Full Name" required />
                                     </div>
                                     
                                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                         <input type="email" name="email" placeholder="Business Email Address" required />
                                     </div>
                                     
                                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                         <input type="text" name="phone" placeholder="Your Phone" required />
                                     </div>
                                     
                                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                         <input type="text" name="subject" placeholder="Subject" required />
                                     </div>
                                     
                                     <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                         <textarea className="message" name="message" placeholder="Write Message"></textarea>
                                     </div>
                                     
                                     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                         <button className="theme-btn submit-btn" type="submit" name="submit-form">Send Us Message <span className="arrow fa fa-angle-right"></span></button>
                                     </div>
                                     
                                 </div>
                             </form>
                                 
                         </div>
                         {/* <!--End Contact Form --> */}
                         
                     </div>
                 </div>
                 <div className="form-column col-lg-1 col-md-12 col-sm-12"></div>
                 
             </div>
         </div>
     </section>
     {/* <!-- End Contact Message Section --> */} 
    </>
  )
}

export default ContactUs
