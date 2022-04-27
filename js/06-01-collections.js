// Создаем коллекцию элементов

// const colorPickerOptions = [
// 	{ label: 'red', color: '#F44336' },
// 	{ label: 'green', color: '#4CAF50' },
// 	{ label: 'blue', color: '#2196F3' },
// 	{ label: 'grey', color: '#607D8B' },
// 	{ label: 'pink', color: '#E91E63' },
// 	{ label: 'indigo', color: '#3F51B5' },
//   ];

// const allBtn = [];

// for (element of colorPickerOptions) { 

// 	const btnEl = document.createElement('button');
// 	btnEl.type = 'button'; 
// 	btnEl.textContent = element.label;
// 	btnEl.style.backgroundColor = element.color; 

// 	allBtn.push(btnEl);

// }

// console.log('', allBtn);
// document.body.append(...allBtn); 
// Это был олдскул=============================================================
// щяс будет новый ========

// const allBtn =[];

// const btnNewEl = colorPickerOptions.map(options => {
// 	const btnEl = document.createElement('button'); 
// 	btnEl.type = 'button';
// 	btnEl.textContent = options.label;
// 	btnEl.style.backgroundColor = options.color; 
// 	return btnEl;
// })

// console.log('', btnNewEl);
// document.body.append(...btnNewEl); 
// ===========================================================================

// Функция для создания разметки колорпикера =================================

// const makeColorPickerOptions = (options) => {
// 	return options.map(option => {
// 		const btnEl = document.createElement('button'); 
// 		btnEl.type = 'button';
// 		btnEl.textContent = option.label;
// 		btnEl.style.backgroundColor = option.color; 

// 		return btnEl;
// 	});
// }

// const elements = makeColorPickerOptions(colorPickerOptions);
// console.log('', elements);

// =============================================================