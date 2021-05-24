$(document).ready(function(){
	$("#menubar").load("Pages/menu.html");
	
	var pageid = "home";
	var pageurl = "null";
	
	$("#menubar").one("click",function(){
		$(".menus").click(function(){
			pageid = $(this).attr("id");
			pageurl = "/Pages/HTMLs/" + pageid + ".html";
		})
	})
	
	$("#Hhid").click(function(){
		$("#Htost").fadeOut(500,function(){
			$("#hover").fadeOut(1000);
		});
	})

})
