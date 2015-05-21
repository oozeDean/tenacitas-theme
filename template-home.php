<?php /* Template Name: Home page template */ get_header(); ?>
<?php 

// vars
$image = get_field('carousel_one');
$image2 = get_field('carousel_two');
$image3 = get_field('carousel_three');
	
?>

	<div class="js-carousel-item js-carousel-one active" data-src="<?php echo $image['url']; ?>"><img src="<?php echo $image['url']; ?>"></div>
	<div class="js-carousel-item js-carousel-two" data-src="<?php echo $image2['url']; ?>"><img src="<?php echo $image2['url']; ?>"></div>
	<div class="js-carousel-item js-carousel-three" data-src="<?php echo $image3['url']; ?>"><img src="<?php echo $image3['url']; ?>"></div>

	<main role="main" >
		<!-- section -->
		<section class="section section--home section--first js-carousel" style="background-image: url('<?php echo $image['url']; ?>')">

		<div class="hotspot hotspot--left"><a href="#" class="js-previous carousel-button carousel-button--left"><img src="<?php echo get_template_directory_uri(); ?>/img/slideshow-arrow-left.png" /></a></div>
		<div class="hotspot hotspot--right"><a href="#" class="js-next carousel-button carousel-button--right"><img src="<?php echo get_template_directory_uri(); ?>/img/slideshow-arrow-right.png" /></a></div>

			<div class="bg-lines bg-lines--top"></div>

			<div class="content content--padding-top content--middle content--serif">

				<?php if (have_posts()): while (have_posts()) : the_post(); ?>

					<!-- article -->
					<article class="content__inner" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

						<?php the_content(); ?>

						<?php comments_template( '', true ); // Remove if you don't want comments ?>

						<br class="clear">

						<?php edit_post_link(); ?>

					</article>
					<!-- /article -->

				<?php endwhile; ?>

				<?php else: ?>

					<!-- article -->
					<article>

						<h2><?php _e( 'Sorry, nothing to display.', 'JFD' ); ?></h2>

					</article>
					<!-- /article -->

				<?php endif; ?>

			</div>

			<a href="#read-more" class="anchor mobile-hide js-ease"><img src="<?php echo get_template_directory_uri(); ?>/img/down-arrow.png" /></a>

			<div class="bg-lines bg-lines--bottom"></div>

		</section>
		<span id="read-more"></span>
		<!-- /section -->
		
		<?php get_sidebar(); ?>

		<section class="section section--grey news">

			<div class="content content--padding-bottom">

				<h2 class="heading heading--grey heading--line-grey">Latest News, Insight & Reports</h2>

				<div class="news__container" id="js-news">

					<div class="grid-sizer"></div>
					<div class="gutter-sizer"></div>
					<?php
			    $args = array(
			        'post_type' => 'post'
			    );

			    $post_query = new WP_Query($args);

					if($post_query->have_posts() ) {
			  		while($post_query->have_posts() ) {
			    		$post_query->the_post(); ?>
			    		<div class="news__item">
			    			<a href="<?php echo get_permalink(); ?>">
				    			<div class="news__img">
				    				<?php the_post_thumbnail('medium'); ?>
				    				<div class="news__img--hidden">Get the full story &raquo;</div>
				    			</div>
				    			<div class="news__text">
					    			<!-- <h2><?php the_title(); ?></h2> -->
					    			<p class="news__text--date"><?php the_time( get_option( 'date_format' ) ); ?></p>
					    			<div class="news__text--content">
					    				<?php the_title(); ?> 
					    			</div>
					    			<p class="news__text--category <?php $category = get_the_category(); 
	echo $category[0]->category_nicename; ?>"><?php $category = get_the_category(); 
	echo $category[0]->cat_name; ?></p>
				    			</div>
				    		</a>
			    		</div>
			    	<?php } } ?>

		   	</div>

		   	<div class="news__container--bottom">
	   			<a href="#" class="news__button js-viewMore">View more</a>
		   	</div>

    	</div>

		</section>

	</main>


<?php get_footer(); ?>
