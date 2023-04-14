/* 
[ES6-重點紀錄] 擴展運算子 Spread Operator - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10195477
 */
let spread = [1, 2, 3];

console.log(...spread); // 1 2 3
console.log(...['a', 'b']); // 'a' 'b'
// 等同於
console.log(1, 2, 3);
console.log('a', 'b');

console.log('---');

function foo(a, b, c) {
    console.log(a + b + c);
}
let arr = [10, 20, 30];
foo(...arr); // 60
// 等同於
foo.apply(null, arr); // 60


console.log('---');


let a1 = ['x', 'y'];
let a2 = ['w', ...a1, 'z'];
console.log(a2); // ['w', 'x', 'y', 'z']

let a11 = [1, 2];
let a21 = [...a11];
console.log(a21); // [1, 2]

let a12 = ['Hello', 'world'];
let a22 = [1, 2, 3];
a22 = [...a22, ...a12];
console.log(a22); // [1, 2, 3, 'Hello', 'world']
// 等同於
let a32 = [1, 2, 3];
a32 = a32.concat(a12);
console.log(a32);

let text = [...'Hello'];
console.log(text); // ['H', 'e', 'l', 'l', 'o']


console.log('---');


let obj1 = { name: 'foo', x: 10 };
let obj2 = { name: 'test', y: 20 };
// 複製物件
let clonedObj = { ...obj1 };
console.log(clonedObj);  // { name: 'foo', x: 10 }
// 合併串聯多個物件
// 與陣列不同的是: 有相同屬性名的，合併後只會使用最後一個物件的內容值
var mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);  // { name: 'test', x: 10, y: 20 }


console.log('---');


let list = [1, 2];
list.push(...[3, 4]);
console.log(list); // [1, 2, 3, 4]

// 等同於
let list2 = [1, 2];
list2.push.apply(list2, [3, 4]);
console.log(list2); // [1, 2, 3, 4]


console.log('---');


let today = new Date(...[2018, 1, 1]);
// 等同於
let today2 = new (Date.bind.apply(Date, [null, 2018, 1, 1]));
console.log(today); // Thu Feb 01 2018 00:00:00 GMT+0800 (台北標準時間)
console.log(today2);
