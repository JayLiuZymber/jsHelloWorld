/* 
[ES6-重點紀錄] Map 物件 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10196113
 */
// Map 基本使用
let map = new Map();

// 可以使用 set() 方法設置資料內容
map.set('first', 1);
map.set(10, 'ten');
map.set({sayHi: 'Hi'}, 'obj');

console.log(map);  
// Map(3) {"first" => 1, 10 => "ten", {…} => "obj"}


let map1 = new Map();
// 放置陣列集合
let map2 = new Map([
    ['first', 1],
    [10, 'ten'],
    [{sayHi: 'Hi'}, 'obj']
]);

// 搭配 for...of 循環取得[key, value]
for (let [key, value] of map2) {
    // ...
}

// 搭配擴展運算子取得陣列集合
console.log([...map1]);    
// []
console.log([...map2]);
// [
//    ['first', 1],
//    [10, 'ten'],
//    [{sayHi: 'Hi'}, 'obj']
// ]


let map3 = new Map();

map3.set('first', 1);
map3.set(10, 'ten');
map3.set({sayHi: 'Hi'}, 'obj');
map3.set(() => 'key', 123);
map3.set(Symbol('items'), [1, 2]);

console.log(map3.get(10))    // 'ten'
console.log(map3.has('first'))    // 'ture'

map3.delete('first') 
console.log(map3.get('first'))    // undefined

console.log(map3.size)    // 4
map3.clear()
console.log(map3.size)    // 0


console.log('---');


let map4 = new Map([
    [1, 'one'], 
    [2, 'two']
]);

for (let key of map4.keys()) {
    console.log(key);
}
// 1
// 2

for (let value of map4.values()) {
    console.log(value);
}
// 'one'
// 'two'

for (let [key, value] of map4.entries()) {
    console.log(key, value);
}
// 1 'one'
// 2 'two'
// 等同於
for (let [key, value] of map4) {
    console.log(key, value);
}

// 也能使用...擴展運算子直接轉成陣列類型
console.log([...map4.keys()]);  // [1, 2]
console.log([...map4.values()]);  // ['one', 'two']
