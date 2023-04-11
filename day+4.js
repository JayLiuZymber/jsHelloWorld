/* 
重新認識 JavaScript: Day 04 物件、陣列以及型別判斷 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10190962
 */
var person = new Object();
person.name = 'Kuro';
person.job = 'Front-end developer';
person.sayName = function() {
    // alert( this.name );
};

var person = {
    name: 'Kuro',
    job: 'Front-end developer',
    sayName: function() {
    //   alert( this.name );
    }
};

person.name;         // 'Kuro'
person.sayName();    // 'Kuro'
person["name"];         // 'Kuro'
person["sayName"]();    // 'Kuro'

var obj = {
    "001": "Hello"
}
// obj.001;        //  SyntaxError: Unexpected number
obj["001"];     // "Hello"
obj['001']

var obj = { };
obj.name = 'Object';
obj.name;       // 'Object'
delete obj.name;
obj.name;       // 刪除屬性後變成 undefined

var obj = {};
console.log( obj.name );      // undefined

var obj = {
    name: 'Object'
};
// 透過 in 檢查屬性
console.log( 'name' in obj );     // true
console.log( 'value' in obj );    // false
// 透過 hasOwnProperty() 方法檢查
obj.hasOwnProperty('name');       // true
obj.hasOwnProperty('value');      // false

obj.hasOwnProperty('hasOwnProperty');    // false
'hasOwnProperty' in obj;                 // true

console.log('---')

var a = new Array();
a[0] = "apple";
a[1] = "boy";
a[2] = "cat";
a.length;     // 3

var a = [];
a[0] = "apple";
a[1] = "boy";
a[2] = "cat";
a.length;     // 3

var a = ["apple", "boy", "cat"];
a.length;     // 3
a.length = 1;
console.log(a);   // ["apple"]
a.length = 3;
console.log(a);   // ["apple", undefined, undefined]

var array = ['a', 'b', 'c'];
array.length;         // 3
array[7] = 'z';
console.log(array);   // ["a", "b", "c", undefined, undefined, undefined, undefined, "z"]

var array = ['a', 'b', 'c'];
array.length;           // 3
array.push('d');
console.log(array);     // ['a', 'b', 'c', 'd']

Array.isArray([]);            // true
Array.isArray([1]);           // true
Array.isArray(new Array());   // true

Array.isArray();              // false
Array.isArray({});            // false
Array.isArray(null);          // false
Array.isArray(undefined);     // false
