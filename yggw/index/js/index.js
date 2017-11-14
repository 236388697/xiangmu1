window.onload=function(){
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
	
$(".uls").each(function(indexs){
	console.log(indexs);
	$(".uls").eq(indexs).mouseenter(function(){
		$(".sub-class") .css("display","none");
		$(".sub-class").eq(indexs).css("display","block");
       
   	 
   })
})
  
}