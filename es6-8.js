/* 
[ES6-重點紀錄] 物件語法糖的擴展 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10195961
 */
// 對物件直接寫入變數和函數，省略了許多關鍵詞
let birth = '2018/01/01';
let person = {
    name: '老王',

    // 等同於 birth: birth
    birth,

    // 等同於 sayHello: function() {...}
    sayHello() { 
        console.log('My name is '+ this.name + ' ' + this.birth);
    }
};
person.sayHello();  // 'My name is 老王 2018/01/01'


// 簡化函數的物件返回值
function getPoint() {
    let x = 5;
    let y = 10;
    return {x, y};
}
console.log(getPoint()); // { x: 5, y: 10 }


// 定義物件時，屬性名稱是可變化的
let key = 'Hello';
let obj = {
    [key]: true,
    ['a' + 'bc']: 123,
    ['def'+key]: 456
};
console.log(obj);  // { Hello: true, abc: 123 }
