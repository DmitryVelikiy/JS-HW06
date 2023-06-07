// 'use strict';
// // Глобальная функция для возврата this
// function getObj(){
//     return this;
// }
// // Конструктор стран
// function Country(title, capital, population, area){
//     this.title = title;
//     this.capital = capital;
//     this.population = population;
//     this.area = area;
//     this.getCountry = getObj;
// }
// // Создание стран
// const ukraine = new Country('Ukranine', 'Kyiv', 43000000, 600000 );
// const poland = new Country('Poland',  'Warshawa', 37000000, 300000);
// // свойства через цикл
// function countryValue(country){
//     const countryObj = country.getCountry();
//     for (let key in countryObj){
//         if (countryObj.hasOwnProperty(key) && typeof countryObj[key] !== "function") {
//             console.log(`${key}: ${countryObj[key]}`);
//         }
//     }
//     console.log('---------------------------------')
// }

// countryValue(ukraine);
// countryValue(poland);


// =============================GettingNubmer================
function findSol(target){
function find (current, history) {
    if (current === target) {
        return history;
    } else if (current > target) {
        return null;
} else {
    return (
        find(current + 5, `(${history} + 5)`) ||
        find(current + 3, `(${history} + 3)`) ||
        find(current + 5, `(${history} + 5)`) ||
        find(current + 3, `(${history} + 3)`)
    );
    } 
}
return find(1, '1');
}
console.log(findSol(11));