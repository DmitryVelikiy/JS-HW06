'use strict';
// Глобальная функция для возврата this
function getObj(){
    return this;
}
// Конструктор стран
function Country(title, capital, population, area){
    this.title = title;
    this.capital = capital;
    this.population = population;
    this.area = area;
    this.getCountry = getObj;
}
// Создание стран
const ukraine = new Country('Ukranine', 'Kyiv', 43000000, 600000 );
const poland = new Country('Poland',  'Warshawa', 37000000, 300000);
// свойства через цикл
function countryValue(country){
    const countryObj = country.getCountry();
    for (let key in countryObj){
        if (countryObj.hasOwnProperty(key) && typeof countryObj[key] !== "function") {
            console.log(`${key}: ${countryObj[key]}`);
        }
    }
    console.log('---------------------------------')
}

countryValue(ukraine);
countryValue(poland);