/* 
重新認識 JavaScript: Day 05 JavaScript 是「傳值」或「傳址」？ - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10191057
 */
var a = 10;
var b = 10;
// 在 JavaScript 判斷是否「相等」用 " === "
// 後續提到運算子會詳細介紹。
console.log( a === b );      // true

var a = 'Kuro';
var b = 'Kuro';
var c = 'Jack';
console.log( a === b );      // true
console.log( a === c );      // false

console.log('---')

var obj1 = { value: 10 };
var obj2 = { value: 10 };
console.log( obj1 === obj2 );

var a = 10;
var b = 10;
console.log( a === b );      // true

// 兩個 coin 的價值都是 10，但 coin1 與 coin2 卻不是同一個實體。
var coin1 = { value: 10 };
var coin2 = { value: 10 };
console.log( coin1 === coin2 );      // false
// 我在 coin1 畫了一個 X
coin1.cross = true;
// coin2.cross 當然不可能會有東西
console.log( coin2.cross );          // undefined

console.log('---')

var a = 10;
var b = a;
console.log( a );   // 10
console.log( b );   // 10

a = 100;
// 變數 b 依然是 10，而變數 a 變成了 100
console.log( a );   // 100
console.log( b );   // 10

console.log('---')

var coin1 = { value: 10 };
var coin2 = coin1;
console.log( coin1.value );       // 10
console.log( coin2.value );       // 10

coin1.value = 100;
console.log( coin1.value );       // 100
console.log( coin2.value );       // 100
console.log( coin1 === coin2 );    // true

console.log('---')

var coin1 = { value: 10 };
function changeValue(obj) {
  obj = { value: 123 };
}
changeValue(coin1);
console.log(coin1);   // 此時 coin1 仍是 { value: 10 }

var coin1 = { value: 10 };
function changeValue2(obj) {
  // 僅更新 obj.value，並未重新賦值
  obj.value = 123;
}
changeValue2(coin1);
console.log(coin1);   // 此時 coin1 則會變成 { value: 123 }

var a = 10;
var b = a;
a = 100;
console.log(a);     // 100
console.log(b);     // 10

console.log((new Error).stack.split("\n")[1])
