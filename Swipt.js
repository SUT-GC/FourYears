function Swipt(container){
	var element = container.find(":first");
	var swipt = {};
	//获取容器尺寸
    var width = container.width();
    var height = container.height();

    element.css({
        width: (3 * width) + 'px',
        height: height + 'px'
    })

    $("#ul_main li").each(function(){
		// alert(this)
		$(this).find(".div_eachScreen").css("width",win_Width);
		$(this).find(".div_eachScreen").css("height",win_height);
	});

	//监控完成与移动
    swipt.scrollTo = function(x, speed) {
        //执行动画移动
        element.css({
			'-webkit-transition-duration': '15000ms',
			'-webkit-transition-timing-function': 'linear',
			'-webkit-transform':'translate3d(-' + (win_Width * 2) + 'px,0px,0px)'
        });
        return this;
    };
	return swipt;
}