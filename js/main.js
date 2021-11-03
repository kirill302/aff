const productsTabLinks = document.querySelectorAll('.products__tab-link')
const productsItems = document.querySelectorAll('.products__tab-item')
const servicesTabLinks = document.querySelectorAll('.services__tab-link')
const servicesTabItems = document.querySelectorAll('.services__tab-item')
let tabLinkActive, tabItemActive, tabItemId, tabItem

function Tab(item, tabLinkActive, tabItemActive) {
	tabLinkActive.classList.remove('_active')
	item.classList.add('_active')
	tabItemId = item.getAttribute('href')
	tabItem = document.querySelector(tabItemId)
	tabItemActive.classList.remove('_active')
	tabItem.classList.add('_active')
}
productsTabLinks.forEach((item) => {
	item.addEventListener('click', (event) => {
		if (productsMenu.classList.contains('_active')) {
			productsMenu.classList.remove('_active')
		}
		event.preventDefault()
		if (!item.classList.contains('_active')) {
			tabLinkActive = document.querySelector('.products__tab-link._active')
			tabItemActive = document.querySelector('.products__tab-item._active')
			Tab(item, tabLinkActive, tabItemActive)
		}
	})
})
servicesTabLinks.forEach((item) => {
	item.addEventListener('click', (event) => {
		if (servicesMenu.classList.contains('_active')) {
			servicesMenu.classList.remove('_active')
		}
		event.preventDefault()
		if (!item.classList.contains('_active')) {
			tabLinkActive = document.querySelector('.services__tab-link._active')
			tabItemActive = document.querySelector('.services__tab-item._active')
			Tab(item, tabLinkActive, tabItemActive)
		}
	})
})




window.addEventListener('load', () => {
	const partnersSlider = document.querySelector('.swiper-container')
	let partnersSwiper = new Swiper(partnersSlider, {
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		loop: true,
		autoplay: {
			delay: 2000
		},
		effect: 'fade'
	})
})

const map = document.querySelector('#map')
window.onload = function () {
	if (map) {
		ymaps.ready(init)
	}
}

function init() {
	const map = new ymaps.Map('map', {
			center: [59.92887513646166, 30.310382718411688],
			zoom: 17
		}),

		mapMark = new ymaps.Placemark([59.92860506926011, 30.313759802717247], {
			hintContent: 'ИМСАТ'
		}, {
			iconImageHref: 'images/icon/mark.svg',
			iconImageSize: [35, 50],
			iconImageOffset: [-15, -50]
		});
	map.geoObjects
		.add(mapMark)
}

const headerTabUnits = document.querySelectorAll('.header__tab-unit')
headerTabUnits.forEach((item) => {
	item.addEventListener('mouseover', () => {
		for (headerTabUnit of headerTabUnits) {
			if (headerTabUnit != item) {
				headerTabUnit.classList.remove('_active')
			} else {
				item.classList.add('_active')
			}
		}

	})
})

const menuSubtitles = document.querySelectorAll('.header__tab-name')
const menuSublists = document.querySelectorAll('.header__subtab-wrap')
menuSubtitles.forEach((item, index) => {
	item.addEventListener('click', () => {
		if (item.classList.contains('_active')) {
			item.classList.remove('_active')
			menuSublists[index].removeAttribute('style')
		} else {
			item.classList.add('_active')
			menuSublists[index].style.height = menuSublists[index].scrollHeight + 'px'
		}
	})
})
const menuListBtns = document.querySelectorAll('.header__submenu-btn')
const menuLists = document.querySelectorAll('.header__submenu-dropdown')
let menuListHeight
menuListBtns.forEach((item, index) => {
	item.addEventListener('click', () => {
		menuListHeight = menuLists[index].scrollHeight + 'px'
		if (item.classList.contains('_active')) {
			item.classList.remove('_active')
			menuLists[index].style.height = menuListHeight
			setTimeout(() => {
				menuLists[index].removeAttribute('style')
			}, 0)
		} else {
			item.classList.add('_active')
			menuLists[index].style.height = menuListHeight
			setTimeout(() => {
				menuLists[index].style.height = 'auto'
			}, 300)
		}
	})
})
const menuBtn = document.querySelector('.header__menu-btn')
const menu = document.querySelector('.header__menu-container')
const menuClose = document.querySelector('.header__close')
const menuOverlay = document.querySelector('.header__menu-overlay')
const body = document.querySelector('body')
menuBtn.addEventListener('click', () => {
	body.classList.add('no-scroll')
	menu.classList.add('_open')
	setTimeout(() => {
		menu.classList.add('_show')
	}, 0)
})
menu.addEventListener('click', (event) => {
	if (event.target == menuClose || event.target == menuOverlay) {
		body.classList.remove('no-scroll')
		menu.classList.remove('_show')
		setTimeout(() => {
			menu.classList.remove('_open')
		}, 300)
	}
})
const footerMenuBtns = document.querySelectorAll('.footer__submenu-btn')
const footerMenuLists = document.querySelectorAll('.footer__submenu-list')
footerMenuBtns.forEach((item, index) => {
	item.addEventListener('click', () => {
		if (item.classList.contains('_active')) {
			item.classList.remove('_active')
			footerMenuLists[index].removeAttribute('style')
		} else {
			item.classList.add('_active')
			footerMenuLists[index].style.height = footerMenuLists[index].scrollHeight + 'px'
		}
	})
})
const productsMenu = document.querySelector('.products__tab-list')
const productsMenuBtn = document.querySelector('.products__menu-btn')
if (productsMenuBtn) {
	productsMenuBtn.addEventListener('click', () => {
		productsMenuBtn.classList.toggle('_active')
		productsMenu.classList.toggle('_active')
	})
}
const servicesMenu = document.querySelector('.services__tab-list')
const servicesMenuBtn = document.querySelector('.services__menu-btn')
if (servicesMenuBtn) {
	servicesMenuBtn.addEventListener('click', () => {
		servicesMenuBtn.classList.toggle('_active')
		servicesMenu.classList.toggle('_active')
	})
}

const educationBtns = document.querySelectorAll('.education-page__dropdown-btn')
const educationLists = document.querySelectorAll('.education-page__dropdown-list')

educationBtns.forEach((item, index) => {
	item.addEventListener('click', () => {
		if (item.classList.contains('_active')) {
			item.classList.remove('_active')
			educationLists[index].style.height = educationLists[index].scrollHeight + 'px'
			setTimeout(() => {
				educationLists[index].removeAttribute('style')
			}, 300)
		} else {
			item.classList.add('_active')
			educationLists[index].style.height = educationLists[index].scrollHeight + 'px'
			setTimeout(() => {
				educationLists[index].style.height = 'auto'
			}, 300)
		}
	})
})
const teachBtns = document.querySelectorAll('.education-page__teacher-btn')
const teachLists = document.querySelectorAll('.education-page__teacher-val')
teachBtns.forEach((item, index) => {
	item.addEventListener('click', () => {
		if (item.classList.contains('_active')) {
			item.classList.remove('_active')
			teachLists[index].removeAttribute('style')
		} else {
			item.classList.toggle('_active')
			teachLists[index].style.height = teachLists[index].scrollHeight + 'px'
		}
	})
})

const time = 3000

function outNum(item, num, step) {
	let n = 0
	let t = Math.round(time / (num / step))
	let interval = setInterval(() => {
		n = n + step
		if (n > num) {
			item.textContent = num
			clearInterval(interval)
		} else {
			item.textContent = n
		}
	}, t)
}

function counter() {
	counts.forEach((item, index) => {
		let num = item.getAttribute('data-count')
		let step
		if (num <= 100) {
			step = 1
		} else if (num <= 1000) {
			step = Math.round(Math.random() * 10)
		} else if (num > 1000) {
			step = Math.round(Math.random() * 100)
		}
		outNum(item, num, step)
	})
}

function countGo() {
	const aboutDarkTop = aboutDark.offsetTop
	let windowH = window.innerHeight
	let aboutDarkH = aboutDark.scrollHeight
	let windowTop = window.pageYOffset
	let aboutDarkStartTop = aboutDarkTop - windowH + aboutDarkH - 70
	let aboutDarkStarBottom = aboutDarkTop + aboutDarkH - 70
	if (windowTop >= aboutDarkStartTop && windowTop < aboutDarkStarBottom) {
		counter()
		window.removeEventListener('scroll', countGo)
	}
}
let counts = document.querySelectorAll('.count')
const aboutDark = document.querySelector('.about__dark')
if (aboutDark) {
	window.addEventListener('scroll', countGo)
	countGo()
}
// product slider
const productSlider = new Swiper('.product-slider', {
	navigation: {
		nextEl: '.product-slider-next',
		prevEl: '.product-slider-prev',
	},
});

const fullScreenImages = Array.from(document.querySelectorAll('[data-fullscreen]'));

fullScreenImages.forEach(img => {
	const image = img.cloneNode(true)
	const fullImgWrapper = document.createElement('div');
	fullImgWrapper.classList.add('fullscreen-img');

	const fullImgContent = document.createElement('div');
	fullImgContent.classList.add('fullscreen-img__content');

	fullImgContent.append(image)

	fullImgWrapper.append(fullImgContent);

	console.log(fullImgWrapper);

	function addImg() {
		body.prepend(fullImgWrapper);
	}

	function removeImg() {
		fullImgWrapper.remove();
	}
	img.addEventListener('click', (e) => {
		addImg()
	});
	fullImgWrapper.addEventListener('click', (e) => {
		if (e.target !== image) {
			removeImg()

		}
	});

	document.addEventListener('keydown', (e) => {
		if (event.key == 'Escape') {
			removeImg()
		}
	});


});

// goTopBtn 
(function () {
	// создаем кнопку и добавляем ее в начало body
	const body = document.body;
	const buttonTop = document.createElement('a');
	buttonTop.classList.add('back_to_top');
	buttonTop.setAttribute('title', 'Наверх');
	buttonTop.innerHTML = '<span>↑</span>';
	body.prepend(buttonTop)

	// функционал кнопки
	function trackScroll() {
		let scrolled = window.pageYOffset;
		let coords = document.documentElement.clientHeight;
		if (scrolled > coords) {
			goTopBtn.classList.add('back_to_top-show');
		}
		if (scrolled < coords) {
			goTopBtn.classList.remove('back_to_top-show');
		}
	}

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -50);
			setTimeout(backToTop, 0);
		}
	}
	let goTopBtn = document.querySelector('.back_to_top');
	
	window.addEventListener('scroll', trackScroll);
	goTopBtn.addEventListener('click', backToTop);
})();

/*FORM*/
$(document).ready(function () {

	//E-mail Ajax Send
	$(".feedback__form").submit(function () { //Change
		var page = window.location.href;
		$('.page-link').val(page);
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "https://imsat.spb.ru/mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$('.overflow').fadeIn();
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
$(document).mouseup(function (e) { // событие клика по веб-документу
	var div = $(".thanks"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
		&&
		div.has(e.target).length === 0) { // и не по его дочерним элементам
		$('.overflow').fadeOut(); // скрываем его
	}
});