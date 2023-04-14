/* 
[ES6-重點紀錄] 宣告方式 let、const - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10192677
 */
let es6 = 'Hello World';
const Pi = 3.14;

// let 只會在區塊範疇內有效
if (true) {
    let a = 10;
    var b = 20;
}
// console.log(a); // ReferenceError: a is not defined.
console.log(b); // 20

// 使用 var 在 for 迴圈上 i 會自動成為全域變數
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log('Times: ' + i);
    }, 100);
}
// 產生 'Times: 5' 5 次相同的結果
// 因為函數裡的 i 會指向同一個全域變數 i (最終改變的結果)

// 使用 let 在 for 迴圈上
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log('Times: ' + i);
    }, 100);
}
// 產生 'Times: 0 ~ 4' 5 次不同的結果


console.log('---');


// IIFE 寫法
(function () {
    var tmp = 'Hi';
    // ...
}());
// 區塊範疇寫法，一樣可以達到相同效果
{
    let tmp = 'Hi';
    // ...
}


const school = {
    name: 'Hello World',
    student: 10
};
let school2 = school;
// 物件本身內的屬性是可以被修改或新增的 
school.name = 'ES6';
school.teacher = 3;
console.log(school); 
// {
//   name: 'ES6',
//   student: 10,
//   teacher: 3
// }

// 當被宣告為常數的物件時，就不能再去指向其他值了
// school = {}; // TypeError: Assignment to constant variable.
// school = school2;  // TypeError: Assignment to constant variable.
