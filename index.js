// если в поле инфоблока загружен мусор, то можно очистить их через консоль блаузера
// сначала надо проверить, где в массиве начинаются мусорные значение
// тут в примере они начинаются с 5го элемента, поэтому i = 5
// также надо проверить селекторы, в других полях могут отличаться

// очищает поле XML_ID
let arrXmlId = window.document.querySelectorAll('[id^="PROPERTY_VALUES_XML_"]');
for (let i = 5; i < arrXmlId.length; i++) {
	arrXmlId[i].value = '';
}

// очищает поле Значение
let arrVal = window.document.querySelectorAll('[id^="PROPERTY_VALUES_VALUE_"]');
for (let i = 5; i < arrVal.length; i++) {
	arrVal[i].value = '';
}
