var monthlyIncome = prompt("Ваш бюджет на месяц?");
var name = prompt("Название вашего магазина?");

var mainList = {};
var item1 = prompt('Какой тип товаров будем продавать?'),
	item2 = prompt('Какой тип товаров будем продавать?'),
	item3 = prompt('Какой тип товаров будем продавать?');
mainList = {
	budget: monthlyIncome,
	name: name,
	shopGoods: [item1, item2, item3],
	employers: {},
	open: "open"
};

alert(monthlyIncome/30);
