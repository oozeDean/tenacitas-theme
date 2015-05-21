<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section class="section section--turquoise section--first">

			<div class="content content--lines">

				<!-- article -->
				<article id="post-404">

					<h1><?php _e( 'Page not found', 'html5blank' ); ?></h1>
					<p>
						The page you are looking for no longer exists. Perhaps you can return back to the site’s <a href="<?php echo home_url(); ?>"><?php _e( 'homepage', 'html5blank' ); ?></a> and see if you can find what you are looking for.
					</p>

				</article>
				<!-- /article -->

			</div>

		</section>
		<!-- /section -->
	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
