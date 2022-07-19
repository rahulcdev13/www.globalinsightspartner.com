import React from 'react'

const SingleBlog = () => {
  return (
    <div>
        	{/* <!--Page Title--> */}
    <section class="page-title" style={{backgroundImage:"url(/assetsimages/background/1.png)"}}>
		<div id="particles-js" class="particles-pattern"></div>
    	<div class="auto-container">
			<div class="clearfix">
				<div class="pull-left">
					<h2>Future where technology creates good jobs.</h2>
				</div>
				<div class="pull-right">
					<ul class="page-breadcrumb">
						<li><a href="/">Home</a></li>
						<li class="current">Blog</li>
					</ul>
				</div>
			</div>
        </div>
    </section>
    {/* <!--End Page Title--> */}
	
	{/* <!--Sidebar Page Container--> */}
    <div class="sidebar-page-container">
    	<div class="auto-container">
        	<div class="row clearfix">
            	
                {/* <!--Content Side --> */}
                <div class="content-side col-lg-12 col-md-12 col-sm-12">
					{/* <!-- Blog Single --> */}
                    <div class="blog-single">
						<div class="inner-box">
							<div class="image">
								<img src="/assetsimages/resource/news-5.jpg" alt="" />
								<div class="image-layer" style={{backgroundImage:"url(/assetsimages/resource/news-5.jpg)"}}></div>
							</div>
							<div class="lower-content">
								<ul class="post-meta">
									<li>25 Dec, 2018</li>
									<li>By GIP</li>
								</ul>
								<h3>Future where technology creates good jobs.</h3>
								<div class="text">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</p>
									<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </p>
								</div>
								{/* <!--post-share-options--> */}
                                <div class="post-share-options clearfix">
                                    <div class="pull-left tags"><span>Tags:</span><a href="#">Financial</a> <a href="#">Consultancy</a> <a href="#">Advisor</a></div>
                                    <ul class="pull-right social-icons">
										<li class="facebook"><a href="#"><span class="fa fa-facebook"></span></a></li>
										<li class="twitter"><a href="#"><span class="fa fa-twitter"></span></a></li>
										<li class="youtube"><a href="#"><span class="fa fa-youtube-play"></span></a></li>
										<li class="google"><a href="#"><span class="fa fa-google-plus"></span></a></li>
									</ul>
                                </div>
							</div>
						</div>
						 
					</div>
				</div>
				
			</div>
		</div>
	</div>
    </div>
  )
}

export default SingleBlog
