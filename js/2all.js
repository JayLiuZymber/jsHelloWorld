/* 
JavaScript 從零開始 - Day2- 認識變數 variable 與使用方法 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天
https://ithelp.ithome.com.tw/articles/10233723
 */
// if (0) //for node.js
if (1)//for html
{
    var number = 8
    //建立變數
    document.getElementById('number').textContent = number
    //透過 textContent 控制 id 的內容，結果要等於變數名稱
    
    var myName = "Tim";
    //建立變數，字串值要加上引號
    document.getElementById('myName').textContent = myName
    //透過 textContent 控制 id 的內容，結果要等於變數名稱
    
    var boolean = true;
    //建立變數，boolean 值只有 true 跟 false
    document.getElementById('boolean').textContent = boolean;
    //透過 textContent 控制 id 的內容
    
}

var number;
//沒有給值，所以會是 undefined

console.log(number); //因為前面沒有變數的值，結果會是 undefined
var number = 1;
console.log(number)
