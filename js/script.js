$(function () {


	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
			}
		});
	});

(function (global) {

	var ld = {};

	var HomeHtml = "snippets/home-snippet.html";

	var insertHtml = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	var showLoading = function (selector) {
		var html = "<div class='text-center'>";
		html += "<img src='images/ajax-loader.gif'></div>";
		insertHtml(selector, html);
	};

	document.addEventListener("DOMContentLoaded", function (event) {


		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			HomeHtml,
			function (responseText) {
				document.querySelector("#main-content")
				.innerHTML = responseText;
			},
			false);
		});


	global.$ld = ld;


})(window);

window.addEventListener ("scroll",function(){

if (window.pageYOffset>200) {
document.getElementById ("tornasu").style.display= "block";
}

else if (window.pageYOffset<200) {
document.getElementById ("tornasu").style.display= "none";
}

val[0].innerHTML= "PageYOffset = "+window.pageYOffset
},!1);

