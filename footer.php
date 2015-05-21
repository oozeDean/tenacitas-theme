			<!-- footer -->
			<footer class="footer" role="contentinfo">

				<div class="content content--padding-top">

					<p class="footer__tagline">Move beyond uncertainty</p>

					<?php wp_nav_menu( array('menu' => 'Footer' )); ?>

					<!-- copyright -->
					<p class="footer__legal">
						&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?> International.<br />
						<a href="/privacy">Privacy</a><br />
						<a href="/legal">Legal</a>
					</p>
					<!-- /copyright -->

				</div>
				
			</footer>
			<!-- /footer -->

		</div>
		<!-- /wrapper -->

		<?php wp_footer(); ?>

		<!-- analytics -->
		<script>
		(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');
		</script>

	</body>
</html>
