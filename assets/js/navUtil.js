$(function(){
	if(document.location.href.match(/[^\/]+$/)[0] == "index.html"){
		$(".links li:contains('Accueil')").addClass("active");
	}
	else if(document.location.href.match(/[^\/]+$/)[0] == "profil.html"){
		$(".links li:contains('Profil')").addClass("active");
	}
	else if(document.location.href.match(/[^\/]+$/)[0] == "projets.html"){
		$(".links li:contains('Projets')").addClass("active");
	}
});