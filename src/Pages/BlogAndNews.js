import React from 'react'

const BlogAndNews = () => {
  return (
    <div>
        	{/* <!--Page Title--> */}
    <section class="page-title" style={{backgroundImage:"url(assets/images/background/1.png)"}}>
		<div id="particles-js" class="particles-pattern"></div>
    	<div class="auto-container">
			<div class="clearfix">
				<div class="pull-left">
					<h2>Blogs and Articles</h2>
				</div>
				<div class="pull-right">
					<ul class="page-breadcrumb">
						<li><a href="/">Home</a></li>
						<li class="current">Blogs and Articles</li>
					</ul>
				</div>
			</div>
        </div>
    </section>
    {/* <!--End Page Title--> */}
	
	{/* <!-- News Section --> */}
	<section class="news-section1" style={{backgroundColor: "#ffffff"}}>
		<div class="auto-container">
			
			{/* <!-- Section Title --> */}
			<div class="sec-title centered">
				<h2>Latest Blogs and Articles</h2>
			</div>
			
			<div class="row clearfix">
				
				{/* <!-- News Block --> */}
				<div class="news-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow bounceIn" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="/SingleBlog"><img src="assets/images/resource/news-1.jpg" alt="" /></a>
						</div>
						<div class="lower-content">
							<ul class="post-meta">
								<li>25 Dec, 2018</li>
								<li>by Layerdrops</li>
							</ul>
							<h6><a href="SingleBlog">Many important brands have given us their trust.</a></h6>
						</div>
					</div>
				</div>
				
				{/* <!-- News Block --> */}
				<div class="news-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow bounceIn" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="/SingleBlog"><img src="assets/images/resource/news-2.jpg" alt="" /></a>
						</div>
						<div class="lower-content">
							<ul class="post-meta">
								<li>25 Dec, 2018</li>
								<li>by Layerdrops</li>
							</ul>
							<h6><a href="/SingleBlog">Future where technology creates good jobs.</a></h6>
						</div>
					</div>
				</div>
				
				{/* <!-- News Block --> */}
				<div class="news-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow bounceIn" data-wow-delay="600ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="/SingleBlog"><img src="assets/images/resource/news-3.jpg" alt="" /></a>
						</div>
						<div class="lower-content">
							<ul class="post-meta">
								<li>16 Nov, 2018</li>
								<li>by Layerdrops</li>
							</ul>
							<h6><a href="/SingleBlog">We can give you both graphic & technical quality.</a></h6>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
	</section>
	{/* <!-- End News Section --> */}
      
    </div>
  )
}

export default BlogAndNews
