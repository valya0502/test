jQuery(function() {  
	$('.header__slider').slick({
		prevArrow:$('.prev_arrows1'),
		nextArrow:$('.next_arrows1'),
	});

	$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});

});