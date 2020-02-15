'use strict'
let headMenu = document.getElementById('head_menu');
let click_menu = document.querySelectorAll('.click_menu');
let child_menu = document.querySelectorAll('.child_menu');
let imgMenuBurger = document.querySelector('.img_menu_burger');
let closeBurger = document.querySelector('.close_burger');
let mobileBurger = document.getElementById('mobile_burger');
let breadcrumbs = document.getElementById('breadcrumbs');
let fullfon = document.querySelector('.fullfon');
let blockforma = document.querySelector('.blockforma');
let button_form = document.querySelectorAll('#callback, .prduct_button, #callback2');
let closeForm = document.getElementById('close_form');




// Бургер меню
imgMenuBurger.addEventListener('click', () => {
	mobileBurger.style.display = 'grid'
})
closeBurger.addEventListener('click', () => {
	mobileBurger.style.display = 'none'
})

//Forma show 
button_form.forEach(item => item.addEventListener('click', (e) => {
	e.preventDefault();
	blockforma.classList.remove('show-form');
	fullfon.classList.add('fullopen');
	if(document.documentElement.clientWidth > 750) {
		blockforma.style.left = document.documentElement.clientWidth/2 - blockforma.offsetWidth/2 +'px';
	  blockforma.style.top = document.documentElement.clientHeight/2 - blockforma.offsetHeight/2 +'px';
	}
	
}));

//Close click black fon form 
fullfon.addEventListener('click', (e) => {
	e.target.classList.remove('fullopen');
	blockforma.classList.add('show-form');
});
closeForm.addEventListener('click', (e) => {
	fullfon.classList.remove('fullopen');
	blockforma.classList.add('show-form');
});