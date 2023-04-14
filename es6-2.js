/* 
[ES6-重點紀錄] 解構賦值 Destructuring Assignment - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10194743
 */
// 陣列的解構賦值
let [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// 物件的解構賦值
const { attr1: x, attr2: y } = { attr1: 10, attr2: 20 };
console.log(x); // 10
console.log(y); // 20

// 物件的屬性也能解構賦值
const { admin, user } = { admin: 'a', user: 'b' };
console.log(admin); // 'a'
console.log(user);  // 'b'


console.log('---');


// 字串的解構賦值
let [x1, y1] = 'Hi';
console.log(x1, y1); // 'H', 'i'

// Set 資料結構
let [x2, y2, z2] = new Set([10, 20, 30]);
console.log(x2, y2, z2); // 10, 20, 30


console.log('---');


// 先宣告變數再解構賦值
let x3, y3;
[x3, y3] = [5, 10];

// 沒有對應值的情況
let [a3, b3, c3] = [1, 2];
console.log(c3); // undefined

// 留空來跳過第二個值
function foo() {
  return [10, 20, 30];
}

let [a4, , b4] = foo();
console.log(a4, b4);  // 10, 30

// 允許給定預設值
let [x5 = 'a', y5 = 'b'] = ['A'];
let {size = 'big', name = ''} = {name: 'A'}; 
console.log(x5, y5); // 'A', 'b'
console.log(size, name); // 'big', 'A'


console.log('---');


// 交換變數的值 
let a6 = 1, b6 = 10;

[a6, b6] = [b6, a6];
console.log(a6); // 10
console.log(b6); // 1

// 與 rest 參數做結合
let [first, ...other] = [1, 2, 3, 4];
console.log(first); // 1
console.log(other); // [2, 3, 4]


console.log('---');


// 使用陣列在函數的參數上
function add([x, y]) {
    return x + y;
}
console.log(add([1, 2])); // 3

// 使用物件在函數的參數上
function who({id, name = ''}) {
    console.log('No.' + id + ' is ' + name);
}

const user2 = { id: 10,  name: 'ES6' };
who(user2); // 'No.10 is ES6'
// 使用在函數的回傳值上
function getPoint(){
    let x = 5, y = 10;
    return [x, y];
}

const point = {};
[point.x, point.y] = getPoint();
console.log(point); // {x: 5, y: 10}
