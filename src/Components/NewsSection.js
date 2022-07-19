import React from 'react'

const NewsSection = () => {
  return (
    <>
        {/* <!-- News Section --> */}
	<section class="news-section1">
		<div class="auto-container">
			
			{/* <!-- Section Title --> */}
			<div class="sec-title centered">
				<div class="title">Blog Posts</div>
				<h2>The latest news & articles</h2>
			</div>
			
			<div class="row clearfix">
				
				{/* <!-- News Block --> */}
				<div class="news-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow bounceIn" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="blog-single.html"><img src="assets/images/resource/news-1.jpg" alt="" /></a>
						</div>
						<div class="lower-content">
							<ul class="post-meta">
								<li>25 Dec, 2018</li>
								<li>by GIP</li>
							</ul>
							<h6><a href="blog-single.html">Many important brands have given us their trust.</a></h6>
						</div>
					</div>
				</div>
				
				{/* <!-- News Block --> */}
				<div class="news-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow bounceIn" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="blog-single.html"><img src="assets/images/resource/news-2.jpg" alt="" /></a>
						</div>
						<div class="lower-content">
							<ul class="post-meta">
								<li>25 Dec, 2018</li>
								<li>by GIP</li>
							</ul>
							<h6><a href="blog-single.html">Future where technology creates good jobs.</a></h6>
						</div>
					</div>
				</div>
				
				{/* <!-- News Block --> */}
				<div class="news-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow bounceIn" data-wow-delay="600ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="blog-single.html"><img src="assets/images/resource/news-3.jpg" alt="" /></a>
						</div>
						<div class="lower-content">
							<ul class="post-meta">
								<li>16 Nov, 2018</li>
								<li>by GIP</li>
							</ul>
							<h6><a href="blog-single.html">We can give you both graphic & technical quality.</a></h6>
						</div>
					</div>
				</div>
				
			</div><br/>
			<center><a class="theme-btn btn-style-two" href="#">View More <span class="arrow fa fa-angle-right"></span></a></center>
			
		</div>
	</section>
	{/* // <!-- End News Section --> */}
    </>
  )
}

export default NewsSection
