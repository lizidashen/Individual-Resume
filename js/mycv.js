// 背景随机显示图片
$(function() {
	// 背景图有四张，选择4以内随机正整数，作为随机页面索引
    var length = 4;
    // bg-img的第1个子元素为默认显示图片
    $(".bg-img li:nth-child(1)").show();
    // 创建定时调用函数函数setInterval()
    setInterval(function () {
        var randomBgIndex = Math.round(Math.random() * length);
        // siblings()的典型用法，即匹配元素的同胞
        $("#section1 .bg-img li").eq(randomBgIndex).addClass("show").siblings().removeClass("show");
    },5000);
});

// 宽度小于768时，菜单栏消失
$(window).resize(function (){
    var wid = $(window).width();
    if(wid>768){
        $(".nav-xs-ul").hide();
    }
});

$(function() {
	$(window).resize();
	
	$("h4,.nav b").css("color","#fff");
	// 各部分内容淡入效果
    $(".fades").addClass("fadesin");
    $(" h1.fade").addClass("fadesin1");
    $(" h3.fade").addClass("fadesin2");
    $(" span.fade").addClass("fadesin3");

	

	// 创建相关变量
    var _top;
    // 通过offset().top-30空出顶部状态栏
    var top1 = $("#section2").offset().top-30;
    var top2 = $("#section3").offset().top-30;
    var top3 = $("#section4").offset().top-30;
    var top4 = $("#section5").offset().top-30;
    var tops = [top1,top2,top3,top4];
    
    var min_height = document.documentElement.clientHeight /2;
    
    // 创建函数
    function showScroll() {
        $(window).scroll(function() {
            var s = $(window).scrollTop();
            s > min_height ? $('#top').fadeIn() : $('#top').fadeOut();
        });
    }
    
    // 单击向上箭头图片，触发函数，停止页面当前动画，然后滚动条跳到0的位置，页面移动速度是700
    $("#top").click(function () {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 700);
    });
    //  执行showScroll()函数
    showScroll();
    
    
    
    // 导航栏的每一个子元素附加点击事件。 该元素字体颜色变化
    $(".nav-ul li").bind("click", function () {
        var index = $(this).index();//获取序号
        $(".nav-ul li").eq(index).addClass("active").siblings().removeClass("active");
        $(".nav-xs-ul li").eq(index).addClass("active").siblings().removeClass("active");
    });
    
    // 首页“about me”和“about project”的点击事件。即触发导航栏相应位置的点击事件。
    $("#abMe").bind("click", function () {
       $(".nav-ul li:nth-child(1)").click();
    });
    $("#mypro").bind("click", function () {
        $(".nav-ul li:nth-child(3)").click();
    });
    
    
    // 导航栏的点击事件，先获取当前元素的索引值，则变量_top的值等于对应 section 元素与顶部的距离，运行moveTo()函数 
    $(".nav-ul li").bind("click", function () {
        var index = $(this).index();
        _top = $(".section").eq(index+1).offset().top; 
        moveTo();
    });
    
    //导航slideToggle
    $(".more-nav").bind("click", function () {
        $(".nav-ul.nav-xs-ul").stop().slideToggle(300);
    });
    
    // moveTo()函数，即页面跳到变量_top的值的位置，页面移动速度是500
    function moveTo(){
        $('html,body').animate({
            scrollTop: _top
        }, 500);
    }
    
    // 点击导航栏子元素时，以滑动方式隐藏 导航栏 
    $(".nav-xs-ul li").click(function () {
       $(".nav-xs-ul").slideUp(300)
    });


    // 由于首页没有导航栏，所以需要在页面滚动时，为导航栏添加 fixed 样式
    $(window).scroll(function () {
        // 设定变量  s 为滚动条垂直位置
        var s = $(window).scrollTop();
        // if 判断，当滚动条距离大于section2 时，则为导航条增加 fixed 样式
        s > top1 ? $('#nav-bar').addClass("fixed") : $('#nav-bar').removeClass("fixed");
        
        //导航跟随滚动响应
        if((s>top1)&&(s<top2)){
            $(".nav-ul li").eq(0).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(0).addClass("active").siblings().removeClass("active");
            $("#section2").addClass("active");
        }else if((s>top2)&&(s<top3)){
            $(".nav-ul li").eq(1).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(1).addClass("active").siblings().removeClass("active");
            $("#section3").addClass("active");
        }else if((s>top3)&&(s<top4)){
            $(".nav-ul li").eq(2).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(2).addClass("active").siblings().removeClass("active");
            $("#section4").addClass("active");
        }else if((s>top4)){
            $(".nav-ul li").eq(3).addClass("active").siblings().removeClass("active");
            $(".nav-xs-ul li").eq(3).addClass("active").siblings().removeClass("active");
            $("#section5").addClass("active");
        }
    });
    
    

});

