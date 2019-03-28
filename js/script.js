$(document).ready(function(){

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if($(window).scrollTop() > $(window).height()) {
			if(!flag){
				$(".navbar").css({"background-color": " #00a2e8"});
				flag = true;
			}
		}else{
			if(flag){
				$(".navbar").css({"background-color": "rgba(33, 139, 192, 0.5)"});
				flag = false;
			}
		}


	});

});