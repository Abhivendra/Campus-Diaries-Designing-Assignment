			//Function for checking scroll end events
			$.fn.scrollEnd = function(callback, timeout) {          
			  $(this).scroll(function(){
			    var $this = $(this);
			    if ($this.data('scrollTimeout')) {
			      clearTimeout($this.data('scrollTimeout'));
			    }
			    $this.data('scrollTimeout', setTimeout(callback,timeout));
			  });
			};
			//calling scroll end event i.e. reapperence of nav bar
			$(window).scrollEnd(function(){
			  $('#header-bar').fadeIn();
			}, 400);// I am using .4 seconds for reapperence It can be 

			//function for tracking scroll up and scroll down events
			var lastScrollTop = 0;
			$(window).scroll(function(event){
			   var stopingPoint = $(this).scrollTop();
			   if (stopingPoint > lastScrollTop){
			       // downscroll code
			       // do nothing. Because I know nothing:P I am John Snow.
			   }
			   else {
			      // upscroll code
			      $('#header-bar').fadeOut();
			   }
			   lastScrollTop = stopingPoint;
			});

			// Random image generator
			//comment out following function to randomise image only once
			// var randomImageFun=function(){
				var imgStartPath="http://dkzstslcvgwbc.cloudfront.net/sites/all/themes/campus_diaries/images/front/";
				var randomNumber=Math.floor((Math.random() * 10) + 1);
				var imageRandomPath=imgStartPath+randomNumber+'.jpg';
				console.log('imageRandomPath:' , imageRandomPath);
				$("#random-image").attr("src",imageRandomPath);
			// };
			// setInterval(randomImageFun,2000);

			//fixed bottom code start
			$(window).scroll(function(event){
				var scrollTop = $(window).scrollTop();
    		var footerHeight=$('#footer').height();
    		// var footerPosition =Math.round($('#footer').offset().top);
    		// console.log('$(document).height() ' , $(document).height()-footerHeight);
    		// console.log('$(window).height()' , scrollTop+$(window).height());
    		var space = $(document).height()-footerHeight-scrollTop-$(window).height();
    		if(space<0){
    			$('#bottom-fixed-strip').stop().css({'position':'relative'});
    		}
    		else{
    			$('#bottom-fixed-strip').stop().css({'position':'fixed'});
    		}
			});