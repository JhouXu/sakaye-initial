
//点击按钮的效果
var index = 0;
$(".tab-btn .btn").click(function(){
	index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".item").eq(index).fadeIn().siblings().fadeOut();
});

//点击切换效果
$(".lr-tab .right").click(function(){
	index ++;
	if (index > 4){
	index = 0;
}
	$(".item").eq(index).fadeIn().siblings().fadeOut();
	$(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
});
$(".lr-tab .left").click(function(){
	index --;
	if (index < 0){
		index = 4;
	}
	$(".item").eq(index).fadeIn().siblings().fadeOut();
	$(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
});

//自动轮播
var time = setInterval(function(){
	index ++;
	if (index > 4){
		index = 0;
	}
	$(".item").eq(index).fadeIn().siblings().fadeOut();
	$(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
},4000);
