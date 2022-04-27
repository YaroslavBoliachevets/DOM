//  Типы событий keypress, keydown, keyup
//  Ограничения кецпресс 
//  key//code 


const refs = { 
	output: document.querySelector('.js-output'),
	clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keydown', onKeypress);

function onKeypress(event) {
	console.log('', event);
	
}

function onClearOutput() {
	
}