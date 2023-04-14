/* 
[ES6-重點紀錄] class 類別語法 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10195991
 */
class foo {

    // class 的建構子
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    // class 的方法
    getPoint() {
        // return {x, y}; //Uncaught ReferenceError ReferenceError: x is not defined
        return {x: this.x, y: this.y};
    }
}

console.log(typeof foo) // "function"
console.log(foo === foo.prototype.constructor) // true

let f = new foo(10, 20);
console.log(f.getPoint()); // {x: 10, y: 20}