/* 
JavaScript 從零開始 - Day9- 全域變數與區域變數 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10234441
 */
function fName(aName) {
    var number = aName *10; //區域變數
    console.log(number); //驗證變數
}
fName(); //沒有輸入參數，執行函式
fName(10); //帶入參數，執行函式

var number
function fName2(aName) {
  number = 10; //區域變數
  console.log(number); //驗證變數
}
fName2(); //執行函式
console.log(number);

var number; //全域變數，沒有給予數值
function fName3(aName) {
  number = aName + 1; //區域變數
  console.log(number); //驗證變數
}
fName3(10); //執行函式
console.log(number);
