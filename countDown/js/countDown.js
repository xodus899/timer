$(document).ready(function(){
	

	$(".countDown").countdown({
		until: $.countdown.UTCDate(-4, 2018, 5, 24, 17, 10, 10)

	});

	$(document).mousemove(function(e){
    	$("#mouseImage").css({left:e.pageX, top:e.pageY});
	});

});