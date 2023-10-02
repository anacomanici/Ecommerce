// JavaScript Document


//Menus Menu
	var sideMenu = document.getElementById("primary-nav");
	function openMenu() {
		sideMenu.style.left = "0px";	
	}
	function closeMenu() {
		sideMenu.style.left = "-400px";
	}

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('primary-nav');
    if (container != null && !container.contains(e.target)) {
        sideMenu.style.left = "-400px";
    }
});



// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};



//Filters Menu
	var sideFilter = document.getElementById("show-filters");
	function openfilters() {
		sideFilter.style.right = "0px";	
	}
	function closefilters() {
		sideFilter.style.right = "-400px";
	}

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('show-filters');
    if (container != null && !container.contains(e.target)) {
        sideFilter.style.right = "-400px";
    }
});



