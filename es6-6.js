/* 
[ES6-重點紀錄] 函數中的預設參數 & Rest 參數 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10195615
 */
// 函數中的預設參數
function multiply(a, b = 1) {
    return console.log(a * b);
}
// 等同於
function multiply2(a, b) {
    b = (typeof b !== 'undefined') ?  b : 1;
    return console.log(a * b);
}
multiply(10, 2); // 20
multiply(10); // 10
multiply2(10, 2); // 20
multiply2(10); // 10


console.log('---');


function defaultParam(){ return 'test'; }
function foo(a, b = a * 2, c = defaultParam()) {
    console.log(a, b, c);
}
foo(10); // 10 20 'test'


console.log('---');


// 函數參數的預設值設為空物件，也設置瞭解構賦值的預設值
// 此方式是為了避免產生 undefined
// 只要不是傳入物件，對應錯誤就會觸發參數預設值，再進而觸發解構賦值的內容
function foo({x = 0, y = 0} = {}) {
    return console.log([x, y]);
}
foo();    // [0, 0]
foo({});  // [0, 0]     
foo({x: 10, y: 20});  // [10, 20]
foo({x: 5});    // [5, 0]
foo({z: 1});    // [0, 0]


console.log('---');


// 放入 undefined 與 null 的差別
function foo2(x = 5, y = 10) {
    console.log(x, y);
}
foo2(undefined, null); // 5 null


console.log('---');


// 函數中的 Rest 參數
function foo3(...rest) {
    return console.log(rest);
}
// 等同於
function foo4() {
    return console.log(Array.prototype.slice.call(arguments));
}
foo3(); // []
foo3(10, 20, 30); // [10, 20, 30]
foo4(); // []
foo4(10, 20, 30); // [10, 20, 30]

// function foo(a, ...b, c) {}
// SyntaxError: Rest parameter must be last formal parameter


console.log('---');


// 使用在解構賦值上
// 將兩個陣列合併後再做排序大小，最後取出第一個值
let spread1 = [5, 2, 8];
let spread2 = [6, 1, 3];

let [first, ...rest] = [...spread1, ...spread2].sort();

console.log(first); // 1 
console.log(rest); // [2, 3, 5, 6, 8]
