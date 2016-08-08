var win_Width = window.innerWidth;
var win_height = window.innerHeight;
$(".test_button").click(function(){
	var swipt = Swipt($(".all_content"))
	// 调用接口
    swipt.scrollTo($("#content").width() * 2, 5000);
});

$(document).ready(function(){
	 $("#ul_main li").each(function(){
		// alert(this)
		$(this).find(".div_eachScreen").css("width",win_Width);
		$(this).find(".div_eachScreen").css("height",win_height);
	});
});