/* 
[ES6-重點紀錄] 取值迴圈 for…of - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10194800
 */
let arr = ['a', 'b', 'c', 'd'];

// for...in 取得 "鍵名/屬性名"
for (let key in arr) {
    console.log(key); // '0' '1' '2' '3'
}

// for...of 取得 "鍵值/屬性值"
for (let value of arr) {
    console.log(value); // 'a' 'b' 'c' 'd'
}

// 使用在字串上
let string = 'Hello';


console.log('---');


let arr2 = ['a', 'b', 'c']
arr2.text = 'Hello';

for (let i in arr2) {
    if (arr.hasOwnProperty(i)) {
        console.log(i); //  '0', '1', '2', 'text'
    }
}

for (let i of arr2) {
    console.log(i); // 'a', 'b', 'c'
}


console.log('---');


let arr3 = ['a', 'b', 'c', 'd'];
for (let [key, value] of arr3.entries()) {
    console.log(key, value);
}
// 0, 'a'
// 1, 'b'
// 2, 'c'
// 3, 'd'


console.log('---');


// 內層為陣列類型時
let arr4 = [
    [1, 2, 3],
    [4, 5, 6],
    ['Hello', 'world']
];

for (let [x, y, z] of arr4) {
    console.log(x, y, z);
}
// 1, 2, 3
// 4, 5, 6
// 'Hello', 'world', undefined

// 內層為物件類型時
let family = [
    {name: 'ES6', type: 'JavaScript'},
    {name: 'for', type: 'Iterator'}
];

for (let {name, type} of family) {
    console.log(name + ': ' + type);
}
// 'ES6: JavaScript'
// 'for: Iterator'
