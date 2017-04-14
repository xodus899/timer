$(document).ready(function(){
	

	$(".countDown").countdown({
		until: $.countdown.UTCDate( 2017, 4, 15, 17, 0, 0)

	});

	$(document).mousemove(function(e){
    	$("#mouseImage").css({left:e.pageX, top:e.pageY});
	});

});