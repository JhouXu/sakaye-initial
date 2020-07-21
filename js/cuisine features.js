//美食特色

var index = 0;
$(".sort .tab_item").click(function(){
	index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".sort .item").eq(index).fadeIn().siblings().fadeOut();
});




/**
 * 
 * 图片随着鼠标的位置而放缩
 * 
 */
//$('.img').mouseover(function(){
//	$('.img').addClass('images-scale');
//});
//$('.img').mouseout(function(){
//	this.addClass('images-unscale');
//});


