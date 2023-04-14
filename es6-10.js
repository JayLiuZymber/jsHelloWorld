/* 
[ES6-重點紀錄] Symbol 資料類型 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10195993
 */
let s = Symbol();

console.log(typeof s);   // "symbol"

// 定義常數內容值
const ERROR = Symbol();
const NOTICE = Symbol();
const WARNING = Symbol();
const CRITICAL = Symbol();


// 獨一無二不會有任何相同的值，儘管接受的參數是相同的
let s1 = Symbol('new');
let s2 = Symbol('new');

console.log(s1 === s2) // false
// 可轉成完全字串
console.log(s1.toString()); // 'Symbol(new)'

// 可作為物件中的屬性名
let obj = {
    [s1]: 'Hello!'
};
console.log(obj); // { Symbol(new): "Hello!" }


let s11 = Symbol('s1');
let s21 = Symbol('s2');
const obj1 = {
    [s11]: 'Hello',
    [s21]: 'World'
};

for (let key in obj) {
    console.log(key); // 無輸出
}

let propertyNames = Object.getOwnPropertyNames(obj);
console.log(propertyNames); // []

let propertySymbols = Object.getOwnPropertySymbols(obj);
console.log(propertySymbols); // [ Symbol(s1), Symbol(s2) ]


let s12 = Symbol.for('new');
let s22 = Symbol.for('new');

console.log( s12 === s22 ) // true
console.log( Symbol.keyFor(s12) ) // 'new'

// 由於 Symbol() 是沒有登記機制的，所以使用 .keyFor() 會無效
let s32 = Symbol('new');
console.log( Symbol.keyFor(s32) ) // undefined
