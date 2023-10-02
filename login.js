// JavaScript Document

const blur = document.querySelector(".show");

function openLogin() {
  document.getElementById("Login").style.display = "block";
  blur.setAttribute("class", "blur");	
}
function closeLogin() {
  document.getElementById("Login").style.display = "none";
  blur.setAttribute("class", "show");
}

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('Login');
    if (container != null && !container.contains(e.target)) {
        container.style.display = 'none';
		blur.setAttribute("class", "show");
    }
});

// Toggle Function
$('.toggle').click(function(){
  // Switches the Icon
	var currentClass = $(this).children('i').attr('class');
	
	if(currentClass === "fa-solid fa-pen tooltip"){
		$(this).children('i').removeClass('fa-solid fa-pen tooltip');
		$(this).children('i').addClass('fa-solid fa-key tooltip');
	}else{
		$(this).children('i').removeClass('fa-solid fa-key tooltip');
		$(this).children('i').addClass('fa-solid fa-pen tooltip');
	}
  // Switches the forms  
  $('.form-login').animate({
    height: "toggle",
    'padding-top': 'toggle',
    'padding-bottom': 'toggle',
    opacity: "toggle"
  }, "slow");
	$('.form-create-account').animate({
    height: "toggle",
    'padding-top': 'toggle',
    'padding-bottom': 'toggle',
    opacity: "toggle"
  }, "slow");
});


