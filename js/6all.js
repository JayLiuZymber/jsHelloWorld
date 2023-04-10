/* 
JavaScript 從零開始 - Day6- 在函式 function 加入參數 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10234437
 */
function number() {
    console.log("Tim"); //字串要加引號
    console.log(323); //數字不用加引號
}
number(); //執行函式

function math(number) {
    var total = number; //宣告變數的值等於參數
    console.log(total); //驗證結果是變數的名稱，但這邊不是輸入字串，故不用加上引號
}
math(10); //執行函式，並帶入參數

function math2(numOne, numTwo) {
    var total = numOne + numTwo; //結果為兩個變數相加
    console.log(total); //驗證變數
}
math2(10, 25); //執行函式，並帶入參數
