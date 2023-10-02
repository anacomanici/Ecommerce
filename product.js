// JavaScript Document
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

document.getElementById("main-product").src= "images/" + params.folder + "/" + params.product + ".jpg";

if ( params.folder === "men"){
	var element1 = document.getElementById("item1");
	var element2 = document.getElementById("item2");
	var element3 = document.getElementById("item3");
	var element4 = document.getElementById("item4");
	document.getElementById("item1").src = element1.src.replace("women", params.folder);
	document.getElementById("item2").src = element2.src.replace("women", params.folder);
	document.getElementById("item3").src = element3.src.replace("women", params.folder);
	document.getElementById("item4").src = element4.src.replace("women", params.folder);
}

//console.log(params);