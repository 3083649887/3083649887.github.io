$(document).ready(function(){
	$("#menubar").one("click",function(){
		$(".menus").click(function(){
			$(".menus").css("background-color","");
			$(this).css("background-color","red");
		})
	})
})