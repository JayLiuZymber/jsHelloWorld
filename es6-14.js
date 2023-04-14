/* 
[ES6-重點紀錄] 其他的 API 與特性擴展 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10196321
 */
let set = new Set();

// 可以使用 add() 方法設置資料內容
set.add(10);
set.add(10);
set.add('text');
set.add({sayHi: 'Hi'});

console.log(set);
// Set(4) {10, "text", {sayHi: "Hi"}} x
// Set(3) {size: 3, 10, text, {sayHi: 'Hi'}}


console.log('---');


// 這是基本語法
// var proxy = new Proxy(user, handler);

// 此用來攔截變數的 "物件內容"，改變它的原始行為 
var proxy = new Proxy({}, {
    get: function(target, propKey, receiver) {
        return 'getting';
    },
    set: function(target, propKey, value, receiver) {
        console.log('setting');
    }
});

console.log(proxy.test);  // 'getting' 
console.log(proxy.other); // 'getting' 
// 以下都會執行 console.log('setting');
proxy.abc = 10; 
proxy[10] = 'test';


console.log('---');


function* gen() { 
    yield 1;
    yield 2;
}

var g = gen();

// 第一次執行 next() - 停在 yield 1
// 返回 Object {value: 1, done: false}
console.log( g.next() ); 

// 第二次執行 next() - 停在 yield 2
// 返回 Object {value: 2, done: false}
console.log( g.next() ); 

// 第三次執行 next() - 沒有 yield 將會結束
// 返回 Object {value: undefined, done: true}
console.log( g.next() );


// Unicode 表示法
console.log("\u{41}\u{42}\u{43}"); // ABC


// 二進制和八進製表示法
console.log(0b1100011); // 99
console.log(0o143); // 99

// 指數運算
console.log(2**6); // 64