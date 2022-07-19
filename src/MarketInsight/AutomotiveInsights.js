import React from 'react'

const AutomotiveInsights = () => {
  return (
    <div>
    {/* <!--Page Title--> */}
  <section class="page-title" style={{backgroundImage:"url(assets/images/background/1.png)"}}>
      <div id="particles-js" class="particles-pattern"></div>
      <div class="auto-container">
          <div class="clearfix">
              <div class="pull-left">
                  <h2>Automotive Insights</h2>
              </div>
              <div class="pull-right">
                  <h6 style={{color:"white",fontWeight:"bold"}} ><a href="/" style={{color:"white",fontWeight:"bold"}}>Home</a> - <span>Market Insights </span> - <span>Automotive Insights</span></h6>
              </div>
              {/* <div class="pull-right">
                  <ul class="page-br/eadcrumb">
                      <li><a href="/">Home</a></li>
                      <li><a href="#">Market Insights</a></li>
                      <li class="current">Automotive Insights</li>
                  </ul>
              </div> */}
          </div>
      </div>
  </section>
  {/* <!--End Page Title--> */}
  
  {/* <!--Sidebar Page Container--> */}
  <div class="sidebar-page-container">
      <div class="auto-container">
          <div class="row clearfix">
              
              {/* <!--Sidebar Side--> */}
                 <div class="sidebar-side col-lg-4 col-md-12 col-sm-12">
                     <aside class="sidebar">
                      
                      {/* <!-- Category Widget --> */}
                      <div class="sidebar-widget category-widget">
                          <div class="sidebar-title">
                              <h3>Market Insights</h3>
                          </div>
                          <ul class="cat-list">
                              <li><a href="chemicals-and-materials.php">Chemicals & Materials</a></li>
                              <li><a href="pharma-and-healthcare.php">Pharma & Healthcare</a></li>
                              <li><a href="machines-and-equipment.php">Machines & Equipment</a></li>
                              <li class="active"><a href="automotive-insights.html">Automotive Insights</a></li>
                              <li><a href="food-and-beverages.php">Food & Beverages</a></li>
                              <li><a href="consumer-goods.php">Consumer Goods</a></li>
                              <li><a href="electronics-and-semiconductor.php">Electronics & Semiconductor</a></li>
                          </ul>
                      </div>
                      
                  </aside>
              </div>
              
              {/* <!--Content Side / Services Single--> */}
              <div class="content-side col-lg-8 col-md-12 col-sm-12">
                  {/* <!-- Services Single --> */}
                  <div class="services-single">
                      <div class="inner-box">
                          {/* <!-- Lower Content --> */}
                          <div class="lower-content">
                              <h3>Automotive Insights</h3>
                              <p>Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                              
                          {/* <!-- Automotive Insights Reports List --> */}
                          <div class="news-block-two">
                              <div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms" style={{backgroundColor: "#f2f3f6;"}}>
                                  <div class="border-one"></div>
                                  <div class="border-two"></div>
                                  <h6><a href="blog-single.html">2021-2027 Global and Regional EV Platform Industry Status and Prospects Professional Market Research Report Enhanced Version </a></h6><br/>
                                  <ul class="post-meta">
                                      <li>10 Jun</li>
                                      <li>$3500</li>
                                      <li><a target="_blank" href="#" class="viewsamplebtn">Free Sample</a></li>
                                      <li><a target="_blank" href="#" class="viewsamplebtn">Buy Now</a></li>
                                  </ul>
                              </div>
                          </div>
                          
                          <div class="news-block-two">
                              <div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms" style={{backgroundColor: "#f2f3f6;"}}>
                                  <div class="border-one"></div>
                                  <div class="border-two"></div>
                                  <h6><a href="blog-single.html">2021-2027 Global and Regional EV Platform Industry Status and Prospects Professional Market Research Report Enhanced Version </a></h6><br/>
                                  <ul class="post-meta">
                                      <li>10 Jun</li>
                                      <li>$3500</li>
                                      <li><a target="_blank" href="#" class="viewsamplebtn">Free Sample</a></li>
                                      <li><a target="_blank" href="#" class="viewsamplebtn">Buy Now</a></li>
                                  </ul>
                              </div>
                          </div>
                          
                          <div class="news-block-two">
                              <div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms" style={{backgroundColor: "#f2f3f6;"}}>
                                  <div class="border-one"></div>
                                  <div class="border-two"></div>
                                  <h6><a href="blog-single.html">2021-2027 Global and Regional EV Platform Industry Status and Prospects Professional Market Research Report Enhanced Version </a></h6><br/>
                                  <ul class="post-meta">
                                      <li>10 Jun</li>
                                      <li>$3500</li>
                                      <li><a target="_blank" href="#" class="viewsamplebtn">Free Sample</a></li>
                                      <li><a target="_blank" href="#" class="viewsamplebtn">Buy Now</a></li>
                                  </ul>
                              </div>
                          </div>
                              
                          </div>
                          
                      </div>
                  </div>
                  
                  <br/>
                  
                  {/* <!--Styled Pagination--> */}
                  <div class="pull-right">
                      <ul class="styled-pagination">
                          <li><a href="#"><span class="fa fa-angle-left"></span></a></li>
                          <li><a href="#" class="active">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">5</a></li>
                          <li><a href="#"><span class="fa fa-angle-right"></span></a></li>
                      </ul>
                  </div>	  
                  {/* <!--End Styled Pagination--> */}
              </div>
              
          </div>
      </div>
  </div>
  </div>
  )
}

export default AutomotiveInsights
