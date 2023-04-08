// если в поле маржа или наличие загружен мусор, то можно очистить их через консоль блаузера
// только надо проверить, где в массиве начинаются мусорные значение
// тут в примере они начинаются с 5го элемента, поэтому i = 5
// также надо првоерить селекторы, в других полях могут отличаться

// очищает поле XML_ID
let arr1 = window.document.querySelectorAll('[id^="PROPERTY_VALUES_XML_"]');
for (let i = 5; i < arr1.length; i++) {
	arr1[i].value = '';
}

// очищает поле Значение
let arr = window.document.querySelectorAll('[id^="PROPERTY_VALUES_VALUE_"]');
for (let i = 5; i < arr.length; i++) {
	arr[i].value = '';
}
