var win_Width = window.innerWidth;
var win_height = window.innerHeight;
// $(".test_button").click(function(){
// 	var swipt = Swipt($(".all_content"))
// 	// 调用接口
//     swipt.scrollTo($("#content").width() * 2, 5000);
// });

$(document).ready(function(){
	$("#ul_main li").each(function(){
		// alert(this)
		$(this).find(".div_eachScreen").css("width",win_Width);
		$(this).find(".div_eachScreen").css("height",win_height);
	});

 	// 获取数据
    var getValue = function(className) {
        var $elem = $('' + className + '');
            // 走路的路线坐标
        return {
            height: $elem.height(),
            top: $elem.position().top
        };
    };

 	// 路的Y轴
    var pathY = function() {
        var data = getValue('.a_background_middle');
        return data.top + data.height / 2;
    }();

    var $boy = $("#boy");
    var boyHeight = $boy.height();

    // 修正小男孩的正确位置
    // 路的中间位置减去小孩的高度，25是一个修正值
    $boy.css({
	    top: pathY - boyHeight + 25
	 });

    $(".test_button").click(function() {
            // left的变化
            $boy.transition({
    'left': $(".all_content").width() + 'px',
}, 2000, 'linear', function() {});
        });
 

});