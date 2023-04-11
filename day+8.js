/* 
重新認識 JavaScript: Day 08 Boolean 的真假判斷 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10191343
 */
var a = 10 * 100;

var a = 10;
a += 100;           // 代表 a = a + 100;
console.log( a );   // 110

for (i = 0, j = 10; i < 10; i++, j++) {
    k = i + j;
}

var a = 10;
var b = 10;

var a = 10, b = 10;

var a = b = 10;
console.log(a);     // 10
console.log(b);     // 10
// b = 10;
// var a = b;

(function(){
    var a1 = b1 = 10
    console.log(a1, b1);    // 10, 10
})();
// 離開了變數作用範圍的 a 會變成 undefined
// 而 b 卻變成全域變數而保留了狀態
// console.log(a1, b1);    // undefined, 10

console.log('---');

var a = 123;
var b = "abc";
var c = null;
console.log( a && b );        // "abc"
console.log( a || b );        // 123
console.log( c && a );        // null
console.log( c || b );        // "abc"
console.log( c || a );        // 123

Boolean("false")     // ? true
Boolean("0")         // ? true
Boolean("''")        // ? true
Boolean( {} ) //true
Boolean( [] ) //true
Boolean( function(){} ) //true

!!'false' ==  !!'true'    // ? true
!!'false' === !!'true'    // ? true

console.log('---');

console.log( true && false );
console.log( true && true );
