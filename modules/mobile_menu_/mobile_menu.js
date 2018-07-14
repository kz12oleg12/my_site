var menu = document.getElementById("menu");
var ul = document.getElementById("mobile_menu");
menu.onclick = function(){
	var width = document.documentElement.clientWidth;
	if(width < 1100){
		if(ul.style.display == 'block'){
			ul.style.display = 'none';
			ul.style.marginTop = '0';
		}
		else{
			ul.style.display = 'block';
			ul.style.marginTop = '40px';
		}
	}
}
