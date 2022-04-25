// const navItemEl = document.querySelectorAll(".nav__item");
// console.log(navItemEl);

// const socialRef = document.querySelectorAll('.social__link'); 
// console.log('', socialRef);

// const companyClientsEl = document.querySelectorAll('.clients__link');
// console.log(companyClientsEl);

// const footerSocialEl = document.querySelector('.footer__social__link'); 
// console.log('', footerSocialEl);


// const btnEl = document.querySelector('.footer__actions .button'); 
// console.log('', btnEl);


// ========================== Property ==============================

// const imgEl = document.querySelector('.about__item .img');

// console.log('imgEl', imgEl);
// console.log('1', imgEl.alt);
// imgEl.alt = 'hello';
// console.log('2', imgEl.alt);
// console.log('imgEl', imgEl);

// const headerImgEl = document.querySelector('.team__picture'); 
// console.log('', headerImgEl);

// const mgcBtnEl = document.querySelector('.social__link');
// console.log('mgcBtnEl', mgcBtnEl);


// mgcBtnEl.addEventListener('click', () => {
// 	headerImgEl.src = "./images/mobile-img/team-card-2mob-1x.jpg"

// 	headerImgEl.alt ='New description'
// 	console.log('hii', headerImgEl);
	
// });





// =======text content

// const titleEl =document.querySelector('.team__title');

// console.log('', titleEl.textContent);

// titleEl.textContent = 'loool';

// console.log('', titleEl.textContent);





// ========= Атрибуты get sest remove has 

// const imgEl = document.querySelector('.about__item .img'); 

// console.log('imgEl', imgEl);

// console.log('alt', imgEl.getAttribute('alt'));

// console.log('src ', imgEl.getAttribute('src'));

// console.log('width', imgEl.getAttribute('width'));

// console.log('width', imgEl.width);

// console.log('src ', imgEl.src);

// imgEl.removeAttribute('src'); 
// console.log('after remove ----', imgEl.src);

// console.log('has src:', imgEl.hasAttribute('src'));
// console.log('has alt:', imgEl.hasAttribute('alt'));

// imgEl.src = '////ynnnn';
// console.log('', imgEl.src);



// data-actions

// const actions = document.querySelectorAll('.js-link'); 

// console.log('actions', actions);

// console.log('', actions[1].dataset); 

// for (const action of actions) { 
// 	console.log('', action.dataset.action);
	
// }



// ================================Работа с классами ================================


// classList работаю только с классами, ид через set Arribute

// const currentEl = document.querySelectorAll('.current');
// console.log('', currentEl);



// const mgcBtnEl = document.querySelectorAll('.social__link');
// console.log('mgcBtnEl', mgcBtnEl);

// mgcBtnEl[0].addEventListener('click', () => {
// 	currentEl[0].classList.toggle('super-cool');

	
// });


// const changedColorEl = document.querySelector('.team__title'); 
// console.log('', changedColorEl);

// mgcBtnEl[2].addEventListener('click', () => {
// 	changedColorEl.classList.toggle('super-cool');
// });

// changedColorEl.classList.add('super-cool'); 
// changedColorEl.classList.remove('team__title');
// changedColorEl.classList.replace('super-cool', 'team__title')

// console.log('', changedColorEl.classList.contains('super-cool'));


// const href = './index.html';

// const findEl = document.querySelector(`.social__link[href="${href}"]`);

// console.log('this', findEl);




// ======================================Навигация по DOM===================================


// const ourFeatureEl = document.querySelector('.feature__list'); 
// console.log('', ourFeatureEl);

// const firstEl = ourFeatureEl.children;

// console.log('', firstEl);


// const doc = document.querySelector('.qwe').children[1].children;
// console.log('', doc);



// ===================================  Создание элементов =========================






