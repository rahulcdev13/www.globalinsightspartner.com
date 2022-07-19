import React from "react";

const PartnerSection = () => {
  return (
    <>
      {/* <!-- Data Partner Section One --> */}
      <section className="fluid-section-one">
        <div className="outer-container clearfix">

          {/* <!--Content Column--> */}
          <div className="content-column">
            <div id="particles-js" className="particles-pattern"></div>
            <div className="inner-column">
              {/* <!-- Section Title --> */}
              <div className="sec-title light">
                <h2>Become a Data Partner.</h2>
              </div>
              <div className="text">
                Want to take business decisions based on insightful information?
                <br />
                You are in the right place. Be one step ahead of your competitor
                and join us, Become a data partner.
              </div>
              {/* <!-- Business Box --> */}
              <div className="business-box">
                <div
                  className="box-inner paroller"
                  data-paroller-factor="-0.05"
                  data-paroller-factor-lg="-0.08"
                  data-paroller-factor-md="0.1"
                  data-paroller-factor-sm="0.1"
                  data-paroller-type="foreground"
                  data-paroller-direction="horizontal"
                >
                  <div className="image">
                    <img src="assets/images/resource/business.jpg" alt="" />
                  </div>
                  <h6>
                    Trying to estimate existence of your business in the market?
                  </h6>
                </div>
              </div>
              <br />
              <br />
              <a className="btn-style-two" href="#">
                View More <span className="arrow fa fa-angle-right"> </span>
              </a>
            </div>
            </div>
            {/* // <!--Image Column--> */}
            <div
              className="image-column"
              style={{
                backgroundImage: "url(assets/images/resource/image-1.jpg)",
              }}
            >
              <figure className="image-box">
                <img src="assets/images/resource/image-1.jpg" alt="" />
              </figure>
              <div className="image-content">
                <div className="text">
                  GIP is trusted by more <br /> than{" "}
                  <span className="theme_color">100+</span> clients.
                </div>
              </div>
            </div>

          

        </div>
      </section>
      {/* // <!-- End Data Partner One -->    */}
    </>
  );
};

export default PartnerSection;
