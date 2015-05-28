<?php get_header(); ?>
<?php global $post; ?>
<?php
$src = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 5600,1000 ), false, '' );
?>
	<main role="main">
	<!-- section -->

	<?php if (have_posts()): while (have_posts()) : the_post(); ?>
	<section class="section section--first news-article--white news-article--top" style="background-image: url(<?php echo $src[0]; ?> );">
		<div class="content content--lines">
		<!-- article -->
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

				<h1>News, Insight & Reports</h1>
				<!-- post title -->
				<h2>
					<!-- <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"> -->
					<?php the_title(); ?>
					<!-- </a> -->
				</h2>
				<!-- /post title -->

				<!-- post details -->
				<!-- <span class="date"><?php //the_time('F j, Y'); ?> <?php the_time('g:i a'); ?></span> -->
				<!-- <span class="author"><?php //_e( 'Published by', 'html5blank' ); ?> <?php the_author_posts_link(); ?></span> -->
				<!-- <span class="comments"><?php //if (comments_open( get_the_ID() ) ) comments_popup_link( __( 'Leave your thoughts', 'html5blank' ), __( '1 Comment', 'html5blank' ), __( '% Comments', 'html5blank' )); ?></span> -->
				<!-- /post details -->

				<p><a href="<?php the_field('link_url'); ?>" class="news-article__link" target="_blank"><?php the_field('link_title'); ?></a></p>

				<p><?php the_excerpt(); // Dynamic Content ?></p>

				<?php edit_post_link(); // Always handy to have Edit Post Links available ?>

				<?php //comments_template(); ?>

			</article>
			<!-- /article -->

		</div>
		<!-- /content -->
	</section>
	<!-- /section -->

	<section class="section section--light-grey news-article news-article--dark">
		<div class="content content--padding-top content--padding-bottom">
			<?php the_content(); // Dynamic Content ?>

			<?php edit_post_link(); // Always handy to have Edit Post Links available ?>
		</div>
	</section>

	<?php endwhile; ?>



	<?php else: ?>

		<!-- article -->
		<article>

			<h1><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h1>

		</article>
		<!-- /article -->

	<?php endif; ?>

<section class="section section--light-grey news-article news-article--dark">
		<div class="content content--padding-bottom">

				<?php
				if ( is_single() ) {
				  $cats = wp_get_post_categories($post->ID);
				  if ($cats) {
				    $first_cat = $cats[0];
				    $args=array(
				      'cat' => $first_cat,
				      'post__not_in' => array($post->ID),
				      'showposts'=>3
				    );
				    $my_query = new WP_Query($args);
				    if( $my_query->have_posts() ) {
				    	echo '<h2 class="heading heading--grey heading--line-grey">Related Articles</h2>';
				    	echo '<ul class="news-article__related" />';
				      while ($my_query->have_posts()) : $my_query->the_post(); ?>
				        <li>
				        	<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
					        	<div class="news__img">
					        		<?php the_post_thumbnail('thumb-even'); ?>
					        		<div class="news__img--hidden">Get the full story &raquo;</div>
					        	</div>
					        	<p class="news__text--date news-article__related--padding"><?php the_time( get_option( 'date_format' ) ); ?></p>
					    			<div class="news__text--content news-article__related--padding">
					    				<?php the_title(); ?> 
					    			</div>
						    		<p class="news__text--category news-article__related--padding <?php $category = get_the_category(); 
		echo $category[0]->category_nicename; ?>"><?php $category = get_the_category(); 
		echo $category[0]->cat_name; ?></p>
									</a>
								</li>
				       <?php
				      endwhile;
				    } //if ($my_query)
				  } //if ($cats)
				  wp_reset_query();  // Restore global post data stomped by the_post().
				} //if (is_single())
				?>
		</div>
	</section>



	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
