/* 
[ES6-重點紀錄] 箭頭函數 Arrow Function - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10195669
 */
// 一般函數寫法，輸入半徑求圓面積
let circleArea = function(r) {
    return r * r * 3.14;
}

// 箭頭函數寫法
let circleArea2 = r => r * r * 3.14;
console.log(circleArea(10)); // 314
console.log(circleArea2(10)); // 314


console.log('---');


// 無參數
let greeting = () => 'Hello';
// 多個參數
let add = (n1, n2) => n1 + n2;

console.log(greeting());  // 'Hello'
console.log(add(10, 20)); // 30


console.log('---');


let foo = () => ({x: 10, y: 20});
let foo2 = ({x, y}) => x + y;

console.log(foo()); // {x: 10, y: 20}
console.log(foo2({x: 1, y: 2})); // 3


console.log('---');


let getDate = () => {
    let date = new Date();
    return date.toISOString().substr(0, 10);
}
console.log(getDate()); // 2018-01-03


console.log('---');


let arr = [1, 2, 3];
arr2 = arr.map(num => num * 10);
console.log(arr); // [1, 2, 3]
console.log(arr2); // [10, 20, 30]
