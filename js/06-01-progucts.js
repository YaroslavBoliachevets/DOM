

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

{
	/*
  <article class="product">
	<h2 class="product__name">Название</h2>
	<p class="product__descr">Описание</p>
	<p product__pridct>Цена: 1111 кредитов</p>
  </article>
  */
  }

const productEl = document.createElement('article');
	productEl.classList.add('product'); 

const productNameEl = document.createElement('h2');
  	productNameEl.classList.add('product__name');
	productNameEl.textContent = 'Название';

const productDescrEl = document.createElement('p');
	productDescrEl.classList.add('product__descr');
	productDescrEl.textContent = 'Описание';

const productPriceEl = document.createElement('p'); 
	productPriceEl.classList.add('product__pridct');
	productPriceEl.textContent = 'Цена';

productEl.append(productNameEl, productNameEl, productDescrEl,productPriceEl);	

