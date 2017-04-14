$(document).ready(function(){
	

	$(".countDown").countdown({
		// until: $.countdown.UTCDate(-4, 2017, 6, 15, 17, 0, 0)
		until: $.countdown.UTCDate(+10, 2018,  7 - 1, 23)

	});

	$(document).mousemove(function(e){
    	$("#mouseImage").css({left:e.pageX, top:e.pageY});
	});

});