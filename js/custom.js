$(document).ready(function() {

  /* ======== Google Analytics ====== */
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-122616818-1');

	/* ======= Scroll to Contact ======= */
  $("#send-message, #send-message-two").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-form").offset().top - 50},
        'slow')
  })

	/* ======== Text fade ====== */
	$('#fade-in').hide(0).fadeIn(2000)

	/* ======== Contact form ====== */
	if ($("#FORMCARRY-CONTACT-US").length) {
    // if you try to run .validate without checking if the element exists, it breaks
    // the navbar scrolling effects further down in this script.
    // Calling validate with rules/options actives the validation error messages.
    // submitHandler runs if the form is valid and the user clicks submit.
    // Log into the BioBright Formcarry account to change the URL

      $("#FORMCARRY-CONTACT-US").validate({
        rules: {
          EMAIL: {
            required: true,
            email: true
          }
        },
        submitHandler: function(form) {
          $.ajax({
            url: "https://formcarry.com/s/HvL9NCYOm1",
            method: "POST",
            data: {
              name: $(form).find("input[name='NAME']").val(),
              email: $(form).find("input[name='EMAIL']").val(),
              message: $(form).find("textarea[name='MESSAGE']").val(),
            },
            dataType: "json",
            success: function(form) {
              $('#formcarry-submit-success').append('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Thanks for your interest!</div>');
            },
            error: function() {
              $('#formcarry-submit-error').append('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Sorry, there was an error. Please email us directly at <a href="mailto:mandicai@gmail.com">mandicai@gmail.com</a></div>');
            }
        })
        form.reset()
      }
    })
  }

	/* ======== Javascript Document ====== */
	$('#subscribeform').submit(function(){
		var action = $(this).attr('action')
			$("#mesaj").slideUp(750,function() {
			$('#mesaj').hide();
		$('#subsubmit')
				.after('')
				.attr('disabled','disabled')
		$.post(action, {
				email: $('#subemail').val()
			},
				function(data){
					document.getElementById('mesaj').innerHTML = data
					$('#mesaj').slideDown('slow')
					$('#subscribeform img.subscribe-loader').fadeOut('slow',function(){$(this).remove()})
					$('#subsubmit').removeAttr('disabled')
					if(data.match('success') != null) $('#subscribeform').slideUp('slow')
				}
			);
			});
			return false
		});

})
