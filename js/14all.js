/* 
JavaScript 從零開始 - Day14 - Array 陣列 的基本認識 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10235767
 */
var father = "Tom";
var mother = "Mary";
var son = "John";
var daughter = "Linda";
var chair = 4;
var chair1 = "red";
var chair2 = "blue";

var desk = [4, 1, 2, 3];
console.log(desk[0]); // 因為排序第一是 4，所以結果會出現 4

var desk = [4, 1, 2, 3];
var desk1 = desk[0];
console.log(desk1); // 結果會出現 4

var desk = [4, 1, 2, 3];
var desk1 = desk[0];
console.log(desk1); // 結果會出現 4
console.log(desk.length); //結果會出現 4，代表有陣列的長度有四個

var number = [1, 2, 3];
number.length; // 會顯示 3，指有三個陣列資料
number.push(4);
console.log(number); // [1, 2, 3, 4] 新增第四個陣列資料

var number = [1, 2, 3];
number.length; // 會顯示 3，指有三個陣列資料
number.splice(0, 2); //從第一筆資料刪除，刪除兩筆資料
console.log(number); // [3]
