/* 
重新認識 JavaScript: Day 10 函式 Functions 的基本概念 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10191549
 */
function square(number) {
    return number * number;
}
console.log( square(2) );        // 4
console.log( square(3) );        // 9
console.log( square(4) );        // 16

var square2 = function (number) {
    return number * number;
};
console.log( '%c'+square2(2), 'color: yellow' );
console.log( '%c'+square2(3), 'color: yellow' );
console.log( '%c'+square2(4), 'color: yellow' );

var square3 = function func(number) {
    console.log( typeof func );   // "function"
    return number * number;
};
square3();
console.log( typeof func );     // undefined

var square4 = function func(number) {
    console.log( typeof square4 );   // "function"
    return number * number;
};
square4();

// 透過 new 來建立 Function "物件"
var square5 = new Function('number', 'return number * number');

console.log('---')

var x = 1;
var doSomeThing = function(y) {
    var x = 100;
    return x + y;
};
console.log( doSomeThing(50) );   // ? 150
console.log( x );                 // ? 1

var x = 1;
var doSomeThing = function(y) {
    // 內部找不到 x 就會到外面找，直到全域變數為止。
    // 都沒有就會報錯：ReferenceError: x is not defined
    return x + y;
};
console.log( doSomeThing(50) );   // 51

var x = 1;
var doSomeThing = function(y) {
  x = 100;
  return x + y;
};
console.log( doSomeThing(50) );   // ? 150
console.log( x );                 // ? 100

var x = 1;
var doSomeThing = function(y) {
  console.log(x);   // 會出現什麼？ undefined
  var x = 100;
  return x + y;
};
console.log( doSomeThing(50) );   // 150
console.log( x );                 // 1

var x = 1;
var doSomeThing = function(y) {
  var x;
  console.log(x);   // 會出現什麼？ undefined

  x = 100;
  return x + y;
};
console.log( doSomeThing(50) );   // 150
console.log( x );                 // 1

console.log('---');

console.log( square10(2) );    // 4
function square10(number) {
  return number * number;
}

// square11(2);    // TypeError: square is not a function
var square11 = function (number) {
  return number * number;
};

var a = 10;
// console.log( window.a );    // ? 10
