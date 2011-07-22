/*  Your JavaScript for Resource  */

$(document).ready(function(){

	$('.play a').click(function(){
		$('#disk').addClass('active');
	});
	
	setTimeout("stop()",30000);

});

function stop(){
	$('#disk').removeClass('active');
	$('#disk').css({
		'-webkit-transform' : 'rotate(3600deg)',
    	'-moz-transform' : 'rotate(3600deg)',
    	'-o-transform' : 'rotate(3600deg)'
	});
}