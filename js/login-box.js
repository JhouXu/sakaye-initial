


var index = 0; //初始化一个值,指向下标
	$(".login .login-nav").click(function(){
		
		index = $(this).index();//获取点击该元素的下标
		
		$(this).addClass("active").siblings().removeClass("active")/*先赋予样式然后删除之前的样式*/
		$(".tiem").eq(index).show().siblings().hide();//.tiem 分别使手机登录框和密码登录框按 0 1 下标排序直接显示和隐藏 /*查找索引，可以不用，用作轮播图*/
		
	});/*通过点击事件*/
	
	$("#banner #login").click(function(){
		
		$(".background-shadows").fadeIn();//淡入
	});
	$(".background-shadows .close").click(function(){
		
		$(".background-shadows").fadeOut();//淡出
		
	});