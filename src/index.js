/**
 * Принимает 4 аргумента, в первых двух мы должны найти минимальное число,
 * во третьем и четвертом максимальное и умножить эти два числа
 * @param {number} minFirst
 * @param {number} minSecond
 * @param {number} maxFirst
 * @param {number} maxSecond
 * @returns {number}
 */
let minFirst =2;
let minSecond =3;
let maxFirst =4;
let maxSecond =5;

export const minMaxMultiply = (minFirst, minSecond, maxFirst, maxSecond) => {
    console.log(Math.min(minFirst,minSecond) * Math.max(maxFirst,maxSecond))}
/**
 * Функция принимает один числовой аргумент, это радиус круга. Функция должна
 * вернуть площадь круга, формулу найдите в интернете, если не помните
 * и число пи используйте встроенное в js
 * @param {number} radius
 * @returns {number}
 */
let radius = 4;
export const getSquareOfCircle = (radius) => {console.log(Math.PI*Math.pow(radius, 2))};

/**
 * Функция принимает число и точность к которой нужно округлить
 * Примеры можно смотреть в checks.js
 * Нужно использовать Math.round
 * @param {number} number
 * @param {number} accuracy
 * @returns {number}
 */
let numberN = 3.2345
let accuracyN = 3
export const getFixedValue = (numberN, accuracyN) => {
    console.log(Math.round(parseFloat(numberN) * 1000) / 1000)};
//export const getFixedValue = (numberN, accuracyN) => {if (!Math.round10) {
  //  Math.round10 = function(numberN, accuracyN) {
      //  console.log(Math.round10 (numberN,accuracyN))}
   // };

//}

//if (!Math.round10) { Math.round10 = function(value, exp) { return decimalAdjust('round', value, exp); }
/**
 * Если целая часть числа четная, то срабатывает Math.floor для этого числа
 * если нечетное, то Math.ceil
 * @param {number} number
 * @returns {number}
 */
let numberX = 6.235
export const getFlooroCeil = (numberX) => {
    if (Math.trunc(numberX)%2 === 0) {
        console.log(Math.floor(numberX) )
    }
    else {
        console.log(Math.ceil(numberX))

    }
};

/**
 * Мы передаем два числа, от какого и до какого числа и функция должна
 * выдать ЦЕЛОЕ число в этом диапазоне. Постарайтесь подумать, не гуглите сразу
 * Сложное задание. Тест 30тыс раз попробует проверить ваш рандом
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
let fromNumber =2
let toNumber =5
export const randomizer = (fromNumber, toNumber) => {
    console.log(Math.floor(Math.random()*(toNumber-fromNumber)+fromNumber))};
