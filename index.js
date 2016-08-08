var win_Width = window.innerWidth;
var win_height = window.innerHeight;
$(".test_button").click(function(){
	$("#ul_main").css({
		'-webkit-transition-duration': '15000ms',
		'-webkit-transition-timing-function': 'linear',
		'-webkit-transform':'translate3d(-' + (win_Width * 2) + 'px,0px,0px)'
	});
});

$(document).ready(function(){
	$("#ul_main").css("width",(win_Width*3)+"px");
	$("#ul_main li").each(function(){
		// alert(this)
		$(this).find(".div_eachScreen").css("width",win_Width);
		$(this).find(".div_eachScreen").css("height",win_height);
	})

});