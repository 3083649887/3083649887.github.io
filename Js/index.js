$(document).ready(function(){
	$("#menubar").load("Pages/menu.html");
	
	var pageid = "home"
	var pageurl = "null"
	
	$("#menubar").on("click",function(){
		$(".menus").click(function(){
			pageid = $(this).attr("id");
			pageurl = "/Pages/HTMLs/" + pageid + ".html";
			$("#menubar").off("click");
		})
	})


})
