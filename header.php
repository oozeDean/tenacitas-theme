<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<link href='http://fonts.googleapis.com/css?family=Roboto:400,500,700,300' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Merriweather:400,700,300' rel='stylesheet' type='text/css'>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
		<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/js/contact-form.js"></script>

	</head>
	<body <?php body_class(); ?>>

		<!-- wrapper -->
		<div class="wrapper">

			<!-- header -->
			<header class="header clear" role="banner">

				<div class="header__inner">

					<!-- logo -->
					<div class="logo">
						<a href="<?php echo home_url(); ?>">
							<!-- svg logo - toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script -->
							<img src="<?php echo get_template_directory_uri(); ?>/img/logo@2x.png" alt="Logo" class="logo__img">
						</a>
					</div>
					<!-- /logo -->

					<!-- social -->
					<div class="social">	
						<ul class="social__list">
							<li class="social__item"><a href="https://www.linkedin.com/company/2988169?trk=prof-exp-company-name"><img src="<?php echo get_template_directory_uri(); ?>/img/linkedin.png" ></a></li>
							<li class="social__item"><a href="https://twitter.com/tenacitas_intl"><img src="<?php echo get_template_directory_uri(); ?>/img/twitter.png" ></a></li>
						</ul>
					</div>
					<!-- /social -->

					<!-- nav -->
					<nav class="nav" role="navigation">
						<div class="nav__list">
							<?php

								wp_nav_menu(
								    array(
									'menu' => 'custom header',
									// do not fall back to first non-empty menu
									'theme_location' => '__no_such_location',
									// do not fall back to wp_page_menu()
									'fallback_cb' => false
								  )
								);

							?>
							</div>
						<div class="burger js-menu">
							<button class="cmn-toggle-switch cmn-toggle-switch__htx">
	            	<span>toggle menu</span>
	          	</button>
	          </div>
					</nav>
					<!-- /nav -->					
				</div>

			</header>
			<!-- /header -->
