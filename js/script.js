'use script';


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	ios: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.ios() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	}
};

// Плавная прокрутка

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});


	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

if(iconMenu.classList.contains('_active')) {
	document.body.classList.remove('_lock');
	iconMenu.classList.remove('_active');
	menuBody.classList.remove('_active');
}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}


// Меню бургер 
	const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
};

// Фильтер

const filterAll = document.querySelectorAll('.portfolio__culomn');

document.querySelector('nav').addEventListener('click', event => {
	if (event.target.tagName !== 'LI')
		return false;
	let filterClass = event.target.dataset['filter'];

	filterAll.forEach(elem => {
		elem.classList.remove('hide');
		if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
			elem.classList.add('hide');
		}
	});
});

