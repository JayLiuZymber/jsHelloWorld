/* 
重新認識 JavaScript: Day 03 變數與資料型別 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10190873
Chrome 瀏覽器中執行 JavaScript | 菜鳥教學
https://www.runoob.com/js/js-chrome.html
 */
// 透過 var 宣告變數 n，因為沒有給 n 數值，此時 n 的內容為 undefined。
var n;
// 宣告變數 m 的同時也給了變數 m 值，此時 m 的內容為數字的 1。
var m = 1;

// 未宣告變數就去存取時
// 主控台會出現 Uncaught ReferenceError: hello is not defined
console.log(hello);

// 對未宣告的變數 m 賦值
m = 1;
console.log(m);  // ok 好，會出現 1

typeof  true;         // 'boolean'
typeof  'Kuro';       // 'string'
typeof  123;          // 'number'
typeof  { };          // 'object'
typeof  [ ];          // 'object'

// 下面兩個要特別注意，之後的篇幅會介紹到
// typeof window.alert;  // 'function'
typeof null;          // 'object'

var str  = '這是一個字串';
var str2 = "這也是一個字串";

// var str = 'Let's go!';    // error
var str = "Let's go!";    // OK
var str = 'Let\'s go!';    // OK

var hello = 'Hello, ' + 'World';

var hello = '這不是一行文 \
這是第二行 \
這是第三行';

var a = 10;
var b = 12.34;

typeof(NaN);    // "number"
NaN === NaN;    // false

isNaN(NaN);       // true
isNaN(123);       // false
isNaN("123");     // false, 因為字串 "123" 可以透過隱含的 Number() 轉型成數字
isNaN("NaN");     // true, 因為字串 "NaN" 無法轉成數字

var a = true;
var b = false;
var c = ( 100 > 10 );    // true

var a;         // undefined, 尚未給值，未定義
var b = null;  // null, 明確代表此變數沒有值

Number( null );         // 0
Number( undefined );    // NaN

(function() {
    var undefined = 'foo';
    console.log(undefined, typeof undefined);    // 'foo', 'string'
})()
/* 
(function(undefined) {
    console.log(undefined, typeof undefined);    // 'undefined'
})('foo');
 */
