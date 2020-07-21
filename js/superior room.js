//精致客房



//点击按钮的效果
var index = 0;
$(".small-picture .btn").click(function(){
	
	index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".scroll-pictures .item").eq(index).fadeIn().siblings().fadeOut();
	
	if (index == 0){
		$(".btn .left").hide();
		$(".btn .right").show();
	}else if(index == 19){
		$(".btn .right").hide();
		$(".btn .left").show();
	}else{
		$(".btn .left").show();
		$(".btn .right").show();
	}
	
});

//点击切换效果
$(".btn .right").click(function(){
	index ++;
	if (index == 19){
		$(".btn .right").hide();
	}else{
		$(".btn .left").show();
	}
	
	$(".scroll-pictures .item").eq(index).fadeIn().siblings().fadeOut();
	$(".small-picture .btn").eq(index).addClass("active").siblings().removeClass("active");
});


$(".btn .left").click(function(){
	index --;
	
	
	if (index == 0){
		$(".btn .left").hide();
	}else{
		$(".btn .right").show();
	}
	$(".scroll-pictures .item").eq(index).fadeIn().siblings().fadeOut();
	$(".small-picture .btn").eq(index).addClass("active").siblings().removeClass("active");
});


/**************************************************************焦点*********************************/


/*$('form[name^="form"] input,textarea').bind('focus', function(){
	$(input::befre).removeClass('camera');
});*/

/*$('body').on('click' , '#sum' , function() {
    //alert('事件相应');
    $("#sum").addClass("sum-border");
});*/

/*$('body').on('click' , 'header' , function() {
    //alert('事件相应');
    $("header").not("#sum").removeClass(".sum-border");
   	//$("#sum").removeClass("sum-border");
});*/

/*$(function(){
	$('body').on('click' , '#sum' , function() {
    	//alert('事件相应');
    	$("#sum").addClass("sum-border");
	});
	$('body').on('click' , 'div' , function() {
    	alert('事件相应');
    	$("#sum").addClass("sum-border");
	});
	
});*/
/*$(function(){
	$('body').on('click' , '.sum,.sum input' , function() {
    	//alert('事件相应');
    	
	});
	$('body').on('click' , '' , function() {
    	//alert('事件相应');
    	$(".sum").addClass("sum-border");
	});
	
	$('body').on('click' , 'div' , function() {
    	//alert('事件相应');
    	$("div").removeClass("sum-border");
	});
	
	$("#sum").click(function(event){
    if (event.target==this) {
        $(".sum").addClass("sum-border");
    }else{
    	$(".sum").removeClass("sum-border");
    }
	});
});*/



/**
 * 
 *	 input表单中获取具体的时间信息
 * 
 * 
 */


$(function(){
    var time = new Date();
    var staryday = ('0' + time.getDate()).slice(-2);
    var month = ('0' + (time.getMonth() + 1)).slice(-2);
    var stary = time.getFullYear() + '-' + month + '-' + staryday;
   	var end = 0;
    
    
    
    //获取当前月份最后一天
    var max = new Date(time.getFullYear(), (time.getMonth() + 1), 0).getDate();
    
    
    if (staryday < max) {	
    	endday = parseInt(staryday)  + 1;
    	if (endday <= 9) {
    		endday = '0' + endday;
    	}
    	end = time.getFullYear() + '-' + month + '-' + endday;
    } else {
    	if (month < 12) {
    		endday = '0' + 1;
    		end = time.getFullYear() + '-' + ('0' + (time.getMonth() + 1 + 1)) + '-' + endday;
    	} else {
    		var month = '0' + 1;			//新的一年 一月
    		endday = '0' + 1;
    		end = (time.getFullYear() + 1) + '-' + month + '-' + endday;
    		
    		console.log((time.getFullYear() + 1) + '-' + month + '-' + endday);
    	}
    	
    	
    	
    }
    console.log(stary);
    console.log(end);
    $('#stary-date').val(stary);
 	$('#end-date').val(end);
    
    
});


/**************************************************************导航栏的固定*********************************/





/*
 * 
 * 
 * 
 * 内容导航栏点击回到顶部
 * 
 * 
 * 
 * */

// 监听页面的滚动


var st = 0;
var timer = null //定时器
var back = document.querySelector(".back");

window.onscroll=function(){
    var topScroll = get_scrollTop_of_body();//滚动的距离,距离顶部的距离
    var bignav = document.getElementById("navbox");//获取到导航栏id
    
    st = document.documentElement.scrollTop || document.body.scrollTop;
    
    
    
    if(topScroll > 800){ //当滚动距离大于250px时执行下面的东西
        navbox.style.display = 'block';
        navbox.style.position = 'fixed';
        navbox.style.top = '0';
        navbox.style.zIndex = '9999';
    }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状״
        navbox.style.display = 'none';
        bignav.style.position = 'absolute';
    }
}




// 点击返回顶部 
back.onclick = function(){
	//window.scrollTo();   页面跳转到指定位置
	//window.scrollTo(0,0);
	
	timer = setInterval(function(){
		
		var now = st;
		//设置速度
		var speed = (0-now)/5 + 0.3;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		
		//回到顶部清除定时器
		if(st==0){
			clearInterval(timer);
		}
		
		document.documentElement.scrollTop = st+speed;
		document.body.scrollTop = st+speed;
		
		
	},30);
	
}









/*解决浏览器兼容问题*/
function get_scrollTop_of_body(){ 
    var scrollTop; 
    if(typeof window.pageYOffset != 'undefined'){//pageYOffset指的是滚动条顶部到网页顶部的距离 
        scrollTop = window.pageYOffset; 
    }else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat'){ 
    	scrollTop = document.documentElement.scrollTop; 
    }else if(typeof document.body != 'undefined'){ 
        scrollTop = document.body.scrollTop; 
    } 
    return scrollTop; 
} 




//.prcture 按钮点击事件
var index2 = 0;

$(".prcture img").click(function(){
	index2 = $(this).index2();
});

$(".prcture .btn-right").click(function(){
	
	index2++;
	
	if(index2 == 2){
		$(".prcture .btn-right").hide();
	}else{
		$(".prcture .btn-left").show();
	}
	$(".prcture .item").eq(index2).fadeIn().siblings().fadeOut();
});
$(".prcture .btn-left").click(function(){
	
	index2--;
	
	if(index2 == 0){
		$(".prcture .btn-left").hide();
	}else{
		$(".prcture .btn-right").show();
	}
	$(".prcture .item").eq(index2).fadeIn().siblings().fadeOut();
});



/*
 * 
 * 
	酒店星级介绍 弹窗
 * 
 * 
 * */


$(".hotel-information .show-btn").click(function(){
	$(".hotel-information .ster-lever").fadeToggle("fast");
	$(".hotel-information .close").fadeToggle("fast");
});


$(".hotel-information .close").click(function(){
	$(".hotel-information .close").css("display","none");
	$(".hotel-information .ster-lever").css("display","none");
});








