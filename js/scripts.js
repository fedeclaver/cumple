
$(document).ready(function() {
let theday = new Date();
	theday = new Date(2022, 10, 18 ,19);
		 
	$('#countdown').countdown({until: theday, format: 'DHMS'});
	$('#countdown').countdown($.countdown.regionalOptions['es']); 

	$('#date-countdown').countdown({until: theday, format: 'DHMS'});
// Portada parallax
$('.portada').parallax({
	imageSrc: 'images/main.jpeg'
  });
  
  $('.fiesta').parallax({
	imageSrc: 'images/seifratelli2.png'
  });
    
  $('.dj').parallax({
	imageSrc: 'images/aj3_7807.jpg'
  });

 

  
})
