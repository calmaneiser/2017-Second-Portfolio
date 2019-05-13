$(document).ready(function(){
	
$(window).scroll(function(){
	if($(document).scrollTop() > 80){
		$('nav').addClass('newnav');
	}
	else{
		$('nav').removeClass('newnav');
		
	}
		
});	
})
