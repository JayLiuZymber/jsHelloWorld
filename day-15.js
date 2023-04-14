/* 
Day15-淺談JS版本差異！ES5、ES6 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10206587
 */
const a1 = 123;
let b1 = 123;
// a1 = 456;      // 錯誤a為定量其值不可改變
b1 = 456;      // b的值已被改變成456

const name = 'Andy';
// ES5寫法
var str = 'Hello' + name + "！";
// ES6寫法
const str2 = `Hello ${name}！`;
const str3 = 'Hello ${name}！';
console.log(str);
console.log(str2);
console.log(str3);

// ES5寫法
var html = "<div>";
html +=    "  <p>Hello World</p>";
html +=    "</div>";
// ES6寫法
const html2 = `
  <div>
    <p>Hello World</p>
  </div>
`

if(0) {
// if(1) {
    console.log('---ES5');
// ES5寫法
var arr = [1, 2, 3];
var obj = {d: 1, e: 2, f: 3};
var a = arr[0],
    b = arr[1],
    c = arr[2];
var d = obj.d,
    e = obj.e,
    f = obj.f;
console.log(a, b, c);    // 1 2 3
console.log(d, e, f);    // 1 2 3
}
else{
    console.log('---ES6');
// ES6寫法
const arr = [1, 2, 3];
const obj = {d: 1, e: 2, f: 3};
const [a, b, c] = arr;   // a = arr[0], b = arr[1], c = arr[2]
const {d, e, f} = obj;   // d = obj.d, e = obj.e, f = obj.f
console.log(a, b, c);    // 1 2 3
console.log(d, e, f);    // 1 2 3
}

if(0){
// if(1){
    console.log('---ES5');
// ES5寫法
var name1 = 'Andy';
var obj = {
    name1: name1
};
}
else{
    console.log('---ES6');
// ES6寫法
const name1 = 'Andy';
const obj = { name1 };
console.log(obj.name1);
}

if(0){
// if(1){
    console.log('---ES5');
// ES5寫法
var arr = [1, 2, 3];
var mapArr = arr.map(function(element) {
    return element * 2;
});
}
else{
    console.log('---ES6');
// ES6寫法
const arr = [1, 2, 3];
const mapArr2 = arr.map(element => element * 2);
const mapArr3 = arr.map((element) => element * 3);
const mapArr4 = arr.map((element) => {return element * 4});
console.log(mapArr2);
console.log(mapArr3);
console.log(mapArr4);
}

console.log('---');

class square {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width * this.height;
    }
}
const square1 = new square(10, 10);
const area = square1.calcArea();
console.log(area);    // 100
