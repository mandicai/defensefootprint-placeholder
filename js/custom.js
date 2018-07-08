$(document).ready(function() {

	$('#fade-in').hide(0).fadeIn(2000)

	/* ======== Javascript Document ====== */
	$('#subscribeform').submit(function(){
		var action = $(this).attr('action');
			$("#mesaj").slideUp(750,function() {
			$('#mesaj').hide();
		$('#subsubmit')
				.after('')
				.attr('disabled','disabled');
		$.post(action, {
				email: $('#subemail').val()
			},
				function(data){
					document.getElementById('mesaj').innerHTML = data;
					$('#mesaj').slideDown('slow');
					$('#subscribeform img.subscribe-loader').fadeOut('slow',function(){$(this).remove()});
					$('#subsubmit').removeAttr('disabled');
					if(data.match('success') != null) $('#subscribeform').slideUp('slow');
				}
			);
			});
			return false;
		});

	/* ======== Google Analytics ====== */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-38869757-3', 'auto');
  ga('send', 'pageview');
})
