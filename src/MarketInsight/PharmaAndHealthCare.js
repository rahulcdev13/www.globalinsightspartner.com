import React from 'react'

const PharmaAndHealthCare = () => {
  
      return (
    <div>
      {/* <!--Page Title--> */}
    <section class="page-title" style={{backgroundImage:"url(assets/images/background/1.png)"}}>
		<div id="particles-js" class="particles-pattern"></div>
    	<div class="auto-container">
			<div class="clearfix">
				<div class="pull-left">
					<h2>Pharma And Healthcare</h2>
				</div>
                <div class="pull-right">
					<h6 style={{color:"white",fontWeight:"bold"}} ><a href="/" style={{color:"white",fontWeight:"bold"}}>Home</a> - <span>Market Insights </span> - <span>Pharma And Healthcare</span></h6>
				</div>
				{/* <div class="pull-right">
					<ul class="page-br/eadcrumb" style={{color:"white",fontWeight:"bold"}}>
						<li><a href="/" style={{color:"white",fontWeight:"bold"}}>Home</a></li>
						<li><a href="#" style={{color:"white",fontWeight:"bold"}}>Market Insights</a></li>
						<li class="current"style={{color:"white",fontWeight:"bold"}} >Pharma And Healthcare</li>
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
								<li class="active"><a href="pharma-and-healthcare.php">Pharma & Healthcare</a></li>
								<li><a href="machines-and-equipment.php">Machines & Equipment</a></li>
								<li><a href="automotive-insights.html">Automotive Insights</a></li>
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
								<h3>Pharma And Healthcare</h3>
								<p>Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
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
 export default PharmaAndHealthCare