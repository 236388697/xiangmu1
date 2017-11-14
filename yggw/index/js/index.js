var timer = setInterval(autoPlay , 2000);
	var index = 0;
	function autoPlay(){
		index++;
		if( index == 5 ){
			index = 0;
		}
		$(".wrapper ol").find("li").eq(index)
				  .addClass("current")
				  .siblings()
				  .removeClass("current");
		$(".wrapper ul").find("li").eq(index)
				  .fadeIn(1000)
				  .siblings()
				  .fadeOut(1000);
	
	}