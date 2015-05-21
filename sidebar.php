<!-- sidebar -->


<!-- homepage -->
 <?php if (is_front_page() || is_page('about')) { ?>
 		<section class="section section--blue">
 			<div class="content">
 				<h2 class="heading heading--line-white">How can we help</h2>
 				<?php dynamic_sidebar( 'widget-area-1' ); ?> 
 			</div>
 		</section>
	<?php } ?> 

<!-- /sidebar -->
