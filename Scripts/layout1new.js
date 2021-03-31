$(document).ready(function(){
	
	if ($("#acceptCookiesButton").length > 0)
	{
		console.log('acceptCookiesButton found');
		
		$("#acceptCookiesButton").off().on('click', function(e) {
			e.preventDefault();
			
			$.ajax({
				url: '/?getfile=home_logic',
				type: 'post',
				data: 'acceptcookies=1'
			});
			
			return false;
		});
		
	}
	
	
});