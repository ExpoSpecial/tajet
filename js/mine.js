$(document).ready(function(){
                $('.least-gallery').least();
            });
$(document).ready(function(){
        $('.sl-text').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.center'
		});
		$('.center').slick({
		  asNavFor: '.sl-text',
		  centerMode: true,
		  centerPadding: '10px',
		  slidesToShow: 3,
		  autoplay: true,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '20px',
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 500,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '20px',
		        slidesToShow: 1
		      }
		    }
		  ]
		});
    });