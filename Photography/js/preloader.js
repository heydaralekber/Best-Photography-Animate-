$(document).ready(function() {

$('#ud_dots').delay(800).fadeOut(300,function() {
	$('#ud_bg_left').animate({left:'-50%'},300);
	$('#ud_bg_right').animate({right: '-50%'},300);
	});

});