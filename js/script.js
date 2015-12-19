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
			
			//function for tracking scroll up and scroll down events
			var lastScrollTop = 10;
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

			  //fixed bottom code start
			  var scrollTop = $(window).scrollTop();
    		var footerHeight=$('#footer').height();
    		// var footerPosition =Math.round($('#footer').offset().top);
    		// console.log('$(document).height() ' , $(document).height());
    		// console.log('$(window).height()+scrollTop' , $(window).height()+scrollTop);
    		// console.log('scrollTop' , scrollTop);
    		var space = 1120+$('#bottom-fixed-strip').height()-footerHeight-scrollTop-$(window).height();
    		//not using document height beacuseit changes after changing position to relative
    		if(space<0){
    			$('#bottom-fixed-strip').stop().css({'position':'relative'});
    		}
    		else{
    			$('#bottom-fixed-strip').stop().css({'position':'fixed'});
    		}
			});
			//calling scroll end event i.e. reapperence of nav bar
	    $(window).scrollEnd(function(){
				$('#header-bar').fadeIn();
			}, 200);// I am using .2 seconds for reapperence It can be

			// Random image generator
			//comment out following function to randomise image
			// var randomImageFun=function(){
				var imgStartPath="img/";
				var randomNumber=Math.floor((Math.random() * 10) + 1);
				var imageRandomPath=imgStartPath+randomNumber+'.jpg';
				// console.log('imageRandomPath:' , imageRandomPath);
				$("#random-image").attr("src",imageRandomPath);
			// };
			// setInterval(randomImageFun,2000);

			
