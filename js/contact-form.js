// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
		// AJAX FORMS
		
		// Contact
		$("#subscribe").click(function() {
			// validate and process form
			// first hide any error messages
			//$(this).prop("disabled",true);
			$('.error').hide();
			
			// ERROR CHECKING		
			var firstname = $("input#firstname").val();
			if (firstname == "") { $("#firstname_error").show(); return false; }
			
			var lastname = $("input#lastname").val();
			if (lastname == "") { $("#lastname_error").show(); return false; }
			
			var email = $("input#email").val();
			if (email == "") { $("#email_error").show(); return false; }
			
			var phone = $("input#phone").val();
			if (phone == "") { $("#phone_error").show(); return false; }
			
			var jobtitle = $("input#jobtitle").val();
			var company = $("input#company").val();
			
			// PROCESS FORM
			var dataString = 'firstname='+firstname+'&lastname='+lastname+'&jobtitle='+jobtitle+'&company='+company+'&email='+email+'&phone='+phone;
			//alert (dataString); return false;
			
			$.ajax({
				type: "POST",
				url: "/wp-content/themes/jfd/js/contact-form-process.php",
				data: dataString,
				success: function() {
					$('#monthly-reports-container').html("<div id='thanks'>Thank-you for subscribing.</div>")
					.hide()
					.fadeIn(500)
					.delay(5000)
					.fadeOut(500);
				}
			});
			return false;
		});
	});
})(window.jQuery);