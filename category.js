// JavaScript Document
function myFunction() {
  	var anchor = event.currentTarget;
  	var productImageUrl = event.currentTarget.src;
	var productImageUrlSegments = productImageUrl.split("/");
	var productUrl = "product.html?product=" + productImageUrlSegments[productImageUrlSegments.length-1].replace(".jpg", "") + "&folder=" + productImageUrlSegments[productImageUrlSegments.length-2];
	window.location.href = productUrl;
}
