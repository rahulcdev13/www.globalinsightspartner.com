import React from 'react'
import Footer from '../Footer/Footer'

const AboutUs = () => {
  return (
    <div> 
 
     {/* <!--Page Title--> */}
     <section className="page-title" style={{backgroundImage:"url(assets/images/background/1.png)"}}>
         <div id="particles-js" className="particles-pattern"></div>
         <div className="auto-container">
             <div className="clearfix">
                 <div className="pull-left">
                     <h2>About Us</h2>
                 </div>
                 <div className="pull-right">
                     <ul className="page-breadcrumb">
                         <li><a href="/">Home</a></li>
                         <li className="current">About Us</li>
                     </ul>
                 </div>
             </div>
         </div>
     </section>
     {/* <!--End Page Title--> */}
     
     {/* <!-- About Section --> */}
     <section className="about-section">
         <div className="auto-container">
             
             {/* <!-- About Content --> */}
             <div className="lower-section">
                 <div className="about-content">
                     {/* <!-- Sec Title --> */}
                     <div className="sec-title centered">
                         <div className="title">Our Company Overview</div>
                         <h2>Our mission is to become the best <br/> finance company in the world.</h2>
                     </div>
                     <div className="text">Lorem ipsum is simply free text dolor sit amett consectetur adipiscing elit. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. There are many variations of passages of lorem ipsum available.</div>
                 </div>
             </div>
             
         </div>
     </section>
     {/* <!-- End About Section --> */}
     
     {/* <!-- Business Section --> */}
     <section className="business-section">
         <div className="auto-container">
             {/* <!-- Sec Title --> */}
             <div className="sec-title centered">
                 <div className="title">Our Company Missions</div>
                 <h2>Mission, vision & values</h2>
             </div>
             <div className="row clearfix">
                 
                 {/* <!-- Business Block --> */}
                 <div className="business-block col-lg-4 col-md-6 col-sm-12">
                     <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                         <div className="icon-box">
                             <span className="icon flaticon-operator"></span>
                         </div>
                         <h4><a href="#">Meet the professional & talented research analyst.</a></h4>
                     </div>
                 </div>
                 
                 {/* <!-- Business Block --> */}
                 <div className="business-block col-lg-4 col-md-6 col-sm-12">
                     <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                         <div className="icon-box">
                             <span className="icon flaticon-analytics"></span>
                         </div>
                         <h4><a href="#">Get the best consultancy from your experts advisor.</a></h4>
                     </div>
                 </div>
                 
                 {/* <!-- Business Block --> */}
                 <div className="business-block col-lg-4 col-md-6 col-sm-12">
                     <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                         <div className="icon-box">
                             <span className="icon flaticon-balance"></span>
                         </div>
                         <h4><a href="#">We established cooperation with various global partners.</a></h4>
                     </div>
                 </div>
                 
             </div>
         </div>
     </section>
     {/* <!-- End Business Section --> */}
     
     {/* <Footer /> */}
     
 </div> 
  )
}

export default AboutUs
