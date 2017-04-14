$(document).ready(function(){
	

	$(".countDown").countdown({
		until: $.countdown.UTCDate(-4, 2018, 2, 24, 18, 0, 0)

	});

	$(document).mousemove(function(e){
    	$("#mouseImage").css({left:e.pageX, top:e.pageY});
	});

});