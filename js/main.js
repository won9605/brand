(function($) {

	"use strict";


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

  var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	$('.appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('.appointment_time').timepicker();

})(jQuery);



// main js
let num = 1;
	function nexttire(){
		num++;
		if(num>3) num=1;
		document.getElementById("face").src="images/tire-face"+num+".png";
		if(num===1){
			document.querySelector(".tire-graph1").style.display="block";
			document.querySelector(".tire-graph2").style.display="none";
			document.querySelector(".tire-graph3").style.display="none";
		} else if(num===2){
			document.querySelector(".tire-graph1").style.display="none";
			document.querySelector(".tire-graph2").style.display="block";
			document.querySelector(".tire-graph3").style.display="none";
		} else if(num===3){
			document.querySelector(".tire-graph1").style.display="none";
			document.querySelector(".tire-graph2").style.display="none";
			document.querySelector(".tire-graph3").style.display="block";
		}
		return false;
	}
	function prevtire(){
		num--;
		if(num<1) num=3;
		document.getElementById("face").src="images/tire-face"+num+".png";
		if(num===1){
			document.querySelector(".tire-graph1").style.display="block";
			document.querySelector(".tire-graph2").style.display="none";
			document.querySelector(".tire-graph3").style.display="none";
		} else if(num===2){
			document.querySelector(".tire-graph1").style.display="none";
			document.querySelector(".tire-graph2").style.display="block";
			document.querySelector(".tire-graph3").style.display="none";
		} else if(num===3){
			document.querySelector(".tire-graph1").style.display="none";
			document.querySelector(".tire-graph2").style.display="none";
			document.querySelector(".tire-graph3").style.display="block";
		}
		return false;
	}


// tire js



  $(function(){
	$(".choose-tire>p").eq(0).css("color","#00bd56").css("border-bottom","1px solid #00bd56");
  });
  $(function(){
	$(".choose-tire>p").eq(0).click(function(){
		$(this).css("color","#00bd56").css("border-bottom","1px solid #00bd56");
		$(".choose-tire>p").eq(1).css("color","#000").css("border-bottom","none");
		$(".choose-tire>p").eq(2).css("color","#000").css("border-bottom","none");
		$(".choose-tire>p").eq(3).css("color","#000").css("border-bottom","none");
		$(".tires>div").css("display","block");
	});
	$(".choose-tire>p").eq(1).click(function(){
		$(this).css("color","#00bd56").css("border-bottom","1px solid #00bd56");
		$(".choose-tire>p").eq(0).css("color","#000").css("border-bottom","none");
		$(".choose-tire>p").eq(2).css("color","#000").css("border-bottom","none");
		$(".choose-tire>p").eq(3).css("color","#000").css("border-bottom","none");
		$(".tires>div").css("display","none");
		$(".wg78").css("display","block");
		$(".sb83").css("display","block");
		$(".tc30").css("display","block");
	});
	$(".choose-tire>p").eq(2).click(function(){
		$(this).css("color","#00bd56").css("border-bottom","1px solid #00bd56");
		$(".choose-tire>p").eq(0).css("color","#000").css("border-bottom","none");
		$(".choose-tire>p").eq(1).css("color","#000").css("border-bottom","none");
		$(".choose-tire>p").eq(3).css("color","#000").css("border-bottom","none");
		$(".tires>div").css("display","none");
		$(".sb81").css("display","block");
		$(".tc31").css("display","block");
		$(".wg77").css("display","block");
	});
	$(".choose-tire>p").eq(3).click(function(){
		$(this).css("color","#00bd56").css("border-bottom","1px solid #00bd56");
		$(".choose-tire>p").eq(0).css("color","#000").css("border-bottom","none");
		$(".choose-tire>p").eq(1).css("color","#000").css("border-bottom","none");
		$(".choose-tire>p").eq(2).css("color","#000").css("border-bottom","none");
		$(".tires>div").css("display","none");
		$(".sb82").css("display","block");
		$(".tc32").css("display","block");
	});
  });



  $(function(){
	$(".tc30-detail").click(function(){
		$("#tc30-detail").css("display","block");
		$("#sb81-detail").css("display","none");
		$("#wg77-detail").css("display","none");
		$("#sb82-detail").css("display","none");
		$("#tc31-detail").css("display","none");
		$("#tc32-detail").css("display","none");
		$("#wg78-detail").css("display","none");
		$("#sb83-detail").css("display","none");
	});
	$(".sb81-detail").click(function(){
		$("#tc30-detail").css("display","none");
		$("#sb81-detail").css("display","block");
		$("#wg77-detail").css("display","none");
		$("#sb82-detail").css("display","none");
		$("#tc31-detail").css("display","none");
		$("#tc32-detail").css("display","none");
		$("#wg78-detail").css("display","none");
		$("#sb83-detail").css("display","none");
	});
	$(".wg77-detail").click(function(){
		$("#tc30-detail").css("display","none");
		$("#sb81-detail").css("display","none");
		$("#wg77-detail").css("display","block");
		$("#sb82-detail").css("display","none");
		$("#tc31-detail").css("display","none");
		$("#tc32-detail").css("display","none");
		$("#wg78-detail").css("display","none");
		$("#sb83-detail").css("display","none");
	});
	$(".sb82-detail").click(function(){
		$("#tc30-detail").css("display","none");
		$("#sb81-detail").css("display","none");
		$("#wg77-detail").css("display","none");
		$("#sb82-detail").css("display","block");
		$("#tc31-detail").css("display","none");
		$("#tc32-detail").css("display","none");
		$("#wg78-detail").css("display","none");
		$("#sb83-detail").css("display","none");
	});
	$(".tc31-detail").click(function(){
		$("#tc30-detail").css("display","none");
		$("#sb81-detail").css("display","none");
		$("#wg77-detail").css("display","none");
		$("#sb82-detail").css("display","none");
		$("#tc31-detail").css("display","block");
		$("#tc32-detail").css("display","none");
		$("#wg78-detail").css("display","none");
		$("#sb83-detail").css("display","none");
	});
	$(".tc32-detail").click(function(){
		$("#tc30-detail").css("display","none");
		$("#sb81-detail").css("display","none");
		$("#wg77-detail").css("display","none");
		$("#sb82-detail").css("display","none");
		$("#tc31-detail").css("display","none");
		$("#tc32-detail").css("display","block");
		$("#wg78-detail").css("display","none");
		$("#sb83-detail").css("display","none");
	});
	$(".wg78-detail").click(function(){
		$("#tc30-detail").css("display","none");
		$("#sb81-detail").css("display","none");
		$("#wg77-detail").css("display","none");
		$("#sb82-detail").css("display","none");
		$("#tc31-detail").css("display","none");
		$("#tc32-detail").css("display","none");
		$("#wg78-detail").css("display","block");
		$("#sb83-detail").css("display","none");
	});
	$(".sb83-detail").click(function(){
		$("#tc30-detail").css("display","none");
		$("#sb81-detail").css("display","none");
		$("#wg77-detail").css("display","none");
		$("#sb82-detail").css("display","none");
		$("#tc31-detail").css("display","none");
		$("#tc32-detail").css("display","none");
		$("#wg78-detail").css("display","none");
		$("#sb83-detail").css("display","block");
	});
  });





// guide 스크립트

$(function(){
	$(".guide1").click(function(){
		$(window).scrollTop(0);
		$(".guide").css("display","none");
		$("#tire-part").css("display","block");
	});
	$(".guide2").click(function(){
		$(window).scrollTop(0);
		$(".guide").css("display","none");
		$("#tire-select").css("display","block");
	});
	$(".guide3").click(function(){
		$(window).scrollTop(0);
		$(".guide").css("display","none");
		$("#tire-exchange").css("display","block");
	});
	$(".guide4").click(function(){
		$(window).scrollTop(0);
		$(".guide").css("display","none");
		$("#tire-windage").css("display","block");
	});
	$(".guide5").click(function(){
		$(window).scrollTop(0);
		$(".guide").css("display","none");
		$("#tire-mark").css("display","block");
	});
	$(".guide6").click(function(){
		$(window).scrollTop(0);
		$(".guide").css("display","none");
		$("#tire-structure").css("display","block");
	});
});
$(function(){
	$(".guide-sm1").click(function(){
		$(window).scrollTop(0);
		$("#tire-part").css("display","block");
		$("#tire-select").css("display","none");
		$("#tire-exchange").css("display","none");
		$("#tire-windage").css("display","none");
		$("#tire-mark").css("display","none");
		$("#tire-structure").css("display","none");
	});
	$(".guide-sm2").click(function(){
		$(window).scrollTop(0);
		$("#tire-part").css("display","none");
		$("#tire-select").css("display","block");
		$("#tire-exchange").css("display","none");
		$("#tire-windage").css("display","none");
		$("#tire-mark").css("display","none");
		$("#tire-structure").css("display","none");
	});
	$(".guide-sm3").click(function(){
		$(window).scrollTop(0);
		$("#tire-part").css("display","none");
		$("#tire-select").css("display","none");
		$("#tire-exchange").css("display","block");
		$("#tire-windage").css("display","none");
		$("#tire-mark").css("display","none");
		$("#tire-structure").css("display","none");
	});
	$(".guide-sm4").click(function(){
		$(window).scrollTop(0);
		$("#tire-part").css("display","none");
		$("#tire-select").css("display","none");
		$("#tire-exchange").css("display","none");
		$("#tire-windage").css("display","block");
		$("#tire-mark").css("display","none");
		$("#tire-structure").css("display","none");
	});
	$(".guide-sm5").click(function(){
		$(window).scrollTop(0);
		$("#tire-part").css("display","none");
		$("#tire-select").css("display","none");
		$("#tire-exchange").css("display","none");
		$("#tire-windage").css("display","none");
		$("#tire-mark").css("display","block");
		$("#tire-structure").css("display","none");
	});
	$(".guide-sm6").click(function(){
		$(window).scrollTop(0);
		$("#tire-part").css("display","none");
		$("#tire-select").css("display","none");
		$("#tire-exchange").css("display","none");
		$("#tire-windage").css("display","none");
		$("#tire-mark").css("display","none");
		$("#tire-structure").css("display","block");
	});
});



//store 스크립트

function filter(){

	var value, name, item, i;

	value = document.getElementById("valuez").value.toUpperCase();
	item = document.getElementsByClassName("s-name");

	for(i=0;i<item.length;i++){
	  name = item[i].getElementsByClassName("s-item");
	  if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
		item[i].style.display = "flex";
	  }else{
		item[i].style.display = "none";
	  }
	}
  }

function addressChange(i){
	var seoul = ["서울전체", "강동구", "강서구", "강남구", "강북구"];
	var gyeonggi = ["경기전체", "김포", "수원", "용인"];
	var incheon = ["인천전체", "서구", "남구", "계양구"];
	var target = document.querySelector("#address-sub")

	if(i.value == "서울") var d = seoul;
	else if(i.value == "경기") var d = gyeonggi;
	else if(i.value == "인천") var d = incheon;

	target.options.length=0;

	for(x in d){
	  var opt = document.createElement("option");
	  opt.value = d[x];
	  opt.innerHTML = d[x];
	  target.appendChild(opt);
	}
  }



let a = ["cityall", "서울", "경기", "인천"];
function addr(a){ 
  if(a.value == "cityall"){
	document.querySelector(".gangdong").style.display="block";
		  document.querySelector(".gangseo").style.display="block";
		  document.querySelector(".gangnam").style.display="block";
		  document.querySelector(".gangbuk").style.display="block";
	document.querySelector(".kimpo").style.display="block";
		  document.querySelector(".suwon").style.display="block";
		  document.querySelector(".yongin").style.display="block";
	document.querySelector(".seogu").style.display="block";
	document.querySelector(".namgu").style.display="block";
	document.querySelector(".gyeyang").style.display="block";
   } else if(a.value == "서울"){
	document.querySelector(".gangdong").style.display="block";
		  document.querySelector(".gangseo").style.display="block";
		  document.querySelector(".gangnam").style.display="block";
		  document.querySelector(".gangbuk").style.display="block";
	document.querySelector(".kimpo").style.display="none";
		  document.querySelector(".suwon").style.display="none";
		  document.querySelector(".yongin").style.display="none";
	document.querySelector(".seogu").style.display="none";
	document.querySelector(".namgu").style.display="none";
	document.querySelector(".gyeyang").style.display="none";
   } else if(a.value == "경기"){
	document.querySelector(".gangdong").style.display="none";
		  document.querySelector(".gangseo").style.display="none";
		  document.querySelector(".gangnam").style.display="none";
		  document.querySelector(".gangbuk").style.display="none";
	document.querySelector(".kimpo").style.display="block";
		  document.querySelector(".suwon").style.display="block";
		  document.querySelector(".yongin").style.display="block";
	document.querySelector(".seogu").style.display="none";
	document.querySelector(".namgu").style.display="none";
	document.querySelector(".gyeyang").style.display="none";
   } else if(a.value == "인천"){
	document.querySelector(".gangdong").style.display="none";
		  document.querySelector(".gangseo").style.display="none";
		  document.querySelector(".gangnam").style.display="none";
		  document.querySelector(".gangbuk").style.display="none";
	document.querySelector(".kimpo").style.display="none";
		  document.querySelector(".suwon").style.display="none";
		  document.querySelector(".yongin").style.display="none";
	document.querySelector(".seogu").style.display="block";
	document.querySelector(".namgu").style.display="block";
	document.querySelector(".gyeyang").style.display="block";
   }
}




let all = ["서울전체", "강동구", "강서구", "강남구", "강북구", "경기전체", "김포", "수원", "용인", "인천전체", "서구", "남구", "계양구"];

function searchgz(all){
  if(all.value == "서울전체"){
document.querySelector(".gangdong").style.display="block";
	  document.querySelector(".gangseo").style.display="block";
	  document.querySelector(".gangnam").style.display="block";
	  document.querySelector(".gangbuk").style.display="block";
document.querySelector(".kimpo").style.display="none";
	  document.querySelector(".suwon").style.display="none";
	  document.querySelector(".yongin").style.display="none";
document.querySelector(".seogu").style.display="none";
document.querySelector(".namgu").style.display="none";
document.querySelector(".gyeyang").style.display="none";
  } else if(all.value == "강동구"){
document.querySelector(".gangdong").style.display="block";
	  document.querySelector(".gangseo").style.display="none";
	  document.querySelector(".gangnam").style.display="none";
	  document.querySelector(".gangbuk").style.display="none";
document.querySelector(".kimpo").style.display="none";
	  document.querySelector(".suwon").style.display="none";
	  document.querySelector(".yongin").style.display="none";
document.querySelector(".seogu").style.display="none";
document.querySelector(".namgu").style.display="none";
document.querySelector(".gyeyang").style.display="none";
  } else if(all.value == "강서구"){
document.querySelector(".gangdong").style.display="none";
	  document.querySelector(".gangseo").style.display="block";
	  document.querySelector(".gangnam").style.display="none";
	  document.querySelector(".gangbuk").style.display="none";
document.querySelector(".kimpo").style.display="none";
	  document.querySelector(".suwon").style.display="none";
	  document.querySelector(".yongin").style.display="none";
document.querySelector(".seogu").style.display="none";
document.querySelector(".namgu").style.display="none";
document.querySelector(".gyeyang").style.display="none";
  } else if(all.value == "강남구"){
document.querySelector(".gangdong").style.display="none";
	  document.querySelector(".gangseo").style.display="none";
	  document.querySelector(".gangnam").style.display="block";
	  document.querySelector(".gangbuk").style.display="none";
document.querySelector(".kimpo").style.display="none";
	  document.querySelector(".suwon").style.display="none";
	  document.querySelector(".yongin").style.display="none";
document.querySelector(".seogu").style.display="none";
document.querySelector(".namgu").style.display="none";
document.querySelector(".gyeyang").style.display="none";
  } else if(all.value == "강북구"){
document.querySelector(".gangdong").style.display="none";
	  document.querySelector(".gangseo").style.display="none";
	  document.querySelector(".gangnam").style.display="none";
	  document.querySelector(".gangbuk").style.display="block";
document.querySelector(".kimpo").style.display="none";
	  document.querySelector(".suwon").style.display="none";
	  document.querySelector(".yongin").style.display="none";
document.querySelector(".seogu").style.display="none";
document.querySelector(".namgu").style.display="none";
document.querySelector(".gyeyang").style.display="none";
  } else if(all.value == "경기전체"){
document.querySelector(".gangdong").style.display="none";
	  document.querySelector(".gangseo").style.display="none";
	  document.querySelector(".gangnam").style.display="none";
	  document.querySelector(".gangbuk").style.display="none";
document.querySelector(".kimpo").style.display="block";
	  document.querySelector(".suwon").style.display="block";
	  document.querySelector(".yongin").style.display="block";
document.querySelector(".seogu").style.display="none";
document.querySelector(".namgu").style.display="none";
document.querySelector(".gyeyang").style.display="none";
  } else if(all.value == "김포"){
document.querySelector(".gangdong").style.display="none";
	  document.querySelector(".gangseo").style.display="none";
	  document.querySelector(".gangnam").style.display="none";
	  document.querySelector(".gangbuk").style.display="none";
document.querySelector(".kimpo").style.display="block";
	  document.querySelector(".suwon").style.display="none";
	  document.querySelector(".yongin").style.display="none";
document.querySelector(".seogu").style.display="none";
document.querySelector(".namgu").style.display="none";
document.querySelector(".gyeyang").style.display="none";
  } else if(all.value == "수원"){
document.querySelector(".gangdong").style.display="none";
	  document.querySelector(".gangseo").style.display="none";
	  document.querySelector(".gangnam").style.display="none";
	  document.querySelector(".gangbuk").style.display="none";
document.querySelector(".kimpo").style.display="none";
	  document.querySelector(".suwon").style.display="block";
	  document.querySelector(".yongin").style.display="none";
document.querySelector(".seogu").style.display="none";
document.querySelector(".namgu").style.display="none";
document.querySelector(".gyeyang").style.display="none";
  } else if(all.value == "용인"){
document.querySelector(".gangdong").style.display="none";
	  document.querySelector(".gangseo").style.display="none";
	  document.querySelector(".gangnam").style.display="none";
	  document.querySelector(".gangbuk").style.display="none";
document.querySelector(".kimpo").style.display="none";
	  document.querySelector(".suwon").style.display="none";
	  document.querySelector(".yongin").style.display="block";
document.querySelector(".seogu").style.display="none";
document.querySelector(".namgu").style.display="none";
document.querySelector(".gyeyang").style.display="none";
  } else if(all.value == "인천전체"){
document.querySelector(".gangdong").style.display="none";
	  document.querySelector(".gangseo").style.display="none";
	  document.querySelector(".gangnam").style.display="none";
	  document.querySelector(".gangbuk").style.display="none";
document.querySelector(".kimpo").style.display="none";
	  document.querySelector(".suwon").style.display="none";
	  document.querySelector(".yongin").style.display="none";
document.querySelector(".seogu").style.display="block";
document.querySelector(".namgu").style.display="block";
document.querySelector(".gyeyang").style.display="block";
  } else if(all.value == "서구"){
document.querySelector(".gangdong").style.display="none";
	  document.querySelector(".gangseo").style.display="none";
	  document.querySelector(".gangnam").style.display="none";
	  document.querySelector(".gangbuk").style.display="none";
document.querySelector(".kimpo").style.display="none";
	  document.querySelector(".suwon").style.display="none";
	  document.querySelector(".yongin").style.display="none";
document.querySelector(".seogu").style.display="block";
document.querySelector(".namgu").style.display="none";
document.querySelector(".gyeyang").style.display="none";
  } else if(all.value == "남구"){
document.querySelector(".gangdong").style.display="none";
	  document.querySelector(".gangseo").style.display="none";
	  document.querySelector(".gangnam").style.display="none";
	  document.querySelector(".gangbuk").style.display="none";
document.querySelector(".kimpo").style.display="none";
	  document.querySelector(".suwon").style.display="none";
	  document.querySelector(".yongin").style.display="none";
document.querySelector(".seogu").style.display="none";
document.querySelector(".namgu").style.display="block";
document.querySelector(".gyeyang").style.display="none";
  } else if(all.value == "계양구"){
document.querySelector(".gangdong").style.display="none";
	  document.querySelector(".gangseo").style.display="none";
	  document.querySelector(".gangnam").style.display="none";
	  document.querySelector(".gangbuk").style.display="none";
document.querySelector(".kimpo").style.display="none";
	  document.querySelector(".suwon").style.display="none";
	  document.querySelector(".yongin").style.display="none";
document.querySelector(".seogu").style.display="none";
document.querySelector(".namgu").style.display="none";
document.querySelector(".gyeyang").style.display="block";
  }
}






// faq 스크립트

$(function(){
    $(".faq-fa-angle-down1").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up1").css("display","block");
      $(".faq-a-1").slideDown();
    });
    $(".faq-fa-angle-up1").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down1").css("display","block");
      $(".faq-a-1").slideUp();
    });
    $(".faq-fa-angle-down2").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up2").css("display","block");
      $(".faq-a-2").slideDown();
    });
    $(".faq-fa-angle-up2").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down2").css("display","block");
      $(".faq-a-2").slideUp();
    });
    $(".faq-fa-angle-down3").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up3").css("display","block");
      $(".faq-a-3").slideDown();
    });
    $(".faq-fa-angle-up3").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down3").css("display","block");
      $(".faq-a-3").slideUp();
    });
    $(".faq-fa-angle-down4").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up4").css("display","block");
      $(".faq-a-4").slideDown();
    });
    $(".faq-fa-angle-up4").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down4").css("display","block");
      $(".faq-a-4").slideUp();
    });
    $(".faq-fa-angle-down5").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up5").css("display","block");
      $(".faq-a-5").slideDown();
    });
    $(".faq-fa-angle-up5").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down5").css("display","block");
      $(".faq-a-5").slideUp();
    });
    $(".faq-fa-angle-down6").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up6").css("display","block");
      $(".faq-a-6").slideDown();
    });
    $(".faq-fa-angle-up6").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down6").css("display","block");
      $(".faq-a-6").slideUp();
    });
    $(".faq-fa-angle-down7").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up7").css("display","block");
      $(".faq-a-7").slideDown();
    });
    $(".faq-fa-angle-up7").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down7").css("display","block");
      $(".faq-a-7").slideUp();
    });
    $(".faq-fa-angle-down8").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up8").css("display","block");
      $(".faq-a-8").slideDown();
    });
    $(".faq-fa-angle-up8").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down8").css("display","block");
      $(".faq-a-8").slideUp();
    });
    $(".faq-fa-angle-down9").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up9").css("display","block");
      $(".faq-a-9").slideDown();
    });
    $(".faq-fa-angle-up9").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down9").css("display","block");
      $(".faq-a-9").slideUp();
    });
    $(".faq-fa-angle-down10").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up10").css("display","block");
      $(".faq-a-10").slideDown();
    });
    $(".faq-fa-angle-up10").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down10").css("display","block");
      $(".faq-a-10").slideUp();
    });
    $(".faq-fa-angle-down11").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up11").css("display","block");
      $(".faq-a-11").slideDown();
    });
    $(".faq-fa-angle-up11").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down11").css("display","block");
      $(".faq-a-11").slideUp();
    });
    $(".faq-fa-angle-down12").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up12").css("display","block");
      $(".faq-a-12").slideDown();
    });
    $(".faq-fa-angle-up12").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down12").css("display","block");
      $(".faq-a-12").slideUp();
    });
    $(".faq-fa-angle-down13").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up13").css("display","block");
      $(".faq-a-13").slideDown();
    });
    $(".faq-fa-angle-up13").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down13").css("display","block");
      $(".faq-a-13").slideUp();
    });
    $(".faq-fa-angle-down14").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up14").css("display","block");
      $(".faq-a-14").slideDown();
    });
    $(".faq-fa-angle-up14").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down14").css("display","block");
      $(".faq-a-14").slideUp();
    });
    $(".faq-fa-angle-down15").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up15").css("display","block");
      $(".faq-a-15").slideDown();
    });
    $(".faq-fa-angle-up15").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down15").css("display","block");
      $(".faq-a-15").slideUp();
    });
    $(".faq-fa-angle-down16").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up16").css("display","block");
      $(".faq-a-16").slideDown();
    });
    $(".faq-fa-angle-up16").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down16").css("display","block");
      $(".faq-a-16").slideUp();
    });
    $(".faq-fa-angle-down17").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up17").css("display","block");
      $(".faq-a-17").slideDown();
    });
    $(".faq-fa-angle-up17").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down17").css("display","block");
      $(".faq-a-17").slideUp();
    });
    $(".faq-fa-angle-down18").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up18").css("display","block");
      $(".faq-a-18").slideDown();
    });
    $(".faq-fa-angle-up18").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down18").css("display","block");
      $(".faq-a-18").slideUp();
    });
    $(".faq-fa-angle-down19").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up19").css("display","block");
      $(".faq-a-19").slideDown();
    });
    $(".faq-fa-angle-up19").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down19").css("display","block");
      $(".faq-a-19").slideUp();
    });
    $(".faq-fa-angle-down20").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-up20").css("display","block");
      $(".faq-a-20").slideDown();
    });
    $(".faq-fa-angle-up20").click(function(){
      $(this).css("display","none");
      $(".faq-fa-angle-down20").css("display","block");
      $(".faq-a-20").slideUp();
    });
  });


  $(function(){
    $(".btn-number1").click(function(){
      $(this).addClass("active");
      $(".btn-number2").removeClass("active");
      $(".btn-number3").removeClass("active");
      $(".page-1").css("display","block");
      $(".page-2").css("display","none");
      $(".page-3").css("display","none");
    });
    $(".btn-number1").click(function(){
      $(this).addClass("active");
      $(".btn-number2").removeClass("active");
      $(".btn-number3").removeClass("active");
      $(".page-1").css("display","block");
      $(".page-2").css("display","none");
      $(".page-3").css("display","none");
    });
    $(".btn-number2").click(function(){
      $(this).addClass("active");
      $(".btn-number1").removeClass("active");
      $(".btn-number3").removeClass("active");
      $(".page-1").css("display","none");
      $(".page-2").css("display","block");
      $(".page-3").css("display","none");
    });
    $(".btn-number3").click(function(){
      $(this).addClass("active");
      $(".btn-number1").removeClass("active");
      $(".btn-number2").removeClass("active");
      $(".page-1").css("display","none");
      $(".page-2").css("display","none");
      $(".page-3").css("display","block");
    });
  });


  $(function(){
    $(".faq-text-click1").click(function(){
      $(this).addClass("faq-text-click");
      $(".faq-text-click2").removeClass("faq-text-click");
      $(".faq-text-click3").removeClass("faq-text-click");
      $(".faq-text-click4").removeClass("faq-text-click");
      $(".page-all").css("display","block");
      $(".faq-all").css("display","none");
    });
    $(".faq-text-click2").click(function(){
      $(this).addClass("faq-text-click");
      $(".faq-text-click1").removeClass("faq-text-click");
      $(".faq-text-click3").removeClass("faq-text-click");
      $(".faq-text-click4").removeClass("faq-text-click");
      $(".page-all").css("display","none");
      $(".faq-all").css("display","block");
    });
  });


